import type { Metadata } from 'next';
import { Inter, Lobster } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/molecules';

// fonts
const interFont = Inter({ subsets: ['latin'], variable: '--font-inter' });
export const metadata: Metadata = {
  title: {
    template: '%s | by Chocoding.in',
    default: 'Chocoding.in',
  },
  description: 'A web by Chocoding.in',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(interFont.variable, 'font-inter')}>
      <head>
        <link rel="icon" href="/images/logo.svg" sizes="any" />
      </head>
      <body className="overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
