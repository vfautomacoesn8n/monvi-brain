import { useState } from 'react';
import { useAuth } from './auth/AuthContext.js';
import { LoginPage } from './auth/LoginPage.js';
import { HomePage, type HubView } from './pages/HomePage.js';
import { CommercialDashboardPage } from './pages/CommercialDashboardPage.js';
import { AutomationsDashboardPage } from './pages/AutomationsDashboardPage.js';
import { ProjectsDashboardPage } from './pages/ProjectsDashboardPage.js';
import { Sidebar } from './components/Sidebar.js';

function AuthenticatedApp({ token }: { token: string }) {
  const { logout } = useAuth();
  const [view, setView] = useState<HubView>('home');

  return (
    <div className="flex min-h-screen bg-deep-graphite">
      <Sidebar view={view} onNavigate={setView} onLogout={logout} />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-4xl">
          {view === 'home' && <HomePage onNavigate={setView} />}
          {view === 'commercial' && <CommercialDashboardPage token={token} />}
          {view === 'automations' && <AutomationsDashboardPage token={token} />}
          {view === 'projects' && <ProjectsDashboardPage token={token} />}
        </div>
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
