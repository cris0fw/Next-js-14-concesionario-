import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManuFacturerProps {
  manuFacturer: string;
  setManuFacturer: (manuFacturer: string) => void;
}

export type CarClass = string;

export interface carProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface carCarProps {
  car: carCarProps;
}

export interface carDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: carProps;
}

export interface filterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  option: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
