import React, { useState } from 'react'

import api from '../services/api';

export const getCitys = (location: string) => {
  const data = [];

  const getWeather = async () => {
    try {
      const londonData = await api.get(`weather?q=${location}&APPID=3e3afcb7e55ba8f7f9116213fd0ea726`);
      const london = {
        id: londonData.data.id,
        name: londonData.data.name,
        hour: londonData.data.dt,
        weather: londonData.data.weather[0].description,
        temperature: londonData.data.main.temp,
        temperatureMin: londonData.data.main.temp_min,
        temperatureMax: londonData.data.main.temp_max
      }

      data.push(london)
      console.log(data)

      // console.log('response', londonData.data.main)
      // console.log('name', london)
    } catch (err) {
      console.log('err', err)
    }
  }

  getWeather()


  // getWeather()
}
