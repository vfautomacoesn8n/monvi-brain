import { useState } from 'react';
import { useAuth } from './auth/AuthContext.js';
import { LoginPage } from './auth/LoginPage.js';
import { HomePage, type HubView } from './pages/HomePage.js';
import { CommercialDashboardPage } from './pages/CommercialDashboardPage.js';
import { AutomationsDashboardPage } from './pages/AutomationsDashboardPage.js';
import { ProjectsDashboardPage } from './pages/ProjectsDashboardPage.js';

function AuthenticatedApp({ token }: { token: string }) {
  const { logout } = useAuth();
  const [view, setView] = useState<HubView>('home');

  return (
    <div className="app-shell">
      <header className="app-header">
        <button type="button" onClick={() => setView('home')}>
          Monvi Hub
        </button>
        <button type="button" onClick={logout}>
          Sair
        </button>
      </header>
      <main>
        {view === 'home' && <HomePage onNavigate={setView} />}
        {view === 'commercial' && <CommercialDashboardPage token={token} />}
        {view === 'automations' && <AutomationsDashboardPage token={token} />}
        {view === 'projects' && <ProjectsDashboardPage token={token} />}
      </main>
    </div>
  );
}

export function App() {
  const { sessionToken } = useAuth();

  if (!sessionToken) {
    return <LoginPage />;
  }

  return <AuthenticatedApp token={sessionToken} />;
}
