import React from 'react'
import "./Business.scss"



import img1 from "../../Assets/bimg1.jpg";
import img2 from "../../Assets/bimg2.jpg";
import img3 from "../../Assets/bimg3.jpg";
import img4 from "../../Assets/bimg4.jpg";
import img5 from "../../Assets/bimg5.jpg";
import img6 from "../../Assets/bimg6.jpg";
import img7 from "../../Assets/bimg7.jpg";
import img8 from "../../Assets/bimg8.jpg";


import img9 from "../../Assets/bimg9.jpg";
import img10 from "../../Assets/bimg10.jpg";
import img11 from "../../Assets/bimg11.jpg";
import img12 from "../../Assets/bimg12.jpg";
import img13 from "../../Assets/bimg13.jpg";
import img14 from "../../Assets/bimg14.jpg";
import img15 from "../../Assets/bimg15.jpg";
import img16 from "../../Assets/bimg16.jpg";



import img17 from "../../Assets/bimg17.jpg";
import img18 from "../../Assets/bimg18.jpg";
import img19 from "../../Assets/bimg19.jpg";
import img20 from "../../Assets/bimg20.jpg";
import img21 from "../../Assets/bimg21.jpg";
import img22 from "../../Assets/bimg22.jpg";
import img23 from "../../Assets/bimg23.jpg";
import img24 from "../../Assets/bimg24.jpg";


import img25 from "../../Assets/bimg25.jpg";
import img26 from "../../Assets/bimg26.jpg";
import img27 from "../../Assets/bimg27.jpg";
import img28 from "../../Assets/bimg28.jpg";
import img29 from "../../Assets/bimg29.jpg";
import img30 from "../../Assets/bimg30.jpg";
import img31 from "../../Assets/bimg31.jpg";
import img32 from "../../Assets/bimg32.jpg";


import img33 from "../../Assets/bimg33.jpg";
import img34 from "../../Assets/bimg34.jpg";
import img35 from "../../Assets/bimg35.jpg";
import img36 from "../../Assets/bimg36.jpg";
import img37 from "../../Assets/bimg37.jpg";
import img38 from "../../Assets/bimg38.jpg";
import img39 from "../../Assets/bimg39.jpg";
import img40 from "../../Assets/bimg40.jpg";

const arr = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
  { img: img7 },
  { img: img8 },
];

const arr3 = [
  { img: img9 },
  { img: img10 },
  { img: img11},
  { img: img12},
  { img: img13},
  { img: img14},
  { img: img15},
  { img: img16},
];

const arr2 = [
  { img: img17 },
  { img: img18 },
  { img: img19},
  { img: img20},
  { img: img21},
  { img: img22},
  { img: img23},
  { img: img24},
];

const arr4 = [
  { img: img25 },
  { img: img26 },
  { img: img27},
  { img: img28},
  { img: img29},
  { img: img30},
  { img: img31},
  { img: img32},
];

const arr5 = [
  { img: img33 },
  { img: img34 },
  { img: img35},
  { img: img36},
  { img: img37},
  { img: img38},
  { img: img39},
  { img: img40},
];

const Business = () => {
  return (
    <div className="business__container">
      <div className="heading">Our Businesses</div>

      <div className="business1">
        <div className="heading__first">1 - Aluminum Recycling </div>
        <div className="busi__para">
          <strong> Aluminium recycling </strong> is the process by which scrap
          aluminium can be reused in products after its initial production. The
          process involves simply re-melting the metal, which is far less
          expensive and energy-intensive than creating new aluminium through the
          electrolysis of aluminium oxide (Al2O3), which must first be mined
          from bauxite ore and then refined into aluminium oxide using the Bayer
          process and then refined again into aluminium metal using the
          Hall–Héroult process. Recycling scrap aluminium requires only 5% of
          the energy used to make new aluminium from the raw ore.[1] For this
          reason, approximately 36% of all aluminium produced in the United
          States comes from old recycled scrap.[2] Used beverage containers are
          the largest component of processed aluminum scrap, and most of it is
          manufactured back into aluminium cans.[3]
        </div>
        <div className="imgs">
          {arr.map((data) => {
            return <img src={data.img} alt="" className="img1" />;
          })}
        </div>
      </div>
      <div className="business1">
        <div className="heading__first">2 - Lube Oil Recycling </div>
        <div className="busi__para">
          <strong> Lube oil recycling</strong> involves the recycling of used
          oils and the creation of new products from the recycled oils, and
          includes the recycling of motor oil and hydraulic oil. Oil recycling
          also benefits the environment:[1] increased opportunities for
          consumers to recycle oil lessens the likelihood of used oil being
          dumped on lands and in waterways. For example, one gallon of motor oil
          dumped into waterways has the potential to pollute one million gallons
          of water.[2][3]
        </div>
        <div className="imgs">
          {arr2.map((data) => {
            return <img src={data.img} alt="" className="img1" />;
          })}
        </div>
      </div>

      <div className="business1">
        <div className="heading__first">3 - Steel fabrication </div>
        <div className="busi__para">
          <strong>Steel fabrication </strong> is the creation of metal
          structures by cutting, bending and assembling processes. It is a
          value-added[1] process involving the creation of machines, parts, and
          structures from various raw materials. Typically, a fabrication shop
          bids on a job, usually based on engineering drawings, and if awarded
          the contract, builds the product. Large fab shops employ a multitude
          of value-added processes, including welding, cutting, forming and
          machining. As with other manufacturing processes, both human labor and
          automation are commonly used. A fabricated product may be called a
          fabrication, and shops specializing in this type of work are called
          fab shops. The end products of other common types of metalworking,
          such as machining, metal stamping, forging, and casting, may be
          similar in shape and function, but those processes are not classified
          as fabrication.
        </div>
        <div className="imgs">
          {arr3.map((data) => {
            return <img src={data.img} alt="" className="img1" />;
          })}
        </div>
      </div>

      <div className="business1">
        <div className="heading__first">4 - Car Auction </div>
        <div className="busi__para">
          <strong>Car Auction</strong> are the most popular method to sell used
          vehicles in Japan.[2] Most customers are Japanese seeking a cheap
          vehicle to start with or replace their older vehicle. There are many
          also trying to sell their vehicles. Individuals though cannot directly
          use auto auctions, but must go through those holding auction
          membership.[3] In Japanese law, only dealerships may become members to
          auto auctions. The way the system is set up allows people to have
          access to information, but keep the auctions orderly with only
          professionals actually able to bid. A small percentage of the dealers
          that are members of Japanese auto auctions are also used vehicle
          exporters that most often use the auto auctions as their primary
          source of used vehicles.
        </div>
        <div className="imgs">
          {arr4.map((data) => {
            return <img src={data.img} alt="" className="img1" />;
          })}
        </div>
      </div>

      <div className="business1">
        <div className="heading__first">5 - Auto workshop </div>
        <div className="busi__para">
          <strong>Auto Workshop</strong> or motor-factors that also maintain service
          operations. This is not common in the United Kingdom but more common
          in the US. Automobile repair workshops that are independently owned
          and operated businesses. These may also include regional or national
          chains and franchises including OEM (Original Equipment Manufacturer)
          repair sites such as in car dealerships. In the United States, these
          sites are commonly certified by their respective manufacturer to
          perform warranty and recall repairs by that manufacturer or
          distributor such as oil changes and other preventative maintenance
          items. Independent automobile repair shops in the US may also achieve
          certification through manufacturer sponsored programs.[1]
        </div>
        <div className="imgs">
          {arr5.map((data) => {
            return <img src={data.img} alt="" className="img1" />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Business