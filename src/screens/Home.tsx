import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

const Home = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.text}>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: {
    fontFamily: 'NunitoSans-Variable', // The name you registered the font with
    fontSize: 24,
    fontVariationSettings: '"wght" 700', // Adjust the weight as needed
  },
});
