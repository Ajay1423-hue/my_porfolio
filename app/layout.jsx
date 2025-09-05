import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import Chatbot from "@/components/Chatbot";
import site from "@/data/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata = { title: site.meta.title, description: site.meta.description };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Nav />
          <PageWrapper>{children}</PageWrapper>
          <Footer />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
