import imgone from "../assets/img/bestsell/Frame 9.png";
import imgtwo from "../assets/img/bestsell/Frame 8.png";
import imgthree from "../assets/img/bestsell/Frame 7.png";

export const Bestsell = () => {
  const products = [
    {
      img: imgone,
      name: "Nautral Plants",
      price: "p 1,400.00",
    },
    {
      img: imgtwo,
      name: "Artificial Plants",
      price: "p 900.00",
    },
    {
      img: imgthree,
      name: "Artificial Plants",
      price: "p 3,500.00",
    },
  ];
  return (
    <div className="px-5 md:px-12 py-5">
      <div className="w-full grid sm:grid-cols-4 gap-5 xs:grid-cols-2">
        <div className="mt-4 text-center xs:text-left">
          <h4 className="font-bold text-lg">
            Best Selling <br />
            Plants
          </h4>
          <p className="text-sm text-[#9E9E9E] my-3">
            Easiest way to <br />
            healthy life by buying <br />
            your favourtie plants
          </p>
          <button className="bg-[#C1DCDC] px-4 py-1 rounded-md w-36">
            See more <i className="fa fa-arrow-right"></i>
          </button>
        </div>
        {products.map((items, index) => {
          return (
            <div key={index} className="mt-4">
              <img src={items.img} alt="plants image" />
              <h5>{items.name}</h5>
              <p className="text-sm text-[#9E9E9E]">{items.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
