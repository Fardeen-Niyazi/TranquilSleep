import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../navigation/types';
import { COLORS } from '../colors';
import GlowingIcon from '../components/GlowingIcon';
import SplashItem from '../components/SplashItem';
import Button from '../components/Button';

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
      <GlowingIcon />
      <Text style={styles.text}>Sleep Timer</Text>
      <Text style={styles.subtext}>Turn off screen. Sleep in peace.</Text>

      <SplashItem title="Screen turns off automatically" icon="screenLock" />
      <SplashItem title="Audio & video pause quietly" icon="battery" />
      <SplashItem title="Audio & video pause quietly" icon="sound" />
      {/* <Pressable
        onPress={() => {
          // Navigate to Home screen
          handleNextPress();
        }}
      >
        <Text>Next</Text>
      </Pressable> */}
      <Button
        title="Next"
        icon="arrow"
        onPress={handleNextPress}
        style={{ marginTop: 50 }}
      />
      <Text style={[styles.subtext, { marginTop: 10, fontSize: 16 }]}>
        Gentle on eyes • Zero midnight drain
      </Text>
    </SafeAreaView>
  );
};

export default Splash;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.deepCharcoal,
  },

  text: {
    fontFamily: 'NunitoSans-Variable', // The name you registered the font with
    fontSize: 30,
    color: COLORS.boneWhite,
    fontVariationSettings: '"wght" 500', // Adjust the weight as needed
    marginTop: 20,
  },
  subtext: {
    fontFamily: 'NunitoSans-Variable', // The name you registered the font with
    fontSize: 20,
    color: COLORS.stoneGreen,
    fontVariationSettings: '"wght" 400', // Adjust the weight as needed
    marginTop: 10,
  },
  next: {
    fontFamily: 'NunitoSans-Variable', // The name you registered the font with
    fontSize: 20,
    fontVariationSettings: '"wght" 700', // Adjust the weight as needed
  },
});
