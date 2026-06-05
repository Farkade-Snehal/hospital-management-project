import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { AuthProvider } from '@/context/AuthContext';
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Healthcare Platform",
  description: "Comprehensive Role-based Healthcare Portal",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <style>{`
          .goog-te-banner-frame { display: none !important; }
          body { top: 0 !important; }
          #google_translate_element { display: none !important; }
          .goog-tooltip { display: none !important; }
          .goog-tooltip:hover { display: none !important; }
          .goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
          body > .skiptranslate { display: none !important; }
        `}</style>
      </head>
      <body className="min-h-full flex flex-col">
        <Script id="google-translate-config" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,hi,mr,pa,te,ta,bn,gu,kn,ml,ur',
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
              }, 'google_translate_element');
            }
          `}
        </Script>
        <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
        <div id="google_translate_element" className="hidden"></div>

        <NextIntlClientProvider messages={messages}>
          <AuthProvider>
            {children}
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
