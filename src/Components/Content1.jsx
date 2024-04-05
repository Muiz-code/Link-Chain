import link from "../assets/link2.png";
import discord from "../assets/Discord.png";
import tiktok from "../assets/Tiktok.png";
import shopify from "../assets/Shopify.png";
import ig from "../assets/IG.png";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import git from "../assets/github.png";
import twitter from "../assets/twitter.png";
import portfolio from "../assets/Portfolio.png";
import more from "../assets/More.png";
import logo from "../assets/LinkChain logo.png";
import { Link } from "react-router-dom";

const Content1 = () => {
  return (
    <div className="w-[40%] flex justify-center p-5 relative">
      <div className="w-[85%] content1 absolute bottom-0 h-[70vh] rounded-[60px]">
        <div className="w-[100%] flex flex-col relative">
          <div className="absolute flex flex-col gap-4 right-[-25px] mt-[130px] w-[12%]">
            <img src={discord} alt="" />
            <img src={tiktok} alt="" />
            <img src={shopify} alt="" />
            <img src={ig} alt="" />
          </div>
        </div>
      </div>
      <div className=" h-[100vh] border-[7px] border-black relative w-[80%] rounded-[60px] bg-white">
        <div className="flex justify-end mt-[40px]">
          <div className="profileImg h-[25vh] w-[90%] flex place-items-center">
            <div className="w-[50%] h-[80%] icon2 rounded-full ms-4"></div>
          </div>
        </div>
        <div className="w-[100%] bg-white shadow-xl h-[13vh] absolute top-[250px] left-[100px] rounded-lg justify-center place-items-center flex flex-col">
          <div className="flex place-items-center justify-center text-[#7d3c98]">
            <img src={link} className="w-[20%]" alt="" />
            Username
          </div>
          <p>Job Title</p>
        </div>
        <div className="absolute bottom-[70px] w-[100%] p-3 flex flex-col gap-3">
          <Link
            to="#"
            className="flex justify-between place-items-center border-[1px] border-black py-2 w-[100%] px-3 rounded-lg text-decoration-none text-black hover:scale-[1.02] transform"
          >
            <img src={email} className="w-[10%]" alt="" />
            Email
            <img src={more} className="w-[6%] h-1" alt="" />
          </Link>
          <Link
            to="#"
            className="flex justify-between place-items-center border-[1px] border-black py-2 w-[100%] px-3 rounded-lg text-decoration-none text-black hover:scale-[1.02] transform"
          >
            <img src={linkedin} className="w-[10%]" alt="" />
            Linkedin
            <img src={more} className="w-[6%] h-1" alt="" />
          </Link>
          <Link
            to="#"
            className="flex justify-between place-items-center border-[1px] border-black py-2 w-[100%] px-3 rounded-lg text-decoration-none text-black hover:scale-[1.02] transform"
          >
            <img src={git} className="w-[10%]" alt="" />
            GitHub
            <img src={more} className="w-[6%] h-1" alt="" />
          </Link>
          <Link
            to="#"
            className="flex justify-between place-items-center border-[1px] border-black py-2 w-[100%] px-3 rounded-lg text-decoration-none text-black hover:scale-[1.02] transform"
          >
            <img src={twitter} className="w-[10%]" alt="" />
            Twitter
            <img src={more} className="w-[6%] h-1" alt="" />
          </Link>
          <Link
            to="#"
            className="flex justify-between place-items-center border-[1px] border-black py-2 w-[100%] px-3 rounded-lg text-decoration-none text-black hover:scale-[1.02] transform"
          >
            <img src={portfolio} className="w-[10%]" alt="" />
            Portfolio
            <img src={more} className="w-[6%] h-1" alt="" />
          </Link>
        </div>
        <div className="absolute bottom-4 flex justify-center">
          <img src={logo} className="w-[40%]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Content1;
