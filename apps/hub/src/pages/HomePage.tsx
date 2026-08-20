import { Briefcase, TrendingUp, Workflow } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card.js';

export type HubView = 'home' | 'commercial' | 'automations' | 'projects';

interface HomePageProps {
  onNavigate: (view: HubView) => void;
}

const cards: Array<{ view: HubView; title: string; description: string; icon: typeof Briefcase }> = [
  {
    view: 'projects',
    title: 'Projetos',
    description: 'Tarefas, entregáveis, riscos e aprovações por projeto.',
    icon: Briefcase,
  },
  {
    view: 'commercial',
    title: 'Comercial',
    description: 'Leads, oportunidades e atividades comerciais.',
    icon: TrendingUp,
  },
  {
    view: 'automations',
    title: 'Automações',
    description: 'Workflows e invocações de automação.',
    icon: Workflow,
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold text-graphite">Painéis</h1>
        <p className="text-sm text-medium-gray">Escolha um painel para visualizar.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {cards.map(({ view, title, description, icon: Icon }) => (
          <button key={view} type="button" onClick={() => onNavigate(view)} className="text-left">
            <Card className="h-full transition-colors hover:border-signal-blue">
              <CardHeader>
                <Icon className="h-5 w-5 text-signal-blue" />
                <CardTitle className="text-base">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-medium-gray">{description}</p>
              </CardContent>
            </Card>
          </button>
        ))}
      </div>
    </div>
  );
}
