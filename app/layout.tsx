import type { Metadata } from "next";
import "@fontsource/bodoni-moda/400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "周琦翔｜AIGC 作品集",
  description:
    "周琦翔的 AIGC 内容创作、商业影像、视频作品与项目管理作品集。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
