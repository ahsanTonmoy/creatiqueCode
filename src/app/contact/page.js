import ContactForm from '@/components/pages/contact/contactform/ContactForm';
import PageBannar from '@/components/uiComponent/pageBannar/PageBannar';
export const metadata = {
    title: 'Contact'
}
const page = () => {
    return (
        <div>
            <div >
                <PageBannar titile={'contact us'}></PageBannar>
                {/*  */}
                <div className=''><ContactForm/></div>
            </div>
        </div>
    );
};

export default page;