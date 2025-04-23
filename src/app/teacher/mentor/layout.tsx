import Sidebar from "@/component/sidebar/sidebar";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen font-inter">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="overflow-auto w-full">
        <main>{children}</main>
      </div>
    </div>
  );
}
