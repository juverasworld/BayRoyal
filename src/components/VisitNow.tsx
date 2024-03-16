import React from "react";
import { sites } from "../constants";
function VisitNow() {
  return (
    <section className="bg-visit-now bg-no-repeat bg-cover bg-center relative z-10 bottom-[115px] 
    pt-[90px] px-[40px] pb-[200px]">
      <div className="mb-[20px] flex flex-col items-center relative mt-9">
        <h2 className="absolute text-center text-[rgba(255,127,80,0.12)] md:text-[4.1rem] top-[-30px] bottom-[0] font-bold">Visit now</h2>
        <h2 className="text-center text-[#FF7F50] text-[1.4rem] font-bold">
          Glimpse the Feel!
        </h2>
        <div className="bg-[#FF7F50] h-[2px] md:w-[8%] w-[20%]"></div>
      </div>

      <div className="flex lg:flex-row flex-col">
        {sites.map((site, index) => {
          return (
            <div
              className={`flex flex-col items-center lg:mt-0 mt-10 ${
                !(index % 2 === 0) ? "" : ""
              }`}
              key={site.imgSrc}
            >
              <div className={`${!(index % 2 === 0) ? "order-1" : ""}`}>
                <img src={site.imgSrc} alt="Museum/Sculpture" />
              </div>
              <div className="text-center">
                <h2
                  className={`font-bold ${
                    !(index % 2 === 0) ? "" : "my-[6px]"
                  } `}
                >
                  {site.title}
                </h2>
                <span
                  className={`${!(index % 2 === 0) ? "my-[6px] block" : ""}`}
                >
                  {site.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default VisitNow;
