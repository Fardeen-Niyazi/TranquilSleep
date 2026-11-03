import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { COLORS } from '../colors';

const GlowingIcon = () => {
  return (
    <View style={styles.container}>
      {/* Actual icon */}
      <View style={styles.icon}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

export default GlowingIcon;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.onyxBlack,
  },

  glow: {
    ...StyleSheet.absoluteFill,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 175,
    height: 175,
    alignItems: 'center',
    // iOS
  },
});
