import React, { createContext, useState } from 'react';
import useFetchCar from '../hooks/useFetchCars';

const CarContext = createContext();
const CarProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        driverType: "default",
        date: "",
        timeRent: "",
        passenger: 0
    });

    const { cars, loading } = useFetchCar(filters);
    // console.log(cars)

    return (
        <CarContext.Provider value={{ filters, setFilters, cars, loading }}>
            {children}
        </CarContext.Provider>
    );
};

export { CarContext, CarProvider };