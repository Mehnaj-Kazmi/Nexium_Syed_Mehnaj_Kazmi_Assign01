export type Quote = {
  topic: string;
  text: string;
  author?: string;
};

export const quotes: Quote[] = [
  { topic: "success", text: "Success is not final; failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { topic: "success", text: "Opportunities don’t happen. You create them.", author: "Chris Grosser" },
  { topic: "success", text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },

  { topic: "fitness", text: "The body achieves what the mind believes." },
  { topic: "fitness", text: "Sweat is just fat crying." },
  { topic: "fitness", text: "No pain, no gain." },

  { topic: "study", text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
  { topic: "study", text: "Push yourself, because no one else is going to do it for you." },
  { topic: "study", text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
];
