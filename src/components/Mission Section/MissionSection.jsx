import React from "react";
import Image from "../Mission Section/Mission Image.jpg";

function MissionSection() {
  return (
    <>
      <div className="m-container w-auto p-8 flex flex-col md:flex-row md:gap-8">
        <div className="m-left w-full md:w-1/2 flex justify-center items-center order-3 md:order-1">
          <img
            className="w-[70%] h-auto object-cover"
            src={Image}
            alt="Mission"
          />
        </div>

        <div className="m-right w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2">
          <div className="flex flex-col justify-center order-1">
            <h1 className="text-4xl font-semibold">
              Mission is to Provide Low Cost Effective Rental Solutions.
            </h1>
            <p className="w-full md:w-[500px] mt-10 font-light text-sm text-gray-500">
              You put your all efforts to portfolio up your business in online
              market. So it is very difficult for you to reach customer by the
              search engines due to high competition rate
            </p>
          </div>

          <div className="pt-4 w-full p-4 order-3">
            <p className="w-full md:w-[500px] mt-8 font-light text-sm text-gray-500">
              This theme is a premium WordPress SEO-friendly theme that allows
              you to showcase your products and services, optimize for search
              engines, and make money with Google Adsense.
            </p>
            <div className="flex justify-start items-center gap-4 pb-4">
              <div className="w-1 h-8 bg-[#DC2D13]"></div>
              <p className="font-medium">Competitive Prices</p>
            </div>
            <div className="flex justify-start items-center gap-4 pb-4">
              <div className="w-1 h-8 bg-[#DC2D13]"></div>
              <p className="font-medium">Breakdown Assistance</p>
            </div>
            <div className="flex justify-start items-center gap-4 pb-4">
              <div className="w-1 h-8 bg-[#DC2D13]"></div>
              <p className="font-medium">Trusted Rent Service</p>
            </div>
            <div className="flex justify-start items-center gap-4 pb-4">
              <div className="w-1 h-8 bg-[#DC2D13]"></div>
              <p className="font-medium">24/7 Free Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// function MissionSection() {
//   return (
//     <>
//       <div className=" grid grid-cols-12 gap-4 ">
//         <div className="col-span-12">
//           <div className="flex flex-col md:flex-row">
//             <div className="rounded-lg order-2 md:order-1">
//               <img
//                 className="w-full h-auto border rounded-lg md:p-10"
//                 src={Image}
//                 alt="Mission"
//               />
//             </div>
//             <div className="order-1 md:order-2">
//               <h1 className="text-4xl font-semibold">
//                 Mission is to Provide Low Cost Effective Rental Solutions
//               </h1>
//               <p className="mt-10 font-light text-sm text-gray-500">
//                 You put your all efforts to portfolio up your business in online
//                 market. So it is very difficult for you to reach customer by the
//                 search engines due to high competition rate
//               </p>
//             </div>
//           </div>

//           <div className="pt-4 w-full p-4 ">
//             <p className=" mt-8 font-light text-sm text-gray-500">
//               This theme is a premium WordPress SEO-friendly theme that allows
//               you to showcase your products and services, optimize for search
//               engines, and make money with Google Adsense.
//             </p>
//             <div className="flex justify-start items-center gap-4 pb-4">
//               <div className="w-1 h-8 bg-[#DC2D13]"></div>
//               <p className="font-medium">Competitive Prices</p>
//             </div>
//             <div className="flex justify-start items-center gap-4 pb-4">
//               <div className="w-1 h-8 bg-[#DC2D13]"></div>
//               <p className="font-medium">Breakdown Assistance</p>
//             </div>
//             <div className="flex justify-start items-center gap-4 pb-4">
//               <div className="w-1 h-8 bg-[#DC2D13]"></div>
//               <p className="font-medium">Trusted Rent Service</p>
//             </div>
//             <div className="flex justify-start items-center gap-4 pb-4">
//               <div className="w-1 h-8 bg-[#DC2D13]"></div>
//               <p className="font-medium">24/7 Free Customer Support</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default MissionSection;
