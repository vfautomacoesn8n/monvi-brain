import { Briefcase, Home, LogOut, TrendingUp, Workflow } from 'lucide-react';
import { cn } from '../lib/utils.js';
import { Wordmark } from './Wordmark.js';
import type { HubView } from '../pages/HomePage.js';

interface SidebarProps {
  view: HubView;
  onNavigate: (view: HubView) => void;
  onLogout: () => void;
}

const navItems: Array<{ view: HubView; label: string; icon: typeof Home }> = [
  { view: 'home', label: 'Início', icon: Home },
  { view: 'commercial', label: 'Comercial', icon: TrendingUp },
  { view: 'automations', label: 'Automações', icon: Workflow },
  { view: 'projects', label: 'Projetos', icon: Briefcase },
];

export function Sidebar({ view, onNavigate, onLogout }: SidebarProps) {
  return (
    <aside className="flex w-56 shrink-0 flex-col border-r border-off-white/10 bg-deep-graphite">
      <div className="px-4 py-5">
        <Wordmark />
      </div>
      <nav className="flex flex-1 flex-col gap-1 px-3">
        {navItems.map(({ view: itemView, label, icon: Icon }) => {
          const active = itemView === view;
          return (
            <button
              key={itemView}
              type="button"
              onClick={() => onNavigate(itemView)}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                active
                  ? 'bg-signal-blue/10 text-signal-blue'
                  : 'text-medium-gray hover:bg-off-white/5 hover:text-off-white'
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          );
        })}
      </nav>
      <div className="border-t border-off-white/10 px-3 py-3">
        <button
          type="button"
          onClick={onLogout}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-medium-gray transition-colors hover:bg-off-white/5 hover:text-off-white"
        >
          <LogOut className="h-4 w-4" />
          Sair
        </button>
      </div>
    </aside>
  );
}
