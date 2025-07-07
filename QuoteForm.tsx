"use client";

import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  onSubmit: (topic: string) => void;
}

export default function QuoteForm({ onSubmit }: Props) {
  const [topic, setTopic] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit(topic.trim().toLowerCase());
    setTopic("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        placeholder="Enter a topic like success"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Button type="submit">Get Quotes</Button>
    </form>
  );
}
