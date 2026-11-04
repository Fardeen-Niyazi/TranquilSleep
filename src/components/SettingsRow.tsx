import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CustomSwitch from './CustomSwitch';
import { PauseIcon, ScreenLockIcon2, SoundIcon2 } from '../assets/images';

interface SettingRowProps {
  title: string;
  icon: 'screenlock' | 'sound' | 'pause';
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const SettingRow: React.FC<SettingRowProps> = ({
  title,
  icon,
  value,
  onValueChange,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        {icon === 'screenlock' && <ScreenLockIcon2 size={22} color="#F0EEE8" />}
        {icon === 'sound' && <SoundIcon2 size={22} color="#F0EEE8" />}
        {icon == 'pause' && <PauseIcon size={22} color="#F0EEE8" />}
        <Text style={styles.title}>{title}</Text>
      </View>

      <CustomSwitch value={value} onValueChange={onValueChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 54,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#F0EEE8',
    fontFamily: 'NunitoSans-Variable',
    fontVariationSettings: '"wght" 400',
  },
});

export default SettingRow;
