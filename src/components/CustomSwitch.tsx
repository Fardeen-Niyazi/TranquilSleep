import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { COLORS } from '../colors';

interface CustomSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  value,
  onValueChange,
  disabled = false,
}) => {
  return (
    <Pressable
      onPress={() => onValueChange(!value)}
      disabled={disabled}
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled }}
      style={[
        styles.track,
        { backgroundColor: value ? COLORS.forestGreen : COLORS.slateGreen60 },
        disabled && styles.disabled,
      ]}
    >
      <View
        style={[
          styles.thumb,
          {
            alignSelf: value ? 'flex-end' : 'flex-start',
          },
        ]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  track: {
    width: 55,
    height: 28,
    borderRadius: 30,
    padding: 4,
    justifyContent: 'center',
  },
  thumb: {
    width: 24,
    height: 24,
    borderRadius: 26,
    backgroundColor: '#F3F0E8',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default CustomSwitch;
