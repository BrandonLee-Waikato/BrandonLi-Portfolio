// src/app/layout.tsx
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Brandon Li · Portfolio",
    description: "Brandon Li’s full stack developer portfolio",
    // You can also add: icons: { icon: "/favicon.ico" } if you prefer file in /public
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
