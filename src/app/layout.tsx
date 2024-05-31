import type { Metadata } from 'next';
import { Inter, Lobster } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils';
import { ThemeProvider } from '@/components/molecules';
import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

// fonts
const interFont = Inter({ subsets: ['latin'], variable: '--font-inter' });
export const metadata: Metadata = {
  title: {
    template: '%s | by Chocoding.in',
    default: 'Chocoding.in',
  },
  description: 'A web by Chocoding.in',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const langs = await getMessages();

  return (
    <html lang={locale} className={cn(interFont.variable, 'font-inter')}>
      <head>
        <link rel="icon" href="/images/logo.svg" sizes="any" />
      </head>
      <body className="overflow-x-hidden">
        <NextIntlClientProvider messages={langs}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
