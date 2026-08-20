import { Card, CardContent, CardGlow, CardHeader, CardTitle } from './ui/card.js';

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
      <CardContent className="flex flex-col gap-3">
        <div className="relative">
          <CardGlow />
          <p className="relative font-mono text-3xl font-semibold text-off-white">{total}</p>
        </div>
        {byKey && (
          <div className="flex flex-wrap gap-1.5">
            {Object.entries(byKey).map(([key, count]) => (
              <span
                key={key}
                className="inline-flex items-center gap-1 rounded-full border border-off-white/10 bg-deep-graphite px-2.5 py-1 text-xs text-medium-gray"
              >
                {key}
                <span className="font-mono text-off-white">{count}</span>
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
