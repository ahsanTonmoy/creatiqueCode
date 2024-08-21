
import ChoseUs from '@/components/pages/services/choseUs/ChoseUs';
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
            <div className=''><PageBannar titile={'our services'}/></div>
            {/*  */}

            <div className='pageContainer container'>
                <ServiceInfo/>
            </div>
            <div className='pageBannar md:m-4 relative'>
               <div className='pageContainer'><ChoseUs/></div>
            </div>

        </div>
    );
};

export default page;