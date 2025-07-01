import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
export const metadata = {
  title: "FinanciaLog - BETA",
  description: "Tracking your money flow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-zinc-100/50`}>
        <div className="max-w-7xl m-auto my-8">{children}</div>
      </body>
    </html>
  );
}
4;
