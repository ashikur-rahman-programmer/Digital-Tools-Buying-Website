import bannerImg from "../assets/banner.png";
import play from "../assets/play.png";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="px-2 my-15">
        <div className="w-full flex flex-col-reverse gap-6 items-center lg:flex-row lg:justify-between">
          {/* content */}
          <div className="max-w-160">
            {/* status */}
            <div className="inline-flex items-center gap-2 py-1.5 px-4 mb-4 bg-[#E1E7FF] rounded-full">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] animate-ping"></div>

              <p className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-medium">
                New: AI-Powered Tools Available
              </p>
            </div>
            {/* content start */}
            <h1 className="text-7xl font-extrabold leading-21">
              Supercharge Your Digital Workflow
            </h1>
            <p className="py-6">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button>Explore Products</Button>
              <button className="flex gap-2 items-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border border-[#9514FA] btn rounded-full font-bold">
                <img src={play} /> Watch Demo
              </button>
            </div>
          </div>
          <figure>
            <img src={bannerImg} className="max-w-sm rounded-lg shadow-xl" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Banner;
