import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { QueryProvider } from "@/query/QueryClientProvider";
import "./globals.css";
import { LangContext } from "@/context/Context";
import Layout from "@/features";
import { Toaster } from "sonner";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/Logo.svg" />
        <title>Ashyo Market</title>
      </head>
      <body>
        <NextIntlClientProvider locale={locale}>
          <QueryProvider>
            <LangContext>{/* Передаём children сюда */}
              <Toaster position="top-center" />
              <Layout>{children}</Layout>
            </LangContext>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}