
import ChoseUs from '@/components/pages/services/choseUs/ChoseUs';
import Feedback from '@/components/pages/services/feeedBack/Feedback';
import NewsLetter from '@/components/pages/services/newsletter/NewsLetter';
import Purchese from '@/components/pages/services/purchese/Purchese';
import ServiceInfo from '@/components/pages/services/serviceInfo/ServiceInfo';
import PageBannar from '@/components/uiComponent/pageBannar/PageBannar';
// 
export const metadata = {
    title: 'Services'
}
const page = () => {
    return (
        <div>
            {/*  */}
            <div className=''><PageBannar titile={'our services'} /></div>
            {/*  */}

            <div className='pageContainer container'>
                <ServiceInfo />
            </div>
            <div className='pageBannar relative'>
                <div className='pageContainer'><ChoseUs /></div>

            </div>
            <div className='pageContainer p-4'><Feedback /></div>
            <div className='pageContainer p-4'><Purchese /></div>
            <div className='pageContainer p-4'><NewsLetter /></div>
        </div>
    );
};

export default page;