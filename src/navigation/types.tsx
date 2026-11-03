import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;

  Splash: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
