import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';
import WeatherCard from '../../components/WeatherCard';
import SearchBar from '../../components/SearchBar';

import api from '../../services/api';

import {
  StyledContainer,
  StyledFlatlist,
  StyledSearchContainer
} from './styles';

export interface CityProps {
  id: number;
  name: string;
  hour: string;
  minutes: string;
  weather: string;
  temperature: number;
  temperatureMin: number;
  temperatureMax: number;
  feelsLike: number;
  atmPressure: number;
  humidity: number;
  country: string;
  visibility: number;
  speedWind: number;
  cloudPercentage: number;
}

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const [cities, setCities] = useState<CityProps>([]);
  const [searchCity, setSearchCity] = useState();
  const [searchedCity, setSearchedCity] = useState();
  const units = 'metric'

  const navigateToDetails = (cityData: CityProps) => {
    navigate('DetailsScreen', { cityData })
  }

  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    console.log(searchValue)

  }, [searchValue])

  const getWeather = useCallback(() => {

    const cityName = [
      'Aracaju,br',
      'Lisbon,pt',
      'Madrid,es',
      'Paris,fr',
      'Berlin,de',
      'Copenhagen,dk',
      'Rome,it',
      'London,uk',
      'Dublin,ie',
      'Prague,cz',
      'Vienna,at'
    ]

    const correctionHour = [0, 3, 4, 4, 4, 4, 4, 3, 3, 4, 4]

    cityName.forEach(async function (cityAndCountry) {
      try {
        const locationData = await api.get(`weather?q=${cityAndCountry}&units=${units}&APPID=3e3afcb7e55ba8f7f9116213fd0ea726`);

        const date = new Date();
        const hour = date.getHours()
        const minutes = date.getMinutes()

        const localClimate = {
          id: locationData.data.id,
          name: locationData.data.name,
          hour: hour > 10 ? hour : `0${hour}`,
          minutes: minutes > 10 ? minutes : `0${minutes}`,
          weather: locationData.data.weather[0].description,
          temperature: locationData.data.main.temp,
          temperatureMin: locationData.data.main.temp_min,
          temperatureMax: locationData.data.main.temp_max,
          feelsLike: locationData.data.main.feels_like,
          atmPressure: locationData.data.main.pressure,
          humidity: locationData.data.main.humidity,
          country: locationData.data.sys.country,
          visibility: locationData.data.visibility,
          speedWind: locationData.data.wind.speed,
          cloudPercentage: locationData.data.clouds.all
        }

        setCities(oldArray => [...oldArray, localClimate])

      } catch (error) {
        console.log('err', err)
      }
    })
  }, [])

  useEffect(() => {
    getWeather()
  }, []);

  const searching = async () => {
    if (searchCity) {
      await setSearchedCity(
        cities.filter(city => city.name.toLowerCase().includes(searchCity.toLowerCase()))
      )
    }
  }

  useEffect(() => {
    searching()
  }, [searchCity]);

  return (
    <>
      <Header title={'Weather'} />
      <StyledContainer>
        <StyledSearchContainer>
          <SearchBar
            placeholder='Search a city'
            value={searchCity}
            onChangeText={filter => setSearchCity(filter)}
          />
        </StyledSearchContainer>
        <StyledFlatlist
          data={searchCity ? searchedCity : cities}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <WeatherCard
              city={`${item.name} - ${item.country} `}
              hour={`${item.hour}:${item.minutes}`}
              weather={item.weather}
              temperature={`${item.temperature}°C`}
              tempMaxAndMin={`Max.: ${item.temperatureMax}° Min.: ${item.temperatureMin}°`}
              onPress={() => navigateToDetails(item)}
            />
          )}
        />
      </StyledContainer>
    </>
  )
};

export default HomeScreen;
