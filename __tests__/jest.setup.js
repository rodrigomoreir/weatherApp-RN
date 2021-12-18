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
        id: jest.fn,
        research: {
          titulo: ''
        }
      },
      name: ''
    }),
    useIsFocused: jest.fn()
  };
});

jest.mock('react-native-reanimated', () => {
  jest.requireActual('../node_modules/react-native-reanimated/mock');
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
