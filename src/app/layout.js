import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Creatiqe Code || Software Agency",
  description: "Software Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* navigetion */}
        <div className=""></div>
        {/* content */}
        <div className=" min-h-screen">{children}</div>
        {/* footer */}
        <div className=""></div>
      </body>
    </html>
  );
}
