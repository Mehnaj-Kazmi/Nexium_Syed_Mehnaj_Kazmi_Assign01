import { Quote } from "@/data/quotes";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  quotes: Quote[];
}

export default function QuoteList({ quotes }: Props) {
  return (
    <div className="grid gap-4 mt-6">
      {quotes.map((q, idx) => (
        <Card key={idx}>
          <CardContent className="p-4">
            <p className="font-medium">“{q.text}”</p>
            {q.author && (
              <p className="text-right mt-2 text-sm text-muted-foreground">
                — {q.author}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
