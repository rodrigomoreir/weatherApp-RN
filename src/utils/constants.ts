import mist from '../assets/animations/mist.json';
// import moonCleanSky from '../assets/animations/moonCleanSky.json';
// import overcastMoon from '../assets/animations/overcastMoon.json';
import overcastSun from '../assets/animations/overcastSun.json';
import rainDay from '../assets/animations/rainDay.json';
import rainNight from '../assets/animations/rainNight.json';
import scatteredClouds from '../assets/animations/scatteredClouds.json';
import sunCleanSky from '../assets/animations/sunCleanSky.json';

export const ANIMATION = [
  {
    weather: 'mist',
    icon: mist
  },
  // {
  //   weather: 'clean sky',
  //   icon: moonCleanSky
  // },
  // {
  //   weather: 'overcast clouds',
  //   icon: overcastMoon
  // },
  {
    weather: 'overcast clouds',
    icon: overcastSun
  },
  {
    weather: 'rainDay',
    icon: rainDay
  },
  {
    weather: 'few clouds',
    icon: scatteredClouds
  },
  {
    weather: 'scattered clouds',
    icon: scatteredClouds
  },
  {
    weather: 'broken clouds',
    icon: scatteredClouds
  },
  {
    weather: 'rainNight',
    icon: rainNight
  },
  {
    weather: 'clear sky',
    icon: sunCleanSky
  },
]
