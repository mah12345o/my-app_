import type { Metadata } from "next";
import "./globals.css";
import Layout from "../components/Layout";
import { Public_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "A simple app with sidebar and header",
};
const manrope = Public_Sans({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
