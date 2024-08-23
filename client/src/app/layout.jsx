import { DM_Sans } from "next/font/google"; // Font used in Horizon UI Website
// import { Inter } from "next/font/google"; 
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

const dmSans = DM_Sans({
  subsets: ['latin'],
});

export const metadata = {
  title: "Sagala Technical",
  description: "Technical test submission for Frontend Developer Position at Sagala",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
