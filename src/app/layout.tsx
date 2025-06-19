// app/layout.tsx
import './assets/globals.css';
import './assets/style.css';
import 'animate.css';

import RootLayout from './RootLayout'; // client wrapper

export const metadata = {
  title: "Hassan's Portfolio",
  description: "Check out my projects & services,",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
