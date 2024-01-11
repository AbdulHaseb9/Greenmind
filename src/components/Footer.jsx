import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <footer className="w-full px-5 md:px-12 py-7 bg-[#C1DCDC]">
      <div className="sm:flex justify-between">
        <section className="w-full sm:w-2/5 md:w-7/12 flex justify-center flex-col items-center sm:block">
          <img src={logo} alt="greeekmindlogo" className="w-28" />
          <p className="text-sm text-[#9E9E9E] my-4">
            We help you find <br />
            your dream plant
          </p>
          <div className="flex mb-5">
            <i className="fa-brands fa-facebook-f  text-[#474E4E] border border-[#9E9E9E] px-3 py-2 rounded-full mx-1"></i>
            <i className="fa-brands fa-twitter  text-[#474E4E] border border-[#9E9E9E] p-2 rounded-full mx-1"></i>
            <i className="fa-brands fa-instagram  text-[#474E4E] border border-[#9E9E9E] p-2 rounded-full mx-1"></i>
          </div>
        </section>
        <section className="w-full sm:w-3/5 md:w-5/12 flex justify-around flex-wrap">
          <div>
            <h4 className="font-semibold">Information</h4>
            <ul>
              <li className="cursor-pointer text-sm text-[#9E9E9E] my-4">About</li>
              <li className="cursor-pointer text-sm text-[#9E9E9E] my-4">Product</li>
              <li className="cursor-pointer text-sm text-[#9E9E9E] my-4">Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul>
              <li className="cursor-pointer text-sm text-[#9E9E9E] my-4">Community</li>
              <li className="cursor-pointer text-sm text-[#9E9E9E] my-4">Career</li>
              <li className="cursor-pointer text-sm text-[#9E9E9E] my-4">Our story</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul>
              <li className="cursor-pointer text-sm text-[#9E9E9E] my-4">Getting Started</li>
              <li className="cursor-pointer text-sm text-[#9E9E9E] my-4">Pricing</li>
              <li className="cursor-pointer text-sm text-[#9E9E9E] my-4">Resources</li>
            </ul>
          </div>
        </section>
      </div>
      <div className="text-center sm:text-left py-4 text-[#9E9E9E] text-sm">
        <p>2023 all Right Reserved Term of use GREENMIND</p>
      </div>
    </footer>
  );
};
