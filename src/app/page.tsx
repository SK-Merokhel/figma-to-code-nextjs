import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="bg-[#252B42] w-[1440px] h-[1132px]">
        {/* Navigation Bar */}
        <nav className="w-[1322px] h-[91px] absolute left-[59px]">
          {/* Brand Section */}
          <div className="w-[187px] h-[58px] absolute top-[17px] left-[136px] flex items-center">
            <h3 className="font-bold text-[24px] text-white">BrandName</h3>
          </div>

          {/* Navigation Links */}
          <div className="w-[815px] h-[58px] absolute top-[16px] left-[364px] gap-[21px] flex items-center">
            <span className="text-white">Home</span>
            <span className="text-white">Product</span>
            <span className="text-white">Pricing</span>
            <span className="text-white">Contacts</span>
            <div />

            {/* Button Section */}
            <div className="w-[189px] h-[52px] absolute top-[3px] left-[626px] flex justify-center items-center gap-[45px]">
              <div>
                <button className="w-[41px] h-[22px] text-[14px] font-bold leading-[22px] tracking-[0.2px] text-right">
                  Login
                </button>
              </div>
              <div>
                <button className="w-[110px] h-[52px] text-[14px] bg-[#23A6F0] rounded-[5px] text-white font-bold leading-[22px] tracking-[0.2px] py-[15px] px-[25px]">
                  Join Us
                </button>
              </div>
              {/* Toggler Icon */}
              <div className="relative w-[24px] h-[13.71px]">
                <Image
                  src="/icons/toggler-icon.png"
                  alt="Navbar Toggler"
                  width={24}
                  height={14}
                />
              </div>
            </div>
          </div>
        </nav>

        {/* Main Section */}
        <div className="w-[1046px] h-[1,028px] absolute top-[104px] left-[197px] bg-[#252B42] py-[80px] flex flex-col gap-[80px] justify-center items-center">
          {/* Content Section */}
          <div className="w-[699px] h-[496px] bg-[#252B42] py-[40px] flex flex-col items-center gap-[40px]">
            <div className="w-[77px] h-[24px] font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23A6F0]">
              <h5>Welcome</h5>
            </div>
            <div className="w-[542px] h-[160px] text-[58px] font-bold leading-[80px] tracking-[0.2px] text-center">
              <p>Selling on the internet like a pro</p>
            </div>
            <div className="bg-[#252B42] w-[536px] h-[60px] text-[20px] leading-[30px] tracking-[0.2px] text-center font-normal">
              <p>
                We know how large objects will act, but things on a small scale
                just do not act that way.
              </p>
            </div>
            <div className="w-[365px] h-[52px] flex gap-[10px]">
              <div className="bg-[#23A6F0] w-[193px] h-[52px] py-[15px] px-[40px] leading-[22px] tracking-[0.2px] flex-[10px] rounded-[5px]">
                <button className="w-[113px] h-[22px] text-[14px] font-bold text-center">
                  Get Quote Now
                </button>
              </div>
              <div className="border-[2px] border-[#23A6F0] w-[162px] h-[52px] rounded-[5px] py-[15px] px-[40px] flex gap-[10px]">
                <button className="w-[82px] h-[22px] font-bold text-[14px] leading-[22px] tracking-[0.2px] text-[#23A6F0]">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="w-[1,046px] h-[292px] flex gap-[30px]">
            {/* Card 1 */}
            <div className="bg-[#FFFFFF] w-[328px] h-[292px] py-[35px] px-[40px] flex flex-col gap-[20px]">
              <div className="bg-[#FFDCD1] w-[70px] h-[76px] rounded-[10px] py-[22px] px-[19px] flex gap-[10px]"></div>
                <div className="w-[135px] h-[24px] font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                <h5>Training Courses</h5>
              </div>
              <div className="bg-[#E74040] w-[50px] h-[2px]"></div>
            <div className="w-[222px] h-[60px] font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                <p>
                  The gradual accumulation of information about atomic and
                  small-scale behaviour...
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFFFFF] w-[328px] h-[292px] py-[35px] px-[40px] flex flex-col gap-[20px]">
              <div className="bg-[#B9EAA8] w-[70px] h-[76px] rounded-[10px] py-[22px] px-[19px] flex gap-[10px]"></div>
              <div className="w-[168px] h-[24px] font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                <h5>2,769 online courses</h5>
              </div>
              <div className="bg-[#E74040] w-[50px] h-[2px]"></div>
              <div className="w-[222px] h-[60px] font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                <p>
                  The gradual accumulation of information about atomic and
                  small-scale behaviour...
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#23A6F0] w-[328px] h-[292px] py-[35px] px-[40px] flex flex-col gap-[20px]">
              <div className="bg-[#FFFFFF] w-[70px] h-[76px] rounded-[10px] py-[22px] px-[19px] flex gap-[10px]"></div>
              <div className="w-[135px] h-[24px] font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#FFFFFF]">
                <h5>Training Courses</h5>
              </div>
              <div className="bg-[#FFFFFF] w-[50px] h-[2px]"></div>
              <div className="w-[222px] h-[60px] font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#FFFFFF]">
                <p>
                  The gradual accumulation of information about atomic and
                  small-scale behaviour...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
