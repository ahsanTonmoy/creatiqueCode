import Navigetions from "@/components/shared/navigetion/Navigetions";
import "./globals.css";
import './style.css'
import Footer from "@/components/shared/footer/Footer";
import Head from "next/head";
import GoToTop from "@/components/uiComponent/scrollTop/GoToTop";
import Preloader from './../components/shared/preloader/Preloader';

export const metadata = {
  title: {
    default: "Creatiqe Code || Software Agency",
    template: '%s | Creatiqe Code || Software Agency'
  },
  description: "Software Agency",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
    
    </Head>
      <body className=' '>
        <Preloader/>
        {/* navigetion */}
        <div className=""><Navigetions /></div>
        {/* content */}
        <div className="">{children}</div>
        {/* footer */}
        <div className="pageContainer"><Footer /></div>
        <div>
          <GoToTop />
        </div>
      </body>
    </html>
  );
}




