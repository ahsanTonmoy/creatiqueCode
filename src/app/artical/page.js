import Bannar from '@/components/pages/artical/bannar/Bannar';
import Blogs from '@/components/pages/artical/blogs/Blogs';
import Preloader from '../../components/shared/preloader/Preloader';
export const metadata = {
    title: 'Artical'
}
const page = () => {
    return (
        <div>
            <Preloader/>
            <div className='pageContainer'><Bannar/></div>
            <div className='pageContainer'><Blogs/></div>
        </div>
    );
};

export default page;