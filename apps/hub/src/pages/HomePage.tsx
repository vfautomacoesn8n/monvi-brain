export type HubView = 'home' | 'commercial' | 'automations' | 'projects';

interface HomePageProps {
  onNavigate: (view: HubView) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="home-page">
      <h1>Monvi Hub</h1>
      <p>Escolha um painel para visualizar.</p>
      <div className="home-cards">
        <button type="button" className="home-card" onClick={() => onNavigate('projects')}>
          <h2>Projetos</h2>
          <p>Tarefas, entregáveis, riscos e aprovações por projeto.</p>
        </button>
        <button type="button" className="home-card" onClick={() => onNavigate('commercial')}>
          <h2>Comercial</h2>
          <p>Leads, oportunidades e atividades comerciais.</p>
        </button>
        <button type="button" className="home-card" onClick={() => onNavigate('automations')}>
          <h2>Automações</h2>
          <p>Workflows e invocações de automação.</p>
        </button>
      </div>
    </div>
  );
}
