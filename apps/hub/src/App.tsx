import { useState } from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from './auth/AuthContext.js';
import { LoginPage } from './auth/LoginPage.js';
import { HomePage, type HubView } from './pages/HomePage.js';
import { CommercialDashboardPage } from './pages/CommercialDashboardPage.js';
import { AutomationsDashboardPage } from './pages/AutomationsDashboardPage.js';
import { ProjectsDashboardPage } from './pages/ProjectsDashboardPage.js';
import { Wordmark } from './components/Wordmark.js';
import { Button } from './components/ui/button.js';

function AuthenticatedApp({ token }: { token: string }) {
  const { logout } = useAuth();
  const [view, setView] = useState<HubView>('home');

  return (
    <div className="min-h-screen bg-off-white">
      <header className="flex items-center justify-between border-b border-light-gray px-6 py-4">
        <button type="button" onClick={() => setView('home')} className="flex items-center gap-2">
          <Wordmark />
          <span className="font-mono text-xs text-medium-gray">hub</span>
        </button>
        <Button variant="ghost" size="sm" onClick={logout}>
          <LogOut className="h-4 w-4" />
          Sair
        </Button>
      </header>
      <main className="mx-auto max-w-5xl p-6">
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
