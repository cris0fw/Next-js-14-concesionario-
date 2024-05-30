"use client";
import { SearchManuFacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import { manufacturers } from "@/constants";
import Image from "next/image";

import { useState, Fragment } from "react";

const SearchManufacturer = ({
  manuFacturer,
  setManuFacturer,
}: SearchManuFacturerProps) => {
  const [query, setQuery] = useState("");

  //Filtramos si el input esta vacio traeme todos los resultados, 
  // de lo contrario traeme un resultado que coincida con un valor
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) => {
          return item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""));
        });

  return (
    <div className="search-manufacturer">
      <Combobox value={manuFacturer} onChange={setManuFacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="logo car"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            onChange={(e) => setQuery(e.target.value)}
            displayValue={(manuFacturer: string) => manuFacturer}
            placeholder="Volkswagen"
            className="search-manufacturer__input "
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => {
                  return (
                    <Combobox.Option
                      key={item}
                      className={({ active }) =>
                        `relative search-manufacturer__option ${
                          active
                            ? "bg-primary-blue text-white"
                            : "text-gray-900"
                        }`
                      }
                      value={item}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate 
                      ${selected ? "font-medium" : "font-normal"}`}
                          >
                            {item}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3
                          ${active ? "text-white" : "text-teal-600"}`}
                            ></span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  );
                })
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
