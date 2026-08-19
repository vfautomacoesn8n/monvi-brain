interface CountsCardProps {
  title: string;
  total: number;
  byKey?: Record<string, number> | undefined;
}

export function CountsCard({ title, total, byKey }: CountsCardProps) {
  return (
    <div className="counts-card">
      <h3>{title}</h3>
      <p className="counts-card-total">{total}</p>
      {byKey && (
        <ul>
          {Object.entries(byKey).map(([key, count]) => (
            <li key={key}>
              <span>{key}</span>
              <span>{count}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
