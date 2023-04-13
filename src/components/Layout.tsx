import Navbar from './Navbar';

interface ChildrenProps {
  children: React.ReactNode;
}

function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Navbar />
      <>{children}</>
    </>
  );
}

export default Layout;
