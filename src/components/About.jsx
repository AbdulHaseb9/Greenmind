import iconone from "../assets/img/aboutus/Vector.png";
import icontwo from "../assets/img/aboutus/Vector (1).png";
import iconthree from "../assets/img/aboutus/TelephoneOutbound.png";

export const About = () => {
  const About = [
    {
      img: iconone,
      heading: "Large Assortment",
      para: "we offer many different types of products with fewer variations in each category.",
    },
    {
      img: icontwo,
      heading: "Fast & Free Shipping",
      para: "4-days or less delivery time, free shipping and an expedited delivery option.",
    },
    {
      img: iconthree,
      heading: "24/7 Support",
      para: "answer your question to any business related inquiry 24/7 and in real time.",
    },
  ];

  return (
    <div className="text-center py-5 px-5 md:px-12 my-16">
      <h1 className="font-bold text-xl">About us</h1>
      <p className="text-sm text-[#959595]">
        Order now and appreciate the beauty of nature
      </p>
      <div className="mt-5 w-full flex flex-wrap justify-center sm:justify-between">
        {About.map((item) => {
          return (
            <div className="sm:w-1/3 flex flex-col justify-center items-center mt-5">
              <div className="w-12 bg-[#C1DCDC] p-3 rounded-full">
                <img src={item.img} alt="planticon" className="w-8" />
              </div>
              <h4 className="font-semibold text-sm my-2">{item.heading}</h4>
              <p className="text-sm text-[#959595]">{item.para}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
