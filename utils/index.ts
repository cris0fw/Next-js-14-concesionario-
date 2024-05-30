import { carProps, filterProps } from "@/types";
import axios from "axios";

// Me traigo los autos que son corollas
const fetchCars = async (filters: filterProps) => {
  try {
    const { manufacturer, year, model, limit, fuel } = filters;

    const headers = {
      "X-RapidAPI-Key": "c1bea48e62msh5b98a6d3eef6f8ap1af902jsn77a2921a4ad7",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    const response = await axios.get(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
      {
        headers: headers,
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// calculo el precio de los autos por su año y ciudad
export const calculateRentCar = (cityMpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileAgeFactor = 0.1;

  const ageFactor = 0.05;

  const mileageRate = cityMpg * mileAgeFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

// api de imagenes de autos
const generateCarImageUrl = (car: carProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPath = `${window.location.pathname}?${searchParams.toString()}`;

  return newPath;
};

export { fetchCars, generateCarImageUrl, updateSearchParams };
