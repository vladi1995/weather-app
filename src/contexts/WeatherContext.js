import { createContext, useContext, useState } from 'react';
import { getAllData } from '../services/WeatherService';

export const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [town, setTown] = useState('');
    const [locationData, setLocationData] = useState({
        location: null,
        current: null,
        forecast: null, 
    });

    const onChangeTown = (e) => {
        setTown(e.target.value);
    };

    const onSubmitHandler = async(e) => {
        e.preventDefault();
        const data = await getAllData(town);
        setLocationData({
            location: data.location,
            current: data.current,
            forecast: data.forecast,
        });
    };

    return <WeatherContext.Provider value={{town, ...locationData, onChangeTown, onSubmitHandler}}>
        {children}
    </WeatherContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(WeatherContext);
};