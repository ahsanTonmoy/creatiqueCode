
import Products from '@/components/pages/product/Products';
import Preloader from '../../components/shared/preloader/Preloader';

export const metadata = {
    title: 'Artical'
}
const page = () => {
    return (
        <div className='py-20 px-10'>
            <Preloader/>
            <div className='pageContainer '>
                <div className=' uppercase font-semibold text-xl py-8'>php laravel script</div>
            </div>
            <div className='pageContainer'> <Products/> </div>
        </div>
    );
};
export default page;