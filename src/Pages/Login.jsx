import { Link } from "react-router-dom";
import Button from "../Components/Button";
import FormHeader from "../Components/FormHeader";
import { form, title } from "../Components/Mapping/Map";
import MyForm from "../Components/MyForm";
import facebook from "../assets/facebook.svg";

const Login = () => {
  return (
    <div className="flex flex-col p-[50px] justify-center place-items-center w-[90%] gap-2">
      {title.map((items) => (
        <FormHeader key={items.id} {...items} style={items.style} />
      ))}
      <form className="flex flex-col gap-2 w-[100%] justify-center place-items-center">
        {form.map((items) => (
          <MyForm key={items.id} {...items} style={items.style} />
        ))}

        <div className="flex justify-between w-[70%] mt-[20px] text-[#7D3C98] text-[20px]">
          <div className="flex gap-2">
            <input type="checkbox" className="hhh" />
            Remember Me
          </div>
          <Link to="#">Forgotten password?</Link>
        </div>

        <Link
          to="#"
          className="w-[100%] flex place-items-center justify-center mt-2"
        >
          <Button
            btnText="LOG IN"
            btnStyle="bg-[#7D3C98] w-[70%] flex place-items-center justify-center p-3 rounded-lg  text-white text-[25px] font-[500]"
          />
        </Link>
      </form>
      <div className="flex w-[70%] py-[10px] place-items-center justify-center gap-5">
        <div className="line border-[1px] border-[#00000085] h-[0.2vh] w-[25%]"></div>
        <div>
          <p className="text-[20px] text-[#00000083]">Or log in with</p>
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

export default Login;
