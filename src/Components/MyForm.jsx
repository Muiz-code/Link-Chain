/* eslint-disable react/prop-types */
const MyForm = ({ label, type, placeholder, inpStyle, name, style }) => {
  return (
    <div className="flex form flex-col gap-1 justify-center w-[70%]">
      <div className="flex form flex-col gap-1 w-[100%]">
        <label className={style}>{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={inpStyle}
        />
      </div>
    </div>
  );
};

export default MyForm;
