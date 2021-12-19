jest.useFakeTimers();

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');

  return {
    __esModule: true,
    ...originalModule,
    useFocusEffect: jest.fn(),
    useNavigation: jest.fn(() => ({
      dangerouslyGetParent: jest.fn(),
      navigate: jest.fn()
    })),
    useRoute: () => ({
      params: {
        cityData: {
          id: jest.fn,
          name: jest.fn,
          hour: jest.fn,
          minutes: jest.fn,
          weather: jest.fn,
          temperature: jest.fn,
          temperatureMin: jest.fn,
          temperatureMax: jest.fn,
          feelsLike: jest.fn,
          atmPressure: jest.fn,
          humidity: jest.fn,
          country: jest.fn,
          visibility: jest.fn,
          speedWind: jest.fn,
          cloudPercentage: jest.fn
        }
      },
    }),
    useIsFocused: jest.fn()
  };
});

jest.mock('react-native-reanimated', () => {
  const originalModule = jest.requireActual('../node_modules/react-native-reanimated/mock');

  return {
    __esModule: true,
    ...originalModule,
    useSharedValue: jest.fn,
    useAnimatedStyle: jest.fn(() => ({
      transform: jest.fn(),
      opacity: jest.fn()
    }))
  }
  // ...require('react-native-reanimated/mock'), useSharedValue: jest.fn(v => v)
  // jest.require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();
}
);

jest.mock("react-native-appearance", () => ({
  useColorScheme: jest.fn(),
}));

jest.mock('react-native-safe-area-context', () => {
  return {
    useSafeAreaInsets: () => {
      return {
        bottom: 0,
        top: 0
      };
    }
  };
});

global.__reanimatedWorkletInit = jest.fn();
