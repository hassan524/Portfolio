// app/layout.tsx
import './assets/globals.css';
import './assets/style.css';
import 'animate.css';

import RootLayout from './RootLayout'; // client wrapper

export const metadata = {
  title: "Hassan's Portfolio",
  description: "My personal portfolio built with Next.js and TypeScript.",
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
