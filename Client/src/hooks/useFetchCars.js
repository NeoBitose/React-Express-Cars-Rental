import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchCar(filters) {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCar = async () => {
            setLoading(true);
            try {
                const response = await axios.post('http://localhost:3000/api/v1/cars', {
                    driverType: filters.driverType,
                    date: filters.date,
                    timeRent: filters.timeRent,
                    passenger: filters.passenger
                })
                setCars(response.data.data.cars);
                console.log(cars)
            } catch (error) {
                console.error("Error fetching cars:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCar();
    }, [filters]);

    return { cars, loading };
}

export default useFetchCar