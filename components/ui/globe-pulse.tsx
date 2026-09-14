"use client";

import { useEffect, useRef, useCallback } from "react";
import createGlobe from "cobe";

interface PulseMarker {
  location: [number, number];
  /** Base marker dot size, 0-0.1 roughly. */
  size?: number;
  /** Phase offset (seconds) so markers don't all pulse in lockstep. */
  delay?: number;
}

interface GlobePulseProps {
  markers?: PulseMarker[];
  className?: string;
  /** Radians per frame of ambient auto-rotation. */
  speed?: number;
}

// Cities standing in for "clients anywhere" — not a claim about real
// customers or offices, just the reach a cold-outreach system is built for.
const DEFAULT_MARKERS: PulseMarker[] = [
  { location: [51.51, -0.13], delay: 0 }, // London
  { location: [40.71, -74.01], delay: 0.6 }, // New York
  { location: [35.68, 139.65], delay: 1.2 }, // Tokyo
  { location: [-33.87, 151.21], delay: 1.8 }, // Sydney
  { location: [52.52, 13.4], delay: 2.4 }, // Berlin
  { location: [19.43, -99.13], delay: 3.0 }, // Mexico City
];

/**
 * A slowly auto-rotating, drag-to-spin globe with a handful of markers that
 * pulse in size (drawn natively by cobe on the sphere itself, so the glow
 * always sits exactly on the rotating marker — no separate DOM overlay
 * trying to track a 3D point, which is what breaks on rotation/resize).
 */
export function GlobePulse({
  markers = DEFAULT_MARKERS,
  className = "",
  speed = 0.0022,
}: GlobePulseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerMoveX = useRef(0);
  const phiRef = useRef(0);
  const dragPhiRef = useRef(0);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    pointerInteracting.current = e.clientX;
    pointerMoveX.current = 0;
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
  }, []);

  const onPointerUpOrOut = useCallback(() => {
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    if (pointerInteracting.current === null) return;
    const delta = e.clientX - pointerInteracting.current;
    pointerMoveX.current = delta;
    pointerInteracting.current = e.clientX;
    dragPhiRef.current += delta / 200;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let globe: ReturnType<typeof createGlobe> | null = null;
    let animationId = 0;
    let destroyed = false;
    const start = Date.now();

    function buildMarkers(t: number) {
      return markers.map((m) => {
        const base = m.size ?? 0.045;
        // 0..1 pulse, per-marker phase offset so they don't sync up
        const wave = (Math.sin((t + (m.delay ?? 0)) * 1.6) + 1) / 2;
        return {
          location: m.location,
          size: base * (0.7 + wave * 0.6),
        };
      });
    }

    function init() {
      const width = canvas!.offsetWidth;
      if (width === 0 || globe) return;

      globe = createGlobe(canvas!, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0.28,
        dark: 1,
        diffuse: 1.4,
        mapSamples: 15000,
        mapBrightness: 5.5,
        baseColor: [0.66, 0.62, 0.53],
        markerColor: [0.8, 0.66, 0.38],
        glowColor: [0.22, 0.18, 0.12],
        markers: buildMarkers(0),
        opacity: 0.92,
      });

      function frame() {
        if (destroyed || !globe) return;
        if (pointerInteracting.current === null) {
          phiRef.current += speed;
        }
        const t = (Date.now() - start) / 1000;
        globe.update({
          phi: phiRef.current + dragPhiRef.current,
          markers: buildMarkers(t),
        });
        animationId = requestAnimationFrame(frame);
      }
      animationId = requestAnimationFrame(frame);

      requestAnimationFrame(() => {
        if (!destroyed && canvas) canvas.style.opacity = "1";
      });
    }

    if (canvas.offsetWidth > 0) {
      init();
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect();
          init();
        }
      });
      ro.observe(canvas);
      return () => ro.disconnect();
    }

    return () => {
      destroyed = true;
      if (animationId) cancelAnimationFrame(animationId);
      globe?.destroy();
    };
  }, [markers, speed]);

  return (
    <div className={`relative mx-auto aspect-square w-full max-w-sm select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUpOrOut}
        onPointerOut={onPointerUpOrOut}
        onPointerMove={onPointerMove}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1s ease",
          touchAction: "none",
        }}
      />
    </div>
  );
}
