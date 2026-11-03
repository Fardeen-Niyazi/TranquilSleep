import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../navigation/types';

const Splash = () => {
  const navigation = useNavigation<NavigationProp>();
  const handleNextPress = () => {
    // Navigate to Home screen
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }),
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.text}>Splash</Text>
      <Pressable
        onPress={() => {
          // Navigate to Home screen
          handleNextPress();
        }}
      >
        <Text>Next</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Splash;
const styles = StyleSheet.create({
  mainContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  text: {
    fontFamily: 'NunitoSans-Variable', // The name you registered the font with
    fontSize: 24,
    fontVariationSettings: '"wght" 700', // Adjust the weight as needed
  },
  next: {
    fontFamily: 'NunitoSans-Variable', // The name you registered the font with
    fontSize: 20,
    fontVariationSettings: '"wght" 700', // Adjust the weight as needed
  },
});
