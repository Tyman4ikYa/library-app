import Header from './Header';
import Footer from './Footer';
import type { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, padding: '2rem' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;