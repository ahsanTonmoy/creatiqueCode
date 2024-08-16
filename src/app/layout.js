import "./globals.css";
import './style.css'
import Navigetions from  '@/components/shared/navigetion/Navigetions'

export const metadata = {
  title: "Creatiqe Code || Software Agency",
  description: "Software Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        {/* navigetion */}
        <div className=""> <Navigetions/> </div>
        {/* content */}
        <div className=" min-h-screen">{children}</div>
        {/* footer */}
        <div className=""></div>
      </body>
    </html>
  );
}
