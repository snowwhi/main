function Contact() {
    return ( 
         <>

    <div className="w-full h-screen flex flex-wrap ">
        <div className="w-1/2 ">
         <h1 className="text-7xl font-medium pl-14 pr-14 pt-14">Schedule <br /> demo </h1>
         <p className=" text-xl pl-14 pr-14">Build better websites — faster — with the power of Webflow. Backed by advanced security, custom traffic scaling, guaranteed uptime, and much more. </p>
         <div className="w-full  h-1/2 flex justify-center items-center content-center " >
         <img className="object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_2KU0r03xYFzGPfTvYm5yYg_ebdp9_JK4qg&s" alt="logo" />
         </div>
         </div>
        <div className="w-1/2 p-8">
        <h1 className="text-[#ca3500] font-extrabold text-3xl text-center py-3 " > Contact us</h1>
            <div class="p-8  border shadow-2xl">
                <label for="email" class="block text-gray-700 text-sm font-bold mb-2"> First Name </label>
      <input type="text" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500" placeholder="First Name"/>
                 <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Last Name </label>
                <input type="email" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500" placeholder="Last Name"/>
                 <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input type="email" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500" placeholder="your@example.com"/>
            
            <div class="mb-6">
                <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message:</label>
                <textarea id="message" name="message" rows="5" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500" placeholder="Your message..."></textarea>
            </div>
            <div class="flex items-center justify-center w-full ">
                <button type="submit" className="bg-[#ca3500] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:ring-2  text-white hover:bg-gray-100 hover:text-black  ">
                    Send Message
                </button>
            </div>
    </div>
    </div>
</div>
    </>);
}

export default Contact;