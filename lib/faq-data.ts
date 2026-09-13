export const COURSE_FAQS = [
  {
    q: "Do I need any prior outreach experience?",
    a: "No. The course is built for beginners. Every script and template is plug and play, and the 30-day plan tells you exactly what to do each day, in order.",
  },
  {
    q: "What if I don't have a portfolio or testimonials yet?",
    a: "There's a section built specifically for this: how to package your offer and frame your outreach when you're just starting out, including a “founding client” discounted first project framework that gets you your first proof of work.",
  },
  {
    q: "Will this work for my niche (design, writing, video editing, dev, etc.)?",
    a: "Yes. The scripts and system are niche-agnostic — you plug in your own service and target audience. The course also shows you how to find and qualify the right prospects for whatever you offer.",
  },
  {
    q: "How much time do I need per day?",
    a: "Most of the daily outreach system takes 20 to 40 minutes a day. It's designed to fit around a job, school, or other freelance work, since consistency matters more than volume.",
  },
  {
    q: "Is this just cold email, or does it cover DMs too?",
    a: "Both, plus phone and in-person outreach templates. You'll get scripts for email, Instagram/LinkedIn DMs, and short scripts for calls or in-person conversations.",
  },
  {
    q: "Is this a course or a toolkit?",
    a: "Both — Cold Start pairs a full course that explains the system with the actual scripts, templates, and tracker you use to run it. You're not just given theory, and you're not just handed a script pack with no context.",
  },
  {
    q: "How does access work once I buy?",
    a: "Everything is delivered instantly through Whop. As soon as you subscribe, you get access to the full course, the Script Vault, the 30-day action plan, and every template inside it — no waiting, nothing separate to track down.",
  },
  {
    q: "Do I need to buy any tools or software?",
    a: "No paid tools are required. The course shows you how to track outreach with a simple free spreadsheet — no CRM subscription needed.",
  },
  {
    q: "How is this different from free advice on YouTube/TikTok?",
    a: "Free content gives you fragments. This gives you the entire system in one place: the exact scripts, the daily structure, the offer framework, and a 30-day plan — so you're not piecing together generic advice and guessing what order to do things in.",
  },
  {
    q: "Is this a subscription? Can I cancel?",
    a: "You pick how you pay: $9.99/mo (33% off the regular $14.99), $59/year (works out to about $4.92/mo), or a $129 one-time lifetime payment with no recurring charge. The monthly and yearly plans can be cancelled anytime from your Whop account — no long-term contract. The AI Personalization Pack is included at every plan.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "Reach out through Whop and we'll sort it out. This is a system that requires you to actually send the messages — if you do the daily outreach for 30 days and follow the scripts, you will get replies, and the course shows you how to fix your approach if you're not.",
  },
  {
    q: "Is the Starter Kit really free?",
    a: "It's free for the first 3 days, then $1.99/mo if you don't cancel. You can cancel anytime from your Whop account, including before the trial ends, and you won't be charged.",
  },
] as const;

export const AI_PACK_FAQS = [
  {
    q: "What does the AI Personalization Pack cost?",
    a: "Free for 3 days, then $2.99/mo. Cancel anytime from your Whop account before or after the trial ends.",
  },
  {
    q: "Do I need a paid AI subscription to use this?",
    a: "No. The prompts work with the free version of ChatGPT or Claude. A paid plan just means faster responses, not better ones.",
  },
  {
    q: "Do I need to already own Cold Start?",
    a: "No, this works on its own for any cold outreach. It's built to pair with Cold Start, but not locked to it.",
  },
  {
    q: "Is this the same as the course?",
    a: "No. Cold Start teaches the full system and gives you scripts. This pack is specifically for personalizing whatever message you're sending, using AI, in seconds.",
  },
] as const;

// Short preview subset shown on the home page, linking out to the full FAQ.
// Referenced by question text (not index) so inserting/reordering FAQs above
// can never silently swap in the wrong preview question.
function findFaq(question: string) {
  const match = COURSE_FAQS.find((item) => item.q === question);
  if (!match) throw new Error(`FAQ preview: question not found — "${question}"`);
  return match;
}

export const HOME_FAQ_PREVIEW = [
  findFaq("Do I need any prior outreach experience?"),
  findFaq("What if I don't have a portfolio or testimonials yet?"),
  findFaq("Is this a subscription? Can I cancel?"),
] as const;
