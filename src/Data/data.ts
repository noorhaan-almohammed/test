import type { CompoanyInfoType, destinationsType } from "../Types/type";

// each data must end with Data

export const destinationsData: destinationsType[] = [
  {
    id: "1",
    image: "/images/slide-card.webp",
    title: "Lucca Bike Tour",
    price: "34",
    schedule: "EVERY DAY",
    capacity: "3-10",
    description:
      "A tour of the city and its surroundings led by a professional guide led by a professional guide led by a professional guide led by a professional guide.",
  },
  {
    id: "2",
    image: "/images/slide-card2.webp",
    title: "Wine tasting In Tuscany",
    price: "34",
    schedule: "MONDAY",
    capacity: "10-30",
    description:
      "The real magic is here where you can enjoy the best Tuscan wine and eat the best Tuscan wine and eat the best Tuscan wine and eat the best Tuscan wine and eat.",
  },
];

export const compoanyInfoData: CompoanyInfoType = {
  title: " WELCOME TO OUR SITE!",
  prief: "We are the best company for your visit",
  image: "/images/about_picture.webp",
  details:
    "After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!",
  stats: [
    { id: "1", lable: "Years Experience", count: 20 },
    { id: "2", lable: "Happy Customer", count: 100 },
    { id: "3", lable: "Choice of Services", count: 15 },
    { id: "4", lable: "Professional Guides", count: 10 },
  ],
};
