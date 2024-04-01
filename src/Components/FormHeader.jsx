// eslint-disable-next-line react/prop-types
const FormHeader = ({ moreStyle, logo, text }) => {
  return (
    <div
      className={`flex flex-col w-[100%] justify-center place-items-center gap-[10px] ${moreStyle}`}
    >
      <img src={logo} alt="Link-Chain Logo" className="w-[30%]" />
      <p className="text-[25px] text-center w-[70%] font-extralight">{text}</p>
    </div>
  );
};

export default FormHeader;
