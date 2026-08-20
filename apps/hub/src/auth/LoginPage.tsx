import { useState, type FormEvent } from 'react';
import { useAuth } from './AuthContext.js';
import { Button } from '../components/ui/button.js';
import { Input } from '../components/ui/input.js';
import { Label } from '../components/ui/label.js';

export function LoginPage() {
  const { login, loginError, loggingIn } = useAuth();
  const [email, setEmail] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void login(email);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-deep-graphite">
      <form
        onSubmit={handleSubmit}
        className="flex w-80 flex-col gap-4 rounded-lg border border-off-white/10 bg-graphite p-8 shadow-lg"
      >
        <div className="flex flex-col gap-1">
          <h1 className="font-sans text-xl font-bold tracking-tight text-off-white">Monvi Hub</h1>
          <p className="text-sm text-medium-gray">Entre com seu e-mail para acessar os painéis.</p>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="voce@monvi.com.br"
          />
        </div>
        <Button type="submit" disabled={loggingIn}>
          {loggingIn ? 'Entrando...' : 'Entrar'}
        </Button>
        {loginError && (
          <p role="alert" className="text-sm text-red-400">
            {loginError}
          </p>
        )}
      </form>
    </div>
  );
}
