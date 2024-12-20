import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const headersList = await headers();
    const pathname = headersList.get("x-invoke-path") || "";
    const isPacketPage = pathname.startsWith("/packet");

    return (
        <html lang="en" className={inter.className}>
            <body className="min-h-screen flex flex-col">
                <Header />
                <main className={`mt-16 flex-1 ${isPacketPage ? "w-full" : "container mx-auto"}`}>{children}</main>
            </body>
        </html>
    );
}
