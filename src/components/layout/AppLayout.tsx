import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="relative flex-1 overflow-y-auto min-w-0 bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--cyber-darker))]">
          <div className="pointer-events-none absolute inset-0 bg-gradient-cyber opacity-70" aria-hidden="true" />
          <div className="relative z-10">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
