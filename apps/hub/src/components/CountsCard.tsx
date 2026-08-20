import { Card, CardContent, CardHeader, CardTitle } from './ui/card.js';

interface CountsCardProps {
  title: string;
  total: number;
  byKey?: Record<string, number> | undefined;
}

export function CountsCard({ title, total, byKey }: CountsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="font-mono text-3xl font-semibold text-graphite">{total}</p>
        {byKey && (
          <ul className="flex flex-col gap-1">
            {Object.entries(byKey).map(([key, count]) => (
              <li key={key} className="flex justify-between text-sm text-medium-gray">
                <span>{key}</span>
                <span className="font-mono text-graphite">{count}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
