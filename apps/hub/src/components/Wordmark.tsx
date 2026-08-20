import { cn } from '../lib/utils.js';

interface WordmarkProps {
  className?: string;
  dark?: boolean;
}

/**
 * Substitui o logotipo oficial até que o arquivo original (SVG/AI) esteja
 * disponível — ver Manual da Marca V1.0, seção visual 5-7. Usa só o
 * wordmark em Inter, sem recriar ou redesenhar a tipografia do logo real.
 */
export function Wordmark({ className, dark = true }: WordmarkProps) {
  return (
    <span
      className={cn(
        'font-sans text-lg font-bold tracking-tight',
        dark ? 'text-off-white' : 'text-graphite',
        className
      )}
    >
      MONVI
      <span className="align-top text-[0.5em]">™</span>
    </span>
  );
}
