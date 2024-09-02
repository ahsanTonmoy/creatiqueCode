import ContactForm from '@/components/pages/contact/contactform/ContactForm';
import PageBannar from '@/components/uiComponent/pageBannar/PageBannar';
import Preloader from '../../components/shared/preloader/Preloader';
export const metadata = {
    title: 'Contact'
}
const page = () => {
    return (
        <div>
            <Preloader/>
            <div >
                <PageBannar titile={'contact us'}></PageBannar>
                {/*  */}
                <div className=''><ContactForm/></div>
            </div>
        </div>
    );
};

export default page;