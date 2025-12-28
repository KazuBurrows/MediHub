import { Footer } from "../shared/components/layout/Footer";
import { Navigation } from "../shared/components/layout/Navigation";
import { PageContainer } from "../shared/components/layout/PageContainer";


export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <Navigation />
      <div style={{
        background: "var(--patiki-pattern), var(--color-primary)",
        opacity: "0.9",
        backgroundRepeat: "repeat, no-repeat",
        backgroundSize: "200px 200px, cover",
        height: "225px"
      }}
    ></div>
      <PageContainer>{children}</PageContainer>
      <Footer />
    </div>
  );
}
