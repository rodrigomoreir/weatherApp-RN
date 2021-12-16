import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { WeatherCard } from '../../components/WeatherCard';

import api from '../../services/api';

import { StyledContainer, StyledFlatlist } from './styles';

interface Props {
  id: number;
  name: string;
  hour: string;
  weather: string;
  temperature: number;
  temperatureMin: number;
  temperatureMax: number;
}

export const HomeScreen = () => {
  const [citis, setCitis] = useState([]);
  var data: Props[] = []
  //   {
  //     id: londonData.data.id,
  //     name: londonData.data.name,
  //     hour: londonData.data.dt,
  //     weather: londonData.data.weather[0].description,
  //     temperature: londonData.data.main.temp,
  //     temperatureMin: londonData.data.main.temp_min,
  //     temperatureMax: londonData.data.main.temp_max
  //   },
  //   {
  //     id: 2,
  //     title: 'Brasil'
  //   }
  // ]

  const getWeather = async () => {
    try {
      const aracajuData = await api.get(`weather?q=Aracaju,br&APPID=3e3afcb7e55ba8f7f9116213fd0ea726`);
      const aracaju = {
        id: aracajuData.data.id,
        name: aracajuData.data.name,
        hour: aracajuData.data.dt,
        weather: aracajuData.data.weather[0].description,
        temperature: aracajuData.data.main.temp,
        temperatureMin: aracajuData.data.main.temp_min,
        temperatureMax: aracajuData.data.main.temp_max
      }

      const lisbonData = await api.get('weather?q=Lisbon,pt&APPID=3e3afcb7e55ba8f7f9116213fd0ea726');
      const lisbon = {
        id: lisbonData.data.id,
        name: lisbonData.data.name,
        hour: lisbonData.data.dt,
        weather: lisbonData.data.weather[0].description,
        temperature: lisbonData.data.main.temp,
        temperatureMin: lisbonData.data.main.temp_min,
        temperatureMax: lisbonData.data.main.temp_max
      }

      const madridData = await api.get('weather?q=Madrid,es&APPID=3e3afcb7e55ba8f7f9116213fd0ea726');
      const madrid = {
        id: madridData.data.id,
        name: madridData.data.name,
        hour: madridData.data.dt,
        weather: madridData.data.weather[0].description,
        temperature: madridData.data.main.temp,
        temperatureMin: madridData.data.main.temp_min,
        temperatureMax: madridData.data.main.temp_max
      }

      const parisData = await api.get('weather?q=Paris,fr&APPID=3e3afcb7e55ba8f7f9116213fd0ea726');
      const paris = {
        id: parisData.data.id,
        name: parisData.data.name,
        hour: parisData.data.dt,
        weather: parisData.data.weather[0].description,
        temperature: parisData.data.main.temp,
        temperatureMin: parisData.data.main.temp_min,
        temperatureMax: parisData.data.main.temp_max
      }

      const berlinData = await api.get('weather?q=Berlin,de&APPID=3e3afcb7e55ba8f7f9116213fd0ea726');
      const berlin = {
        id: berlinData.data.id,
        name: berlinData.data.name,
        hour: berlinData.data.dt,
        weather: berlinData.data.weather[0].description,
        temperature: berlinData.data.main.temp,
        temperatureMin: berlinData.data.main.temp_min,
        temperatureMax: berlinData.data.main.temp_max
      }

      const copenhagenData = await api.get('weather?q=Copenhagen,dk&APPID=3e3afcb7e55ba8f7f9116213fd0ea726');
      const copenhagen = {
        id: copenhagenData.data.id,
        name: copenhagenData.data.name,
        hour: copenhagenData.data.dt,
        weather: copenhagenData.data.weather[0].description,
        temperature: copenhagenData.data.main.temp,
        temperatureMin: copenhagenData.data.main.temp_min,
        temperatureMax: copenhagenData.data.main.temp_max
      }

      const romeData = await api.get('weather?q=Rome,it&APPID=3e3afcb7e55ba8f7f9116213fd0ea726');
      const rome = {
        id: romeData.data.id,
        name: romeData.data.name,
        hour: romeData.data.dt,
        weather: romeData.data.weather[0].description,
        temperature: romeData.data.main.temp,
        temperatureMin: romeData.data.main.temp_min,
        temperatureMax: romeData.data.main.temp_max
      }

      const londonData = await api.get('weather?q=London,uk&APPID=3e3afcb7e55ba8f7f9116213fd0ea726');
      const london = {
        id: londonData.data.id,
        name: londonData.data.name,
        hour: londonData.data.dt,
        weather: londonData.data.weather[0].description,
        temperature: londonData.data.main.temp,
        temperatureMin: londonData.data.main.temp_min,
        temperatureMax: londonData.data.main.temp_max
      }

      const dublinData = await api.get('weather?q=Dublin,ie&APPID=3e3afcb7e55ba8f7f9116213fd0ea726');
      const dublin = {
        id: dublinData.data.id,
        name: dublinData.data.name,
        hour: dublinData.data.dt,
        weather: dublinData.data.weather[0].description,
        temperature: dublinData.data.main.temp,
        temperatureMin: dublinData.data.main.temp_min,
        temperatureMax: dublinData.data.main.temp_max
      }

      const pragueData = await api.get('weather?q=Prague,cz&APPID=3e3afcb7e55ba8f7f9116213fd0ea726');
      const prague = {
        id: pragueData.data.id,
        name: pragueData.data.name,
        hour: pragueData.data.dt,
        weather: pragueData.data.weather[0].description,
        temperature: pragueData.data.main.temp,
        temperatureMin: pragueData.data.main.temp_min,
        temperatureMax: pragueData.data.main.temp_max
      }

      const viennaData = await api.get('weather?q=Vienna,at&APPID=3e3afcb7e55ba8f7f9116213fd0ea726');
      const vienna = {
        id: viennaData.data.id,
        name: viennaData.data.name,
        hour: viennaData.data.dt,
        weather: viennaData.data.weather[0].description,
        temperature: viennaData.data.main.temp,
        temperatureMin: viennaData.data.main.temp_min,
        temperatureMax: viennaData.data.main.temp_max
      }


      setCitis([aracaju, lisbon, madrid, paris, berlin, copenhagen, rome, london, dublin, prague, vienna]);
    } catch (err) {
      console.log('err', err)
    }
  }

  useEffect(() => {
    getWeather()
  }, [])

  return (
    <>
      <Header />
      <StyledContainer>
        <StyledFlatlist
          data={citis}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <WeatherCard
              city={item.name}
              hour={item.hour}
              weather={item.weather}
              temperature={item.temperature}
              tempMaxAndMin={`Max.: ${item.temperatureMax} | Min.: ${item.temperatureMin}`}
            />
          )}
        />
      </StyledContainer>
    </>
  )
};
