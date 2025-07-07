"use client";

import { useState } from "react";
import { quotes } from "@/data/quotes";
import QuoteForm from "@/components/QuoteForm";
import QuoteList from "@/components/QuoteList";

export default function Home() {
  const [list, setList] = useState(quotes.slice(0, 3));

  function handleTopic(topic: string) {
    const filtered = quotes.filter((q) => q.topic === topic);
    const next = filtered.length ? filtered.slice(0, 3) : quotes.slice(0, 3);
    setList(next);
  }

  return (
    <main className="container py-10 max-w-lg">
      <h1 className="text-3xl font-bold mb-6">Motivational Quote Generator</h1>
      <QuoteForm onSubmit={handleTopic} />
      <QuoteList quotes={list} />
    </main>
  );
}
