import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <div className="h-screen bg-gray-50">{children}</div>;
};

export default Layout;
