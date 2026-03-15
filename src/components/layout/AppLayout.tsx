import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />

        <div className="flex-1 min-w-0 flex flex-col">
          <main className="flex-1 overflow-y-auto min-w-0 bg-cyber-grid">
            {children}
          </main>

          <footer className="sticky bottom-0 z-40 border-t border-border/60 bg-background/85 backdrop-blur-sm">
            <div className="px-4 py-2 text-center text-xs text-muted-foreground">
              © All rights reserved to Carlos Viana • Fork do projeto original{' '}
              <a
                href="https://github.com/CarHen17/ipv6-helper"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ipv6-helper
              </a>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}
