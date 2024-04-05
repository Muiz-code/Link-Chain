import step1 from "../assets/Step 1.png";
import step2 from "../assets/Step 2.png";
import step3 from "../assets/Step 3.png";
import step4 from "../assets/Step 4.png";

const Content2 = () => {
  return (
    <div className="py-5">
      <div className="flex justify-start w-[100%]">
        <h1 className="w-[70%] text-center text-[#7d3c98] text-[48px] font-bold">
          Jumpstart your online presence now!
        </h1>
      </div>
      <div className="w-[100%] flex  mt-5 ps-[170px]">
        <div className="w-[10%]">
          <img src={step1} className="w-[40%]" alt="" />
          <img src={step2} className="w-[40%]" alt="" />
          <img src={step3} className="w-[40%]" alt="" />
          <img src={step4} className="w-[40%]" alt="" />
        </div>
        <div className="flex flex-col w-[100%]">
          <div className="flex w-[70%] h-[16vh] justify-between relative">
            <p>Add your image</p>
            <div className="w-[34%] h-[20vh] border rounded-full absolute top-[-45px] right-0 flex justify-center place-items-center p-[25px]">
              <input
                type="file"
                accept="image/*"
                id="imageInput"
                className="w-[100%]"
              />
            </div>
          </div>
          <div className="flex w-[90%] h-[18.5vh] relative">
            <div className="flex  place-items-center justify-between  w-[100%] h-[30%]">
              Add your name
              <div className="h-[6vh] w-[70%] flex place-items-center border-[1px] border-black rounded-lg ps-2">
                <input
                  type="text"
                  placeholder="Name goes here...."
                  className="outline-none w-[100%]"
                />
              </div>
            </div>
          </div>
          <div className="flex w-[90%] h-[30.5vh] relative">
            <div className="flex justify-between  w-[100%] h-[100%]">
              Add URL link
              <div className="w-[70%]  flex flex-col gap-4">
                <div className="h-[8vh] w-[100%] gap-1 flex place-items-center border-[1px] border-black rounded-lg ps-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#0000004D"
                    className="w-6 h-4 border-[1px] border-[#0000004D] rounded-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <input
                    type="text"
                    id="linkInput"
                    placeholder="Add link"
                    className="outline-none w-[100%]"
                  />
                  <div className="h-[100%] border-l-[1px] border-[#0000004D] w-[40%] flex justify-center place-items-center">
                    <button className="bg-[#7d3c98] h-[60%] w-[70%] rounded-lg text-[#fff]">
                      Add
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-between h-[100%]">
                  <div className="flex flex-col gap-4 border-[1px] border-[#000000e3] py-3 ps-2">
                    <input
                      type="text"
                      id="linkInput"
                      placeholder="Title"
                      className="outline-none w-[100%]"
                    />
                    <input
                      type="text"
                      id="linkInput"
                      placeholder="(Provided link)"
                      className="outline-none w-[100%]"
                    />
                  </div>
                  <button className="bg-[#7d3c98] h-[25%] w-[100%] rounded-lg text-[#fff]">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
