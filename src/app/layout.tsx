// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "회사명",
    description: "설명입니다",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
        <body className={`${inter.className} font-sans flex flex-col min-h-screen`}>
        <Header />

        {/* 메인 콘텐츠 영역 */}
        {/* pt-20은 Header 높이만큼, pb-20은 FixedBottomCtaBar 높이만큼 여백 */}
        <main className="flex-grow pt-20 pb-20 relative z-0">
            {children}
        </main>

        {/* Footer는 page.tsx에서 렌더링되므로 layout에서는 제거합니다. */}
        </body>
        </html>
    );
}