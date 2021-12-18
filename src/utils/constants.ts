import mist from '../assets/animations/mist.json';
import overcastSun from '../assets/animations/overcastSun.json';
import rainDay from '../assets/animations/rainDay.json';
import rainNight from '../assets/animations/rainNight.json';
import scatteredClouds from '../assets/animations/scatteredClouds.json';
import sunCleanSky from '../assets/animations/sunCleanSky.json';
// import moonCleanSky from '../assets/animations/moonCleanSky.json';
// import overcastMoon from '../assets/animations/overcastMoon.json';

export const ANIMATION = [
  {
    weather: 'mist',
    icon: mist
  },
  {
    weather: 'overcast clouds',
    icon: overcastSun
  },
  {
    weather: 'light intensity drizzle',
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
  // {
  //   weather: 'clean sky',
  //   icon: moonCleanSky
  // },
  // {
  //   weather: 'overcast clouds',
  //   icon: overcastMoon
  // },
]
