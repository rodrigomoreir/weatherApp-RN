import React, { useEffect } from 'react';
import { Header } from '../../components/Header';
import { WeatherCard } from '../../components/WeatherCard';

import api from '../../services/api';
import axios from 'axios';

import { getCitys } from '../../hook/getCitys';

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

  // const getWeather = async () => {
  //   try {
  //     const londonData = await api.get('weather?q=London,uk&APPID=3e3afcb7e55ba8f7f9116213fd0ea726');
  //     const london = {
  //       id: londonData.data.id,
  //       name: londonData.data.name,
  //       hour: londonData.data.dt,
  //       weather: londonData.data.weather[0].description,
  //       temperature: londonData.data.main.temp,
  //       temperatureMin: londonData.data.main.temp_min,
  //       temperatureMax: londonData.data.main.temp_max
  //     }

  //     data = [london]

  //     console.log('response', londonData.data.main)
  //     console.log('name', london)
  //   } catch (err) {
  //     console.log('err', err)
  //   }
  // }

  useEffect(() => {
    getCitys('London,uk')
  }, [])

  return (
    <>
      <Header />
      <StyledContainer>
        <StyledFlatlist
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <WeatherCard
              city={item.name}
              hour={'hour'}
              weather={'weather'}
              temperature={'temp'}
              tempMaxAndMin={'temp'}
            />
          )}
        />
      </StyledContainer>
    </>
  )
};
