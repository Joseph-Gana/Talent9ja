// app/layouts/Layout.tsx
import Header from './components/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html>
      <head></head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;