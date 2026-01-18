export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen w-full mx-auto overflow-x-hidden">
      {children}
    </div>
  );
};
