const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row justify-center items-center text-white w-full">
        <div className="bg-[#1F2937] p-5 w-full md:w-1/2 flex items-center justify-center md:justify-end lg:pr-28 md:pr-14 md:h-[400px]">
          <div className="flex flex-col items-center justify-center gap-6">
            <p className="text-3xl">Contact Us</p>
            <div className="flex flex-col items-center justify-center ">
              <p>123 ABS Street, Uni 21, Bangladesh</p>
              <p>+88 123456789</p>
              <p>Mon - Fri: 08:00 - 22:00</p>
              <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
        <div className="bg-[#111827] p-5 w-full md:w-1/2 flex items-center justify-center md:justify-start lg:pl-28 md:pl-14  md:h-[400px]">
          <div className="flex flex-col items-center justify-center gap-6">
            <p className="text-3xl">Follow Us</p>
            <div className="flex flex-col items-center justify-center ">
              <p>Join us on social media</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#151515] text-white py-4 flex justify-center items-center text-sm md:text-[16px]">
        <p>Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
