import FillBtn from '@/components/uiComponent/buttons/FillBtn'
import Link from 'next/link'
import image from '../assects/image/ils_06.svg'
import Image from 'next/image'
export default function NotFound() {
    return (
        <div>
            <div className=' py-20'>
                <div className='inner-content'>
                    <div className='grid gap-6 place-content-center text-center'>
                        {/*  */}
                        <div className='text-3xl'>
                            Opps! you’r on the wrong place.
                        </div>
                        {/*  */}
                        <div className='text-xl'>
                            Can not find what you need? Take a moment and do a search below or start from <br></br> our Homepage.
                        </div>

                        {/* btn */}
                        <div><FillBtn radius={'rounded-full'} btnTitle={'back to home'}></FillBtn></div>

                        <div> <Image src={image} alt=''></Image></div>

                    </div>
                </div>
            </div>
        </div>
    )
}