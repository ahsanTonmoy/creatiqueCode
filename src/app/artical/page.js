import Bannar from '@/components/pages/artical/bannar/Bannar';
import Blogs from '@/components/pages/artical/blogs/Blogs';

export const metadata = {
    title: 'Artical'
}
const page = () => {
    return (
        <div>
            <div className='pageContainer'><Bannar/></div>
            <div className='pageContainer'><Blogs/></div>
        </div>
    );
};

export default page;