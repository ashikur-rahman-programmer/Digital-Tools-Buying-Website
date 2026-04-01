import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#101727] text-white">
      <div className="container mx-auto pt-16 md:pt-30 pb-4 md:pb-8 px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-14 md:pb-20">
          {/* header */}
          <div className="text-center md:text-start">
            <a className="flex justify-center md:justify-start">
              <img
                src="https://i.ibb.co.com/n81ktk8P/Digi-Tools.png"
                alt="website logo"
                className="h-7 md:h-10 "
              />
            </a>
            <p className="text-sm md:text-[16px] text-gray-500 mt-4">
              Premium digital tools for creators, <br /> professionals, and
              businesses. Work smarter <br /> with our suite of powerful tools.
            </p>
          </div>
          {/* items */}
          <div className="flex justify-center md:justify-between gap-6 flex-wrap ">
            <div className="flex flex-col  gap-2 ">
              <h6 className="footer-title">Product</h6>

              <a className="link text-gray-500 link-hover">Features</a>
              <a className="link text-gray-500 link-hover">Pricing</a>
              <a className="link text-gray-500 link-hover">Templates</a>
              <a className="link text-gray-500 link-hover">Integrations</a>
            </div>
            <div className="flex flex-col  gap-2 ">
              <h6 className="footer-title">Company</h6>

              <a className="link text-gray-500 link-hover">About</a>
              <a className="link text-gray-500 link-hover">Blog</a>
              <a className="link text-gray-500 link-hover">Careers</a>
              <a className="link text-gray-500 link-hover">Press</a>
            </div>
            <div className="flex flex-col  gap-2 ">
              <h6 className="footer-title">Resources</h6>

              <a className="link text-gray-500 link-hover">Documentation</a>
              <a className="link text-gray-500 link-hover">Help Center</a>
              <a className="link text-gray-500 link-hover">Community</a>
              <a className="link text-gray-500 link-hover">Contact</a>
            </div>
          </div>

          {/* links */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <h6 className="footer-title ">Social</h6>
            <div className="flex gap-4  ">
              <a>
                <img
                  className="w-8 h-8"
                  src="https://i.ibb.co.com/KzBr933R/Instagram.png"
                />
              </a>
              <a>
                <img
                  className="w-8 h-8"
                  src="https://i.ibb.co.com/NdBhSCW6/Facebook.png"
                />
              </a>
              <a>
                <img
                  className="w-8 h-8"
                  src="https://i.ibb.co.com/JwYR4cjn/Twitter.png"
                />
              </a>
            </div>
          </div>
        </div>
        {/* copyrights */}
        <aside className="flex justify-center md:justify-between items-center gap-4 flex-wrap  pt-8 border-t-2 border-gray-700">
          <p className="text-sm md:text-[16px] text-gray-500">
            &copy; 2026 Digitools. All rights reserved.
          </p>

          <div className="flex justify-between items-center gap-4 flex-wrap text-sm md:text-[16px] text-gray-500">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
