import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7fe8037c-1199-4956-ad95-58daea2a171f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }};
  return (
<div
  id="contact"
  className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-cover"
  style={{ backgroundImage: "url('/footer-bg-color.png')" }}
>
  <h4 className="text-center mb-2 text-lg font-Ovo">Connect With Me</h4>
  <h2 className="text-center text-5xl font-Ovo">Get In Touch</h2>
  <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
    I’m eager to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out.
  </p>
  <form onSubmit={onSubmit} className='max-w-2xl mx-auto' >
    <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
      <input type="text" placeholder='Enter Your Name' required 
      className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md  bg-white' name='name' />
      <input type="email" placeholder='Enter Your Email' required 
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md  bg-white' name='email'/>


    </div>
    <textarea rows="6" placeholder='Enter Your Message' required  
      className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md  bg-white mb-6'name='message '/>

    <button type="Submit" 
    className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>
      Submit Now <Image src={assets.right_arrow_white} alt='' 
      className='w-4' /></button>

      <p className='mt-'>{result}</p>
  </form>
</div>

    
  )
}

export default Contact