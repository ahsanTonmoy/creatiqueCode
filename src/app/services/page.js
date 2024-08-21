
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

            <div className='container'>
                <ServiceInfo/>
            </div>

        </div>
    );
};

export default page;