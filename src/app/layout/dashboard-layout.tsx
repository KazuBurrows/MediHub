import { MainLayout } from "./main-layout";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      {children}
    </MainLayout>
  );
}