// eslint-disable-next-line react/prop-types
const Button = ({ btnStyle, btnText }) => {
  return (
    <a href="" className={btnStyle}>
      {btnText}
    </a>
  );
};

export default Button;
