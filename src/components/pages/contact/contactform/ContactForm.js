import Image from 'next/image';
import icon161 from '@/assects/image/icon/icon_161.svg'
import icon162 from '@/assects/image/icon/icon_162.svg'
import icon163 from '@/assects/image/icon/icon_163.svg'
const ContactForm = () => {
	return (
		<div className=' md:px-4'>
			<div className='pageBannar'>
				{/*  */}
				<div className="p-8 pageContainer">
					<div className="contact-section-two text-left p-10 mt-20 bg-white">
						<div className="grid md:grid-cols-2 gap-4">
							{/* form */}
							<div className="">
								<div className="form-style-three md:mb-[60px] sm:mb-[60px] xsm:mb-[60px]  wow fadeInLeft" >
									<form action="#" id="contact-form" data-toggle="validator" novalidate="true">
										<div className="messages"></div>
										<div className="flex flex-wrap mx-[-12px] controls">
											<div className="w-full  flex-[0_0_auto] px-[12px] max-w-full">
												<div className="input-group-meta form-group mb-[35px] ">
													<label className="block text-[14px] text-[rgba(0,0,0,0.5)] mb-[7px]">Name*</label>
													<input className=" md:w-full h-[60px] text-black text-[17px] pl-5 pr-[5px] py-0 rounded-lg border-2 border-solid border-black placeholder:text-black" type="text" placeholder="Rashed Kabir" name="name" required="required" data-error="Name is required." />
													<div className="help-block with-errors"></div>
												</div>
											</div>

											<div className="w-full  flex-[0_0_auto] px-[12px] max-w-full">
												<div className="input-group-meta form-group mb-10 ">
													<label className="block text-[14px] text-[rgba(0,0,0,0.5)] mb-[7px]">Email*</label>
													<input className=" md:w-full h-[60px] text-black text-[17px] pl-5 pr-[5px] py-0 rounded-lg border-2 border-solid border-black placeholder:text-black" type="email" placeholder="demo@domain.com" name="email" required="required" data-error="Valid email is required." />
													<div className="help-block with-errors"></div>
												</div>
											</div>
											<div className="w-full  flex-[0_0_auto] px-[12px] max-w-full">
												<div className="input-group-meta form-group mb-[30px]">
													<textarea className=" md:w-full max-w-full h-[165px] text-black text-[17px] pl-5 pr-[5px] py-[15px] rounded-lg border-2 border-solid border-black placeholder:text-black" placeholder="Your message*" name="message" required="required" data-error="Please,leave us a message."></textarea>
													<div className="help-block with-errors"></div>
												</div>
											</div>
											<div className="w-full  flex-[0_0_auto] px-[12px] max-w-full"><button className="btn-one font-medium md:w-full uppercase text-[14px] block text-white leading-[50px] relative transition-all duration-[0.3s] ease-[ease-in-out] px-8 py-0 rounded-[5px] bg-black hover:bg-[var(--prime-one)] hover:text-white md:leading-[48px] md:text-[15px] md:p-[0_25px] sm:leading-[48px] sm:text-[15px] sm:p-[0_25px] xsm:leading-[48px] xsm:text-[15px] xsm:p-[0_25px]">Send Message</button></div>
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
										<p class=" text-[18px] leading-[1.65em] text-[#878787] mb-0 lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px]">1012 Pebda Parkway, Mirpur  <br></br> 2Dhaka, Bangladesh</p>
									</div>
								</div>
								<div class="address-block-three flex mb-[70px] lg:mb-10 md:mb-10 sm:mb-10 xsm:mb-10 ">
									<div class="icon w-[35px] mt-[7px]">
										<Image class=" ml-auto" src={icon162} alt="" /></div>
									<div class="text w-[calc(100%_-_35px)] pl-[30px]">
										<h5 class="title text-[26px] mb-2 lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[20px]">Contact Info</h5>
										<p class=" text-[18px] leading-[1.65em] text-[#878787] mb-0 lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px]">Open a chat or give us call at <br></br><a href="tel:310.841.5500" class="call text-[22px] text-[color:var(--prime-two)] mt-[3px] hover:underline lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[18px]">310.841.5500</a></p>
									</div>
								</div>
								<div class="address-block-three flex">
									<div class="icon w-[35px] mt-[7px]"><Image class=" ml-auto" src={icon163} alt="" /></div>
									<div class="text w-[calc(100%_-_35px)] pl-[30px]">
										<h5 class="title text-[26px] mb-2 lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[20px]">Live Support</h5>
										<p class=" text-[18px] leading-[1.65em] text-[#878787] mb-0 lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px]">Urgent go to live chat portal <br></br> <a href="#" class="webaddress text-black underline hover:underline">www.supportlive.com</a></p>
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