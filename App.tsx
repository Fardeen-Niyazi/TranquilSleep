import { StyleSheet, Text, View } from 'react-native';
import { RootStack } from './src/navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <RootStack />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseText: {
    fontFamily: 'NunitoSans-Variable', // The name you registered the font with
    fontSize: 24,
    fontVariationSettings: '"wght" 700', // Adjust the weight as needed
  },
});

export default App;
