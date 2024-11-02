import type { Metadata } from "next";
import "./globals.css";


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
        <html lang="en">
            <body
                className={`antialiased font-poppins container mx-auto m-4`}
            >
                {children}
            </body>
        </html>
    );
}
