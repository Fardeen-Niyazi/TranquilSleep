import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { COLORS } from '../colors';
import { ScreenLockIcon, BatteryIcon, SoundIcon } from '../assets/images';

const { width } = Dimensions.get('window');

interface SplashItemProps {
  title: string;
  icon: string;
}

const SplashItem: React.FC<SplashItemProps> = ({ title, icon }) => {
  return (
    <View style={styles.container}>
      {icon === 'screenLock' && <ScreenLockIcon />}
      {icon === 'battery' && <BatteryIcon />}
      {icon === 'sound' && <SoundIcon />}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default SplashItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    height: 54,
    borderWidth: 1,
    borderColor: COLORS.slateGreen60,
    // backgroundColor: COLORS.nightGreen,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: width - 40,
    gap: 15,
    paddingHorizontal: 20,
  },

  title: {
    fontFamily: 'NunitoSans-Variable', // The name you registered the font with
    fontSize: 20,
    color: COLORS.boneWhite,
    fontVariationSettings: '"wght" 400', // Adjust the weight as needed
  },
});
