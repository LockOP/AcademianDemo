import { useState } from "react";
import "./App.css";
import portrait from "./images/image 4.png";

import img1 from "./images/Frame 23.png";
import img2 from "./images/Frame 24.png";
import img3 from "./images/Frame 25.png";
import img4 from "./images/Frame 26.png";

import {
  MdArrowRight,
  MdArrowRightAlt,
  MdOutlineArrowOutward,
  MdOutlineArrowRight,
  MdOutlineArrowRightAlt,
} from "react-icons/md";

function App() {
  const [hover1, setHover1] = useState(false);

  const [ind, setInd] = useState(0);

  const [ind2, setInd2] = useState(0);

  const [color, setColor] = useState("bg-[#141414]");
  const [hover2, setHover2] = useState(false);

  const [hover3, setHover3] = useState(false);

  const [active, setActive] = useState(false);
  const [lateActive, setLateActive] = useState(false);

  const steps = ["q1", "q2", "q3", "q4", "a5", "q6", "q7"];
  const [activeSteps, setActiveSteps] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });
  const resetActiveSteps = () => {
    setActiveSteps({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
    });
  };

  return (
    <>
      <div className="font-sans h-screen w-screen bg-[black] flex justify-center items-center overflow-x-hidden">
        <div
          className={`w-max h-max relative flex justify-center`}
          onMouseEnter={() => {
            setHover1(true);
          }}
          onMouseLeave={() => {
            setHover1(false);
          }}
        >
          <div
            className={`absolute w-[180px] ${
              hover1 ? "scale-125 -translate-y-12" : ""
            } h-max relative flex justify-center transition-all ease-linear duration-100`}
          >
            {" "}
            <img
              alt=""
              src={portrait}
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div
            className={` h-max p-1 absolute flex justify-center ${
              hover1 ? "-bottom-[50%] w-[170%]" : "bottom-0 w-full"
            }`}
          >
            <div
              className={`w-full h-max rounded-md bg-[#13131365] shadow-xl backdrop-filter backdrop-blur-md border border-[#c1c1c56b] flex justify-center p-4 text-[white] flex-col  ${
                hover1 ? "items-start" : "items-center"
              }`}
            >
              <p
                className={`font-light tracking-wider ${
                  hover1 ? "text-[28px]" : "text-[20px]"
                }`}
              >
                Mathew Carl
              </p>
              <p
                className={`font-thin text-[10px] tracking-[0.8px] ${
                  hover1 ? "text-[13px]" : "text-[10px]"
                }`}
              >
                Designation
              </p>
              <p
                className={`font-thin tracking-widest border-t pt-3 mt-3 border-[white] ${
                  hover1 ? "text-[12px]" : "hidden"
                }`}
              >
                Imagine the last long drive you went for, There was no aim, just
                drivong and pitstops when you feel like it. A stop for food
                because you felt like eating to admire the sunset. Remember,
                there is no aim here - it is driving for pure joy.
              </p>
              <div className="flex flex-row justify-start items-center cursor-pointer mt-2">
                <p
                  className={`font-normal text-[14px] tracking-widest mt-3 ${
                    hover1 ? "" : "hidden"
                  }`}
                >
                  View LinkedIn
                </p>
                <MdOutlineArrowOutward
                  className={`font-normal text-[14px] tracking-widest mt-3 ml-2 ${
                    hover1 ? "" : "hidden"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="font-sans h-screen w-screen bg-[black] flex justify-center items-center overflow-x-clip relative">
        <svg
          className={`transition-all duration-700 ease-in-out absolute scale-50 ${
            ind === 0
              ? "translate-x-[-90%] scale-75 rotate-[145deg] translate-y-[10%]"
              : ind === 1
              ? "translate-x-[-60%] scale-75 rotate-[220deg] translate-y-[-30%]"
              : ind === 2
              ? "translate-x-[-70%] scale-75 rotate-[310deg] translate-y-[20%]"
              : ind === 3
              ? "translate-x-[-60%] scale-50 rotate-[320deg] translate-y-[20%]"
              : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="881"
          height="423"
          viewBox="0 0 881 423"
          fill="none"
        >
          <path
            d="M838.5 2H42.9239C-0.643219 2 -12.8163 61.777 27.2813 78.8145L822.857 416.857C849.238 428.066 878.5 408.706 878.5 380.043V42C878.5 19.9086 860.591 2 838.5 2Z"
            stroke="white"
            stroke-width="1"
          />
        </svg>
        <svg
          className={`transition-all duration-700 ease-in-out absolute scale-50 ${
            ind === 0
              ? "translate-x-[90%] scale-75 rotate-[-120deg] translate-y-[-10%]"
              : ind === 1
              ? "translate-x-[60%] scale-75 rotate-[-250deg] translate-y-[30%]"
              : ind === 2
              ? "translate-x-[70%] scale-50 rotate-[-240deg] translate-y-[-20%]"
              : ind === 3
              ? "translate-x-[60%] scale-75 rotate-[-320deg] translate-y-[20%]"
              : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="881"
          height="423"
          viewBox="0 0 881 423"
          fill="none"
        >
          <path
            d="M838.5 2H42.9239C-0.643219 2 -12.8163 61.777 27.2813 78.8145L822.857 416.857C849.238 428.066 878.5 408.706 878.5 380.043V42C878.5 19.9086 860.591 2 838.5 2Z"
            stroke="white"
            stroke-width="1"
          />
        </svg>
        <div
          className={`w-[40vw] h-[50vh] flex justify-center items-center absolute z-40`}
          onClick={() => {
            setInd((ind + 1) % 4);
          }}
        >
          <div
            className={`w-[50%] h-max rounded-md bg-[#58585833] shadow-xl backdrop-filter backdrop-blur-md flex justify-center p-4 text-[white] flex-col z-40 absolute -bottom-[5vh] items-center`}
          >
            <p
              className={`font-thin text-[20px] tracking-[0.8px] transition-all duration-700 ease-in-out`}
            >
              {ind === 0
                ? "Transcending"
                : ind === 1
                ? "Diversifying"
                : ind === 2
                ? "Making Tech"
                : ind === 3
                ? "Revolutionising"
                : ""}
            </p>
            <p className={`font-medium text-[23px] tracking-[0.8px]`}>
              {ind === 0
                ? "Artificial Intelligence"
                : ind === 1
                ? "Equity and Inclusivity"
                : ind === 2
                ? "Accessible to All"
                : ind === 3
                ? "Cloud Computing"
                : ""}
            </p>
          </div>{" "}
        </div>

        <div
          className={`w-[40vw] h-[50vh] relative flex justify-center bg-[white] overflow-hidden items-center`}
          onClick={() => {
            setInd((ind + 1) % 4);
          }}
        >
          <div className="w-full h-[20%] absolute top-0 bg-gradient-to-b from-[black] to-[#00000000] z-30" />
          <div className="w-full h-[20%] absolute bottom-0 bg-gradient-to-b from-[#00000000] to-[black] z-30" />
          <img
            className={`h-full w-full object-cover absolute transition-all ease-in-out duration-700 top-0 ${
              ind !== 0
                ? ind === 1
                  ? "-translate-y-[100%] opacity-0 z-20"
                  : "-translate-y-[0%] opacity-0 z-0"
                : "-translate-y-[0%] opacity-100 z-10"
            }`}
            alt=""
            src={img1}
          />
          <img
            className={`h-full w-full object-cover absolute transition-all ease-in-out duration-700 top-0 ${
              ind !== 1
                ? ind === 2
                  ? "-translate-y-[100%] opacity-0 z-20"
                  : "-translate-y-[0%] opacity-0 z-0"
                : "-translate-y-[0%] opacity-100 z-10"
            }`}
            alt=""
            src={img2}
          />
          <img
            className={`h-full w-full object-cover absolute transition-all ease-in-out duration-700 top-0 ${
              ind !== 2
                ? ind === 3
                  ? "-translate-y-[100%] opacity-0 z-20"
                  : "-translate-y-[0%] opacity-0 z-0"
                : "-translate-y-[0%] opacity-100 z-10"
            }`}
            alt=""
            src={img3}
          />
          <img
            className={`h-full w-full object-cover absolute transition-all ease-in-out duration-700 top-0 ${
              ind !== 3
                ? ind === 4
                  ? "-translate-y-[100%] opacity-0 z-20"
                  : "-translate-y-[0%] opacity-0 z-0"
                : "-translate-y-[0%] opacity-100 z-10"
            }`}
            alt=""
            src={img4}
          />
        </div>
      </div>
      <div className="font-sans h-screen w-screen bg-[black] flex justify-center items-center overflow-x-clip relative">
        <div
          className={`select-none w-[30vw] h-[40vh] flex justify-center items-center absolute z-40`}
          onClick={() => {
            setInd2((ind2 + 1) % 3);
          }}
        >
          <div
            className={`w-max h-max rounded-xl bg-[#58585863] shadow-xl backdrop-filter backdrop-blur-md flex justify-center py-3 px-6 text-[white] flex-col z-40 absolute -bottom-[40px] items-center`}
          >
            <div className="w-full h-max flex flex-row pb-2 mb-3 border-b border-[#c1c1c56b] items-center">
              <p className={`font-light text-[38px] w-[90px]`}>
                {ind2 === 0
                  ? "1M+"
                  : ind2 === 1
                  ? "5M+"
                  : ind2 === 2
                  ? "10M+"
                  : ""}
              </p>
              <p
                className={`font-thin text-[18px] tracking-[0.8px] break-words ml-4 w-[105px] leading-[22px]`}
              >
                {ind2 === 0
                  ? "Content Packages"
                  : ind2 === 1
                  ? "Daily Learners"
                  : ind2 === 2
                  ? "Assessments & Reports"
                  : ""}
              </p>
            </div>
          </div>{" "}
        </div>

        <div
          className={`w-[200px] h-[280px] rounded-xl relative flex justify-center items-center`}
          onClick={() => {
            setInd2((ind + 1) % 3);
          }}
        >
          <img
            className={`h-full rounded-xl w-full object-cover absolute transition-all ease-in-out duration-700 top-0 ${
              ind2 !== 0
                ? ind2 === 1
                  ? "-translate-x-[50%] scale-75 opacity-75 z-10"
                  : "-translate-x-[-50%] scale-75 opacity-75 z-0"
                : "-translate-x-[0%] opacity-100 z-20"
            }`}
            alt=""
            src={img1}
          />
          <img
            className={`h-full rounded-xl w-full object-cover absolute transition-all ease-in-out duration-700 top-0 ${
              ind2 !== 1
                ? ind2 === 2
                  ? "-translate-x-[50%] scale-75 opacity-75 z-10"
                  : "-translate-x-[-50%] scale-75 opacity-75 z-0"
                : "-translate-x-[0%] opacity-100 z-20"
            }`}
            alt=""
            src={img2}
          />
          <img
            className={`h-full rounded-xl w-full object-cover absolute transition-all ease-in-out duration-700 top-0 ${
              ind2 !== 2
                ? ind2 === 0
                  ? "-translate-x-[50%] scale-75 opacity-75 z-10"
                  : "-translate-x-[-50%] scale-75 opacity-75 z-0"
                : "-translate-x-[0%] opacity-100 z-20"
            }`}
            alt=""
            src={img3}
          />
        </div>
      </div>
      <div className="font-sans h-screen w-screen bg-[black] flex justify-center items-center overflow-x-clip relative">
        <div
          className={`w-[250px] h-[280px] rounded-xl relative flex flex-col justify-between items-start text-[white] p-4 transition-all duration-200 ease-in-out  ${
            hover2 ? color : ""
          }`}
          onMouseEnter={() => {
            setTimeout(() => {
              setColor("bg-[#00914A]");
            }, 300);
            setHover2(true);
          }}
          onMouseLeave={() => {
            setColor("bg-[#141414]");
            setHover2(false);
          }}
        >
          <div className="w-full h-max flex flex-col items-center">
            {" "}
            <div className="flex flex-row justify-between items-center w-full h-max border-b border-[#ffffff7a] mb-4 pb-4">
              <div className="flex flex-row justify-start items-center">
                <p className="font-light text-[10px] leading-[10px] tracking-[0.6px]">
                  INDIA
                </p>
                <p className="ml-1 pl-1 border-l border-[#ffffff7a] font-light text-[10px] leading-[10px] tracking-[0.6px]">
                  PUNE
                </p>
              </div>
              <MdOutlineArrowOutward size={14} />
            </div>
            <p className="w-full font-thin tracking-[0.8px] text-[14px]">
              S&C Global Network - Strategy - MC - Industry X - Production &
              OPerations - USA Bilingual - 11
            </p>
            <p className="w-full text-[11px] font-thin tracking-[1px] mt-3">
              Marketing Consulting
            </p>
          </div>
          <div
            className={`w-max h-max rounded-full flex flex-row justify-start items-center gap-4 py-3 transition-all duration-200 ease-in-out ${
              hover2
                ? "px-4 border border-[#ffffff7a]"
                : "border border-[#ffffff00]"
            }`}
          >
            <p className="text-[10px] font-thin tracking-[0.8px]">APPLY NOW</p>
            <MdOutlineArrowRightAlt size={16} />
          </div>
        </div>
      </div>
      <div className="font-sans h-screen w-screen bg-[black] flex justify-center items-center overflow-x-clip relative">
        <div
          className={`w-[380px] h-[440px] rounded-xl relative flex flex-col justify-between items-start text-[white] transition-all duration-200 ease-in-out overflow-clip hover:bg-[#${color}]`}
          onMouseEnter={() => {
            setHover3(true);
          }}
          onMouseLeave={() => {
            setHover3(false);
          }}
        >
          <img
            className={`transition-all duration-200 ease-in-out object-cover ${
              hover3 ? "w-full" : "w-full scale-[200%] translate-y-[50%]"
            }`}
            alt=""
            src={img4}
          />
          <div
            className={`absolute transition-all duration-200 ease-in-out z-10 w-full h-max bg-[#0870FC] bottom-0 flex flex-col justify-center items-start p-12 overflow-hidden ${
              hover3 ? "opacity-100" : "opacity-0"
            }`}
          >
            <svg
              className={`absolute bottom-0 translate-x-[-400px] scale-75 translate-y-[240px] transition-all duration-500 ease-in-out opacity-20 ${
                hover3 ? "rotate-[110deg]" : "rotate-180"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="774"
              height="449"
              viewBox="0 0 774 449"
              fill="none"
            >
              <path
                d="M772 5H73.571C-0.477524 5 -21.1868 106.588 46.9529 135.574L772 444M772 61H272.894C212.997 61 196.251 143.176 251.371 166.614L772 388M772 119H374.106C352.327 119 346.236 148.879 366.277 157.404L772 330"
                stroke="white"
                stroke-width="10"
              />
            </svg>
            <p className="font-thin text-[22px] tracking-[1px]">
              Neque porro quisquam est
            </p>
            <p className="mt-2 font-thin text-[12px] tracking-[1px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <div className="font-sans h-screen w-screen bg-[black] flex justify-center items-center overflow-x-clip relative">
        <p
          className={`z-10 absolute text-[white] text-[60px] select-none transition-all duration-500 ease-in-out h-[200px] flex items-center ${
            active ? "-translate-y-[200px] scale-50" : ""
          }`}
          onClick={() => {
            if (active) {
              resetActiveSteps();
            }
            setActive(!active);
            setTimeout(() => {
              setLateActive(!lateActive);
            }, 701);
          }}
        >
          Engagement Model
        </p>
        <div className="flex flex-row text-[#ffffff] gap-8">
          {steps.map((item, index) => {
            return (
              <div
                onMouseEnter={() => {
                  if (lateActive) {
                    resetActiveSteps();
                    setActiveSteps({ ...activeSteps, [index]: true });
                  }
                }}
                onMouseLeave={() => {
                  resetActiveSteps();
                }}
                className={`select-none relative w-16 h-16 rounded-full border border-[white] flex items-center justify-center transition-all duration-500 ease-in-out  translate-y-[0px] ${
                  active ? "" : "scale-150 translate-y-[8px] opacity-20"
                } ${
                  active
                    ? ""
                    : index === 0
                    ? "translate-x-[240px]"
                    : index === 1
                    ? "translate-x-[144px]"
                    : index === 2
                    ? "translate-x-[96px]"
                    : index === 3
                    ? "translate-x-[0px]"
                    : index === 4
                    ? "translate-x-[-96px]"
                    : index === 5
                    ? "translate-x-[-144px]"
                    : index === 6
                    ? "translate-x-[-240px]"
                    : ""
                } ${
                  activeSteps[index] && active
                    ? "duration-200 text-[24px] font-semibold bg-[#0870FC] border-[#0870FC]"
                    : "text-[16px] "
                }`}
              >
                <p
                  className={`transition-all ease-in-out duration-100 ${
                    activeSteps[index] && active
                      ? "text-[24px] font-semibold"
                      : "text-[16px] "
                  }`}
                >
                  {active && index + 1}
                </p>

                <div
                  className={`absolute bottom-[92px] bg-[#0870FC] rounded p-4 w-[300px] h-max transition-all duration-200 ease-in-out flex z-10 flex-col items-start ${
                    activeSteps[index] && active ? "" : "opacity-0"
                  }`}
                  onMouseEnter={() => {
                    resetActiveSteps();
                  }}
                  onMouseLeave={() => {
                    resetActiveSteps();
                  }}
                >
                  <p className="text-[16px] tracking-[0.6px] font-light">
                    Step {index + 1}
                  </p>
                  <p className="text-[12px] font-light tracking-[0.6px] mt-1">
                    {/* {steps[index]} */}
                    There are many variations of passages of Lorem Ipsum
                    available.
                  </p>
                </div>
                <div
                  className={`absolute bottom-[62px] bg-[white] rounded w-[1px] h-[32px] transition-all duration-200 ease-in-out flex flex-col items-start ${
                    activeSteps[index] && active ? "" : "opacity-0"
                  }`}
                  onMouseEnter={() => {
                    resetActiveSteps();
                  }}
                  onMouseLeave={() => {
                    resetActiveSteps();
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
