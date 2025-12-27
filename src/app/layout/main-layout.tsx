import { Footer } from "../shared/components/layout/Footer";
import { Navigation } from "../shared/components/layout/Navigation";
import { PageContainer } from "../shared/components/layout/PageContainer";


export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <Navigation />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </div>
  );
}
