import FormHeader from "../Components/FormHeader";
import { form2, title2 } from "../Components/Mapping/Map";
import MyForm from "../Components/MyForm";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import facebook from "../assets/facebook.svg";

const SignUp = () => {
  return (
    <div className="flex flex-col p-[50px] justify-center place-items-center w-[90%] gap-2">
      {title2.map((items) => (
        <FormHeader key={items.id} {...items} style={items.style} />
      ))}
      <form className="flex flex-col gap-1 w-[100%] justify-center place-items-center">
        {form2.map((items) => (
          <MyForm key={items.id} {...items} style={items.style} />
        ))}
        <Link
          to="#"
          className="w-[100%] flex place-items-center justify-center mt-2"
        >
          <Button
            btnText="SIGN UP"
            btnStyle="bg-[#7D3C98] w-[70%] flex place-items-center justify-center p-2 rounded-lg  text-white text-[25px] font-[500]"
          />
        </Link>
      </form>
      <div className="flex w-[70%] py-[10px] place-items-center justify-center gap-5">
        <div className="line border-[1px] border-[#00000085] h-[0.2vh] w-[25%]"></div>
        <div>
          <p className="text-[20px] text-[#00000083]">Or Sign up with</p>
        </div>
        <div className="line border-[1px] border-[#00000085] h-[0.2vh] w-[25%]"></div>
      </div>
      <div className="w-[70%] gap-[50px] flex justify-center place-items-center ">
        <a href="#" className=" w-[10%]">
          <img
            className="w-[80%]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
          />
        </a>
        <a href="#" className="w-[10%]">
          <img className="w-[80%]" src={facebook} alt="" />
        </a>
      </div>
    </div>
  );
};

export default SignUp;
