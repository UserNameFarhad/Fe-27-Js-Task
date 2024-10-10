type CarModelType = "benz" | "lada" | "zapi" | "bmw";

type CarType = {
  model: CarModelType;
  year: number;
};

type Human = {
  ad: string;
  age: number;
  car: CarType;
};

const ali: Human = {
  ad: "Ali",
  age: 26,
  car: {
    model: "zapi",
    year: 1968,
  },
};

function showInfo({ ad, car }: Human): string {
    return `${ad} has ${car.model}`
}

console.log(showInfo(ali));