import Sidebar from "@/components/ui/SideBar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstname: 'Adrian', lastname: 'JSM' };
  return (
      <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
          {children}
      </main>
  );
}
