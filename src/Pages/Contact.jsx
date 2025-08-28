import React from 'react'
import Navbar from '../Components/Navbar'

const Contact = () => {
  return (
    <div>
      <nav>
      <Navbar/>
      </nav>
      <main>
        <form action="" className=" text-center bg-blue-300 " >
          <h1 className="text-5xl text-blue-950 font-serif font-bold py-6">Contact US</h1>
           <label className="text-2xl text-black font-bold">Your Email </label>
           <input type="text" placeholder='Please enter your email' className="border-1 bg-emerald-100"/><br />
           <label className="text-2xl text-black font-bold">Your Phone Numeber</label>
          <input type="text" placeholder='Please enter your number' className="border-1 bg-emerald-100"/><br />
           <label className="text-2xl text-black font-bold">Your message</label><br />
          <textarea name="message" id="message" placeholder="Enter your message" className="border-1 bg-emerald-100 " required>
             please enter your message
          </textarea><br />
        <button className='px-7 py-2 bg-yellow-100 mt-3.5 mb-3 border-3 rounded-2xl text-gray-700 font-bold'>Send Message</button>
        </form>
      </main>
    </div>
  )
}

export default Contact