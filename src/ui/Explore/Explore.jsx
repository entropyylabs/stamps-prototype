import React from "react"
import Link from "next/link"
import HamMenu from "../../components/HamMenu"

const Explore = () => {
  return (
    <div>
      <main
        id="1"
        className="relative bg-white w-full h-[665px] overflow-hidden text-left text-base text-black font-work-sans"
      >
        <HamMenu />
        <div className="absolute top-[0px] left-[0px] w-[390px] h-[665px]">
          <img
            className="absolute top-[0px] left-[0px] w-[390px] h-[665px] object-cover"
            alt=""
            src="../polygon-background.png"
          />
          <div className="absolute top-[0px] left-[0px] bg-goldenrod w-[390px] h-[60px]"></div>
          <div className="absolute text-[28px] top-[8px] left-[19px] tracking-[0.2px] leading-[32px] flex items-center w-[168px] h-[49px]">
            EXPLORE..
          </div>
        </div>
        <div className="absolute top-[256px] left-[19px] w-[352px] h-[206px]">
          <div className="absolute top-[0px] left-[0px] w-[352px] h-44">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[352px] h-44 border-[2px] border-solid border-black" />
          </div>
          <div className="absolute top-[23px] left-[154px] w-[168px] h-[117px]">
            <b className="absolute top-[0px] left-[0px] text-[24px] tracking-[0.2px] leading-[24px] flex items-center w-[168px] h-7">
              POLYGON
            </b>
            <div className="absolute top-[70px]  text-[12px] left-[0px] tracking-[0.2px] leading-[24px] text-gray-200 flex items-center w-[136px] h-[26px]">
              Tokyo, Japan
            </div>
            <div className="absolute top-[26px] left-[0px] text-[12px] tracking-[0.2px] leading-[16px] flex items-center w-[168px] h-[41px]">
              Hunt for best merch at the Tokyo Blockchain Week!
            </div>
            <b className="absolute top-[93px]  text-[16px] left-[0px] text-lg tracking-[0.2px] leading-[16px] flex text-orangered items-center w-[31px] h-6">
              1/5
            </b>
          </div>
          <img
            className="absolute top-[23px] left-[22px] w-[110px] h-[121px]"
            alt=""
            src="../polygon-stamp.png"
          />
        </div>
        <a href="#2">
          <img
            className="absolute top-[581px] left-[177px] w-9 h-9"
            alt=""
            src="../down-icon.svg"
          />
        </a>
        <button className="cursor-pointer [border:none] p-0 bg-gray-100 absolute top-[414px] left-[19px] rounded-lg w-[352px] h-12">
          <div className="absolute top-[16px] text-center text-[16px] w-full tracking-[0.6px] leading-[16px] font-medium font-work-sans text-white text-left">
            <Link href="/hunts/polygon">Start the hunt</Link>
          </div>
        </button>
      </main>
      <main
        id="2"
        className="relative bg-white w-full h-[665px] overflow-hidden text-left text-base text-black font-work-sans"
      >
        <div className="absolute top-[0px] left-[0px] w-[390px] h-[665px]">
          <img
            className="absolute top-[0px] left-[0px] w-[390px] h-[665px] object-cover"
            alt=""
            src="../ipfs-background.png"
          />
        </div>
        <div className="absolute top-[256px] left-[19px] w-[352px] h-[206px]">
          <div className="absolute top-[0px] left-[0px] w-[352px] h-44">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[352px] h-44 border-[2px] border-solid border-black" />
          </div>
          <div className="absolute top-[23px] left-[154px] w-[168px] h-[117px]">
            <b className="absolute top-[0px] left-[0px] text-[24px] tracking-[0.2px] leading-[24px] flex items-center w-[168px] h-7">
              IPFS/Filecoin
            </b>
            <div className="absolute top-[70px]  text-[12px] left-[0px] tracking-[0.2px] leading-[24px] text-gray-200 flex items-center w-[110px] h-[26px]">
              Tokyo, Japan
            </div>
            <div className="absolute top-[26px] left-[0px] text-[12px] tracking-[0.2px] leading-[16px] flex items-center w-[168px] h-[41px]">
              Find the stamp! to win free storage credits!
            </div>
            <b className="absolute top-[93px]  text-[16px] left-[0px] text-lg tracking-[0.2px] leading-[16px] flex text-orangered items-center w-[31px] h-6">
              3/5
            </b>
          </div>
          <img
            className="absolute top-[23px] left-[22px] w-[110px] h-[121px]"
            alt=""
            src="../ipfs-stamp.png"
          />
        </div>
        <a href="#3">
          <img
            className="absolute top-[581px] left-[177px] w-9 h-9"
            alt=""
            src="../down-icon.svg"
          />
        </a>

        <button className="cursor-pointer [border:none] p-0 bg-gray-100 absolute top-[414px] left-[19px] rounded-lg w-[352px] h-12">
          <div className="absolute top-[16px] text-center text-[16px] w-full tracking-[0.6px] leading-[16px] font-medium font-work-sans text-white text-left">
            <Link href="/hunts/polygon">Start the hunt</Link>
          </div>
        </button>
      </main>
      <main
        id="3"
        className="relative bg-white w-full h-[665px] overflow-hidden text-left text-base text-black font-work-sans"
      >
        <div className="absolute top-[0px] left-[0px] w-[390px] h-[665px]">
          <img
            className="absolute top-[0px] left-[0px] w-[390px] h-[665px] object-cover"
            alt=""
            src="../ethglobal-background.png"
          />
        </div>
        <div className="absolute top-[256px] left-[19px] w-[352px] h-[206px]">
          <div className="absolute top-[0px] left-[0px] w-[352px] h-44">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[352px] h-44 border-[2px] border-solid border-black" />
          </div>
          <div className="absolute top-[23px] left-[154px] w-[168px] h-[117px]">
            <b className="absolute top-[0px] left-[0px] text-[24px] tracking-[0.2px] leading-[24px] flex items-center w-[168px] h-7">
              ETH Global
            </b>
            <div className="absolute top-[70px]  text-[12px] left-[0px] tracking-[0.2px] leading-[24px] text-gray-200 flex items-center w-[110px] h-[26px]">
              Tokyo, Japan
            </div>
            <div className="absolute top-[26px] left-[0px] text-[12px] tracking-[0.2px] leading-[16px] flex items-center w-[168px] h-[41px]">
              Win free seats to the next hackathon!
            </div>
            <b className="absolute top-[93px]  text-[16px] left-[0px] text-lg tracking-[0.2px] leading-[16px] flex text-orangered items-center w-[31px] h-6">
              3/5
            </b>
          </div>
          <img
            className="absolute top-[23px] left-[22px] w-[110px] h-[121px]"
            alt=""
            src="../ethglobal-stamp.png"
          />
        </div>
        <a href="#1">
          <img
            className="absolute top-[581px] left-[177px] w-9 h-9"
            alt=""
            src="../down-icon.svg"
          />
        </a>

        <button className="cursor-pointer [border:none] p-0 bg-gray-100 absolute top-[414px] left-[19px] rounded-lg w-[352px] h-12">
          <div className="absolute top-[16px] text-center text-[16px] w-full tracking-[0.6px] leading-[16px] font-medium font-work-sans text-white text-left">
            <Link href="/hunts/jordans">Start the hunt</Link>
          </div>
        </button>
      </main>
      <main
        id="2"
        className="relative bg-white w-full h-[665px] overflow-hidden text-left text-base text-black font-work-sans"
      >
        <div className="absolute top-[0px] left-[0px] w-[390px] h-[665px]">
          <img
            className="absolute top-[0px] left-[0px] w-[390px] h-[665px] object-cover"
            alt=""
            src="../flow-background.png"
          />
        </div>
        <div className="absolute top-[256px] left-[19px] w-[352px] h-[206px]">
          <div className="absolute top-[0px] left-[0px] w-[352px] h-44">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[352px] h-44 border-[2px] border-solid border-black" />
          </div>
          <div className="absolute top-[23px] left-[154px] w-[168px] h-[117px]">
            <b className="absolute top-[0px] left-[0px] text-[24px] tracking-[0.2px] leading-[24px] flex items-center w-[168px] h-7">
              FLOW
            </b>
            <div className="absolute top-[70px]  text-[12px] left-[0px] tracking-[0.2px] leading-[24px] text-gray-200 flex items-center w-[110px] h-[26px]">
              Tokyo, Japan
            </div>
            <div className="absolute top-[26px] left-[0px] text-[12px] tracking-[0.2px] leading-[16px] flex items-center w-[168px] h-[41px]">
              Get help to build on FLOW!
            </div>
            <b className="absolute top-[93px]  text-[16px] left-[0px] text-lg tracking-[0.2px] leading-[16px] flex text-orangered items-center w-[31px] h-6">
              3/5
            </b>
          </div>
          <img
            className="absolute top-[23px] left-[22px] w-[110px] h-[121px]"
            alt=""
            src="../flow-stamp.png"
          />
        </div>
        <a href="#1">
          <img
            className="absolute top-[581px] left-[177px] w-9 h-9"
            alt=""
            src="../down-icon.svg"
          />
        </a>

        <button className="cursor-pointer [border:none] p-0 bg-gray-100 absolute top-[414px] left-[19px] rounded-lg w-[352px] h-12">
          <div className="absolute top-[16px] text-center text-[16px] w-full tracking-[0.6px] leading-[16px] font-medium font-work-sans text-white text-left">
            <Link href="/hunts/jordans">Start the hunt</Link>
          </div>
        </button>
      </main>
    </div>
  )
}

export default Explore
