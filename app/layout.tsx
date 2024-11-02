import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from '@/components/theme-provider'
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Moviewiser",
    description: "A Moviewiser for recommandtion based on your mood",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>

            <html lang="en" suppressHydrationWarning>
                <body
                    className={`antialiased font-poppins container mx-auto m-4`}
                >
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
        </ClerkProvider>
    );
}
