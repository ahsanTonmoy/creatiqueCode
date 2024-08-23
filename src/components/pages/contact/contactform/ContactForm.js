'use client'
import Image from 'next/image';
import icon161 from '@/assects/image/icon/icon_161.svg'
import icon162 from '@/assects/image/icon/icon_162.svg'
import icon163 from '@/assects/image/icon/icon_163.svg'
const ContactForm = () => {
	const hendleform = e => {
		e.preventDefault()

		const msg = {
			name: e.target.name.value,
			email: e.target.email.value,
			msg: e.target.msg.value,
		}

		console.log(msg);
	}
	return (
		<div className=' md:px-4'>
			<div className='pageBannar'>
				{/*  */}
				<div className="md:p-20 p-4 pageContainer">
					<div className="contact-section-two text-left p-12 bg-white shadow-2xl">
						<div className="grid md:grid-cols-2 gap-4">
							{/* form */}
							<div className="">
								<div className="form-style-three md:mb-[60px] sm:mb-[60px] xsm:mb-[60px] wow fadeInLeft" >
									<form onSubmit={hendleform}>
										<div className='grid gap-4 capitalize'>
											{/* name */}
											<div className='form-control'>
												<label className="block text-[14px] text-[rgba(0,0,0,0.5)] mb-[7px]">Name*</label>
												<input type='text' name='name' placeholder='your name *' className='bg-white p-4 w-full capitalize rounded-lg border-4' required />
											</div>
											{/* email */}
											<div className='form-control'>
												<label className="block text-[14px] text-[rgba(0,0,0,0.5)] mb-[7px]">email*</label>
												<input type='email' name='email' placeholder='email *' className='bg-white p-4 w-full capitalize rounded-lg border-4' required />
											</div>
											{/* message */}
											<div className='form-control'>
												<label className="block text-[14px] text-[rgba(0,0,0,0.5)] mb-[7px]">messages*</label>
												<textarea type='text' name='msg' placeholder='your messeges' className='bg-white p-4 w-full capitalize rounded-lg border-4' required></textarea>
											</div>
											{/* name */}
											<div className='form-control'>
												<input type='submit' value={'SEND MESSAGE'} className='fillBtn !bg-black w-full text-white p-4 rounded-lg cursor-pointer font-bold'></input>
											</div>
										</div>
									</form>
								</div>
							</div>
							{/* address */}
							<div className="w-full py-6 md:px-12 " >
								<div className="address-block-three flex mb-[70px] lg:mb-10 md:mb-10 sm:mb-10 xsm:mb-10 mt-5">
									<div className="icon w-[35px] mt-[7px]"><Image className=" ml-auto" src={icon161} alt="" /></div>
									<div className="text w-[calc(100%_-_35px)] pl-[30px]">
										<h5 className="title text-[26px] mb-2 lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[20px]">Our Address</h5>
										<p className=" text-[18px] leading-[1.65em] text-[#878787] mb-0 lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px]">1012 Pebda Parkway, Mirpur  <br></br> 2Dhaka, Bangladesh</p>
									</div>
								</div>
								<div className="address-block-three flex mb-[70px] lg:mb-10 md:mb-10 sm:mb-10 xsm:mb-10 ">
									<div className="icon w-[35px] mt-[7px]">
										<Image className=" ml-auto" src={icon162} alt="" /></div>
									<div className="text w-[calc(100%_-_35px)] pl-[30px]">
										<h5 className="title text-[26px] mb-2 lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[20px]">Contact Info</h5>
										<p className=" text-[18px] leading-[1.65em] text-[#878787] mb-0 lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px]">Open a chat or give us call at <br></br><a href="tel:310.841.5500" className="call text-[22px] text-[color:var(--prime-two)] mt-[3px] hover:underline lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[18px]">310.841.5500</a></p>
									</div>
								</div>
								<div className="address-block-three flex">
									<div className="icon w-[35px] mt-[7px]"><Image className=" ml-auto" src={icon163} alt="" /></div>
									<div className="text w-[calc(100%_-_35px)] pl-[30px]">
										<h5 className="title text-[26px] mb-2 lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[20px]">Live Support</h5>
										<p className=" text-[18px] leading-[1.65em] text-[#878787] mb-0 lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px]">Urgent go to live chat portal <br></br> <a href="#" className="webaddress text-black underline hover:underline">www.supportlive.com</a></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;