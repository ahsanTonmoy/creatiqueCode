import Navigetions from "@/components/shared/navigetion/Navigetions";
import "./globals.css";
import './style.css'
import Footer from "@/components/shared/footer/Footer";

export const metadata = {
  title: "Creatiqe Code || Software Agency",
  description: "Software Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='max-w-screen-2xl mx-auto '>
        {/* navigetion */}
        <div className=""><Navigetions/></div>
        {/* content */}
        <div className="">{children}</div>
        {/* footer */}
        <div className=""><Footer/></div>
      </body>
    </html>
  );
}
