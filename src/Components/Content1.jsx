import link from "../assets/link2.png";
import discord from "../assets/Discord.png";
import tiktok from "../assets/Tiktok.png";
import shopify from "../assets/Shopify.png";
import ig from "../assets/IG.png";

const Content1 = () => {
  return (
    <div className="w-[50%] flex justify-center p-5 relative">
      <div className="w-[60%] content1 absolute bottom-0 h-[65vh] rounded-[60px]">
        <div className="w-[100%] flex flex-col relative">
          <div className="absolute flex flex-col gap-4 right-[-25px] mt-[80px] w-[12%]">
            <img src={discord} alt="" />
            <img src={tiktok} alt="" />
            <img src={shopify} alt="" />
            <img src={ig} alt="" />
          </div>
        </div>
      </div>
      <div className=" h-[80vh] border-[7px] border-black relative w-[55%] rounded-[60px] bg-white">
        <div className="flex justify-end mt-[40px]">
          <div className="profileImg h-[20vh] w-[80%] flex place-items-center">
            <div className="w-[50%] h-[80%] icon2 rounded-full ms-4"></div>
          </div>
        </div>
        <div className="w-[100%] bg-white shadow-xl h-[10vh] absolute top-[220px] left-[100px] rounded-lg justify-center place-items-center flex flex-col">
          <div className="flex place-items-center justify-center text-[#7d3c98]">
            <img src={link} className="w-[20%]" alt="" />
            Username
          </div>
          <p>Job Title</p>
        </div>
      </div>
    </div>
  );
};

export default Content1;
