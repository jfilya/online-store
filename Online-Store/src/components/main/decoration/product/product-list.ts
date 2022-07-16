export interface IProducts {
  img: string;
  id: string;
  name: string;
  price: number;
  amount: number;
  year: number;
  manufacturer: string;
  color: [string, string];
  numberOfCameras: number;
  popular: [string, boolean];
  btn: string;
}

export const products: Array<IProducts> = [
  {
    img: "./assets/phone/Apple iPhone 13 mini.jpeg",
    name: "Apple iPhone 13 mini",
    id: "Apple-iPhone-13-mini",
    price: 54840,
    amount: 8,
    year: 2022,
    manufacturer: "apple",
    color: ["белый", "white"],
    numberOfCameras: 2,
    popular: ["да", true],
    btn: "Добавить в корзину",
  },
  {
    img: "./assets/phone/Apple iPhone SE.jpeg",
    name: "Apple iPhone SE",
    id: "Apple-iPhone-SE",
    price: 32980,
    amount: 7,
    year: 2022,
    manufacturer: "apple",
    color: ["черный", "black"],
    numberOfCameras: 1,
    popular: ["нет", false],
    btn: "Добавить в корзину",
  },
  {
    img: "./assets/phone/Apple iPhone 12.jpeg",
    name: "Apple iPhone 12",
    id: "Apple-iPhone-12",
    price: 48890,
    amount: 4,
    year: 2021,
    manufacturer: "apple",
    color: ["фиолетвый", "purple"],
    numberOfCameras: 2,
    popular: ["нет", false],
    btn: "Добавить в корзину",
  },
  {
    img: "./assets/phone/Apple iPhone 11.jpeg",
    name: "Apple iPhone 11",
    id: "Apple-iPhone-11-purple",
    price: 40340,
    amount: 10,
    year: 2019,
    manufacturer: "apple",
    color: ["фиолетовый", "purple"],
    numberOfCameras: 2,
    popular: ["нет", false],
    btn: "Добавить в корзину",
  },
  {
    img: "./assets/phone/Apple iPhone 11 white.jpeg",
    name: "Apple iPhone 11",
    id: "Apple-iPhone-11-white",
    price: 47160,
    amount: 5,
    year: 2019,
    manufacturer: "apple",
    color: ["белый", "white"],
    numberOfCameras: 2,
    popular: ["нет", false],
    btn: "Добавить в корзину",
  },
  {
    img: "./assets/phone/Apple iPhone 12 blue.jpeg",
    name: "Apple iPhone 12",
    id: "Apple-iPhone-12-blue",
    price: 55540,
    amount: 1,
    year: 2020,
    manufacturer: "apple",
    color: ["голубой", "blue"],
    numberOfCameras: 2,
    popular: ["да", true],
    btn: "Добавить в корзину",
  },
  {
    img: "./assets/phone/Apple iPhone 12 Pro Max.jpeg",
    name: "Apple iPhone 12 Pro Max",
    id: "Apple-iPhone-12-Pro-Max",
    price: 79940,
    amount: 2,
    year: 2019,
    manufacturer: "apple",
    color: ["белый", "white"],
    numberOfCameras: 3,
    popular: ["нет", false],
    btn: "Добавить в корзину",
  },
  {
    img: "./assets/phone/Samsung Galaxy A23.jpeg",
    name: "Samsung Galaxy A23",
    id: "Samsung-Galaxy-A23",
    price: 17880,
    amount: 10,
    year: 2018,
    manufacturer: "samsung",
    color: ["белый", "white"],
    numberOfCameras: 3,
    popular: ["нет", false],
    btn: "Добавить в корзину",
  },
  {
    img: "./assets/phone/Samsung Galaxy A33.jpeg",
    name: "Samsung Galaxy A33",
    id: "Samsung-Galaxy-A33",
    price: 24940,
    amount: 7,
    year: 2019,
    manufacturer: "samsung",
    color: ["черный", "black"],
    numberOfCameras: 3,
    popular: ["нет", false],
    btn: "Добавить в корзину",
  },
  {
    img: "./assets/phone/Samsung Galaxy A73.jpeg",
    name: "Samsung Galaxy A73",
    id: "Samsung-Galaxy-A73",
    price: 31460,
    amount: 4,
    year: 2017,
    manufacturer: "samsung",
    color: ["серый", "gray"],
    numberOfCameras: 3,
    popular: ["нет", false],
    btn: "Добавить в корзину",
  },
  {
    img: "./assets/phone/Samsung Galaxy A12.jpeg",
    name: "Samsung Galaxy A12",
    id: "Samsung-Galaxy-A12",
    price: 14390,
    amount: 8,
    year: 2019,
    manufacturer: "samsung",
    color: ["голубой", "blue"],
    numberOfCameras: 4,
    popular: ["нет", false],
    btn: "Добавить в корзину",
  },
  {
    img: "./assets/phone/Samsung Galaxy S20.jpeg",
    name: "Samsung Galaxy S20",
    id: "Samsung-Galaxy-S20",
    price: 52180,
    amount: 10,
    year: 2022,
    manufacturer: "samsung",
    color: ["фиолетовый", "purple"],
    numberOfCameras: 3,
    popular: ["да", true],
    btn: "Добавить в корзину",
  },
  {
    img: "./assets/phone/Samsung Galaxy A32.jpeg",
    name: "Samsung Galaxy A32",
    id: "Samsung-Galaxy-A32",
    price: 19390,
    amount: 5,
    year: 2017,
    manufacturer: "samsung",
    color: ["голубой", "blue"],
    numberOfCameras: 3,
    popular: ["да", true],
    btn: "Добавить в корзину",
  },
  {
    img: "./assets/phone/Samsung Galaxy A52.jpeg",
    name: "Samsung Galaxy A52",
    id: "Samsung-Galaxy-A52",
    price: 27480,
    amount: 6,
    year: 2021,
    manufacturer: "samsung",
    color: ["фиолетовый", "purple"],
    numberOfCameras: 3,
    popular: ["нет", false],
    btn: "Добавить в корзину",
  },
  {
    img: "./assets/phone/Xiaomi Redmi 9A.jpeg",
    name: "Xiaomi Redmi 9A",
    id: "Xiaomi-Redmi-9A",
    price: 7169,
    amount: 10,
    year: 2020,
    manufacturer: "xiaomi",
    color: ["голубой", "blue"],
    numberOfCameras: 1,
    popular: ["да", true],
    btn: "Добавить в корзину",
  },
  {
    img: "./assets/phone/Xiaomi Redmi 10.jpeg",
    name: "Xiaomi Redmi 10",
    id: "Xiaomi-Redmi-10",
    price: 16980,
    amount: 8,
    year: 2022,
    manufacturer: "xiaomi",
    color: ["серый", "gray"],
    numberOfCameras: 4,
    popular: ["да", true],
    btn: "Добавить в корзину",
  },
  {
    img: "./assets/phone/Xiaomi 12 blue.jpeg",
    name: "Xiaomi 12",
    id: "Xiaomi-12-blue",
    price: 69990,
    amount: 5,
    year: 2021,
    manufacturer: "xiaomi",
    color: ["голубой", "blue"],
    numberOfCameras: 1,
    popular: ["нет", false],
    btn: "Добавить в корзину",
  },
  {
    img: "./assets/phone/Xiaomi 12 purple.jpeg",
    name: "Xiaomi 12",
    id: "Xiaomi-12-purple",
    price: 69990,
    amount: 3,
    year: 2021,
    manufacturer: "xiaomi",
    color: ["фиолетовый", "purple"],
    numberOfCameras: 1,
    popular: ["нет", false],
    btn: "Добавить в корзину",
  },
  {
    img: "./assets/phone/Xiaomi Redmi Note 11 Pro.jpeg",
    name: "Xiaomi Redmi Note 11 Pro",
    id: "Xiaomi-Redmi-Note-11-Pro",
    price: 27495,
    amount: 9,
    year: 2022,
    manufacturer: "xiaomi",
    color: ["черный", "black"],
    numberOfCameras: 1,
    popular: ["да", true],
    btn: "Добавить в корзину",
  },
  {
    img: "./assets/phone/Xiaomi Redmi Note 11 Pro white.jpeg",
    name: "Xiaomi Redmi Note 11 Pro",
    id: "Xiaomi-Redmi-Note-11-Pro-white",
    price: 27495,
    amount: 2,
    year: 2022,
    manufacturer: "xiaomi",
    color: ["белый", "white"],
    numberOfCameras: 1,
    popular: ["да", true],
    btn: "Добавить в корзину",
  },
  {
    img: "./assets/phone/Xiaomi 12 Lite.jpeg",
    name: "Xiaomi 12 Lite",
    id: "Xiaomi-12-Lite",
    price: 36900,
    amount: 4,
    year: 2018,
    manufacturer: "xiaomi",
    color: ["черный", "black"],
    numberOfCameras: 3,
    popular: ["нет", false],
    btn: "Добавить в корзину",
  },
];
