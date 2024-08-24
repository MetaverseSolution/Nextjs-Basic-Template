import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

import { cn } from "@/shared/lib/utils";
import { Navbar } from "@/shared/components/layout/navbar";
import Providers from "../providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Shadcn - Landing template",
    description: "Landing template from Shadcn",
};

export default async function RootLayout({
    children,
    params: { locale }
}: Readonly<{
    children: React.ReactNode
    params: { locale: string }
}>) {
    unstable_setRequestLocale(locale);

    const translate = await getMessages();

    return (
        <NextIntlClientProvider messages={translate}>
            <html lang={locale} suppressHydrationWarning>
                <body className={cn("min-h-screen bg-background", inter.className)}>
                    <Providers>
                        <Navbar />
                        {children}
                    </Providers>
                </body>
            </html>
        </NextIntlClientProvider>
    );
}
