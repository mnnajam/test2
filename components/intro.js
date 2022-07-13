import React from "react";
import Card from "./Card";

const maplinData = [
  {
    logo: "/logos/maplinhomes.png",
    title: " About house and properties",
    url: "https://maplinhomes.com",
  },
  {
    logo: "/logos/maplinenergy.png",
    title: "Maplin Energy",
    url: "https://maplinenergy.com",
  },
  {
    logo: "/logos/maplineng.png",
    title: "Maplin Engineering",
    url: "https://maplinengineering.com/",
  },
  {
    logo: "/logos/maplinhub.png",
    title: "Maplin Hub",
    url: "http:maplinhub.com",
  },
  {
    logo: "/logos/maplinstudio.png",
    title: "Maplin Studio",
    url: "https://maplinstudio.com/",
  },
];

function Intro() {
  return (
    <div className="font-quicksand bg-[#F3F3F3] pb-16">
      <div
        className="flex flex-wrap gap-5  items-center md:items-start md:justify-center  pb-8 ml-6 pt-8
            "
       >
        {maplinData.map((item, index) => {
          return (
            <Card key={index}>
              <div className="flex relative items-center md:items-start flex-col">
                <Card.Image url={item.url}>
                  <img src={item.logo} alt="logo" />
                </Card.Image>
                <Card.Title>{item.title}</Card.Title>
              </div>
            </Card>
          );
        })}
      </div>
     </div>
  );
}

export default Intro;