import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/Shell";
export const metadata: Metadata = {
  title: "DĀRU N'MAH | Islamic School & Madrasa",
  description: "Qur'an, Arabic and Islamic Studies. Admissions and payments for DĀRU N'MAH."
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body><Header/>{children}<Footer/></body></html>;
}
