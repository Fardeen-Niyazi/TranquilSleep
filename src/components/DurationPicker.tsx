import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import Svg, {
  Circle,
  Line,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

import Slider from '@react-native-community/slider';
import { MoonIcon } from '../assets/images';
import { COLORS } from '../colors';

interface DurationPickerProps {
  value: number;
  onChange: (value: number) => void;
  endTimeLabel?: string;
  min?: number;
  max?: number;
}

const PRESETS = [15, 30, 45, 60, 90];

const DurationPicker: React.FC<DurationPickerProps> = ({
  value,
  onChange,
  endTimeLabel = '9:57 AM',
  min = 1,
  max = 120,
}) => {
  const size = 280;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = Math.min(1, Math.max(0, value / max));

  const strokeDashoffset = circumference * (1 - progress);

  const ticks = Array.from({ length: 60 }, (_, index) => {
    const angle = (index * 6 - 90) * (Math.PI / 180);

    const innerRadius = radius - (index % 5 === 0 ? 10 : 5);
    const outerRadius = radius - 1;

    return {
      x1: size / 2 + innerRadius * Math.cos(angle),
      y1: size / 2 + innerRadius * Math.sin(angle),
      x2: size / 2 + outerRadius * Math.cos(angle),
      y2: size / 2 + outerRadius * Math.sin(angle),
    };
  });

  return (
    <View style={styles.container}>
      {/* Circular Progress */}
      <View style={[styles.ringContainer, { width: size, height: size }]}>
        <Svg width={size} height={size}>
          <Defs>
            <LinearGradient
              id="progressGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <Stop offset="0%" stopColor="#BDD1AA" />
              <Stop offset="100%" stopColor="#659B76" />
            </LinearGradient>
          </Defs>

          {/* Background ring */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#18231B"
            strokeWidth={strokeWidth}
            fill="none"
          />

          {/* Tick marks */}
          {ticks.map((tick, index) => (
            <Line
              key={index}
              x1={tick.x1}
              y1={tick.y1}
              x2={tick.x2}
              y2={tick.y2}
              stroke="#1C281F"
              strokeWidth={index % 5 === 0 ? 2 : 1}
            />
          ))}

          {/* Progress arc */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#progressGradient)"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            rotation={-90}
            origin={`${size / 2}, ${size / 2}`}
          />
        </Svg>

        {/* Center content */}
        <View style={styles.centerContent}>
          <View style={styles.durationRow}>
            <Text style={styles.durationText}>{value}</Text>

            <Text style={styles.minuteText}>min</Text>
          </View>

          <View style={styles.subtitleRow}>
            <MoonIcon size={16} />

            <Text style={styles.subtitle}>{`Audio fades and `}</Text>
          </View>
          <Text
            style={styles.subtitle}
          >{`Screen locks at ${endTimeLabel}`}</Text>
        </View>
      </View>

      {/* Duration Slider */}
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={min}
          maximumValue={max}
          step={5}
          value={value}
          onValueChange={onChange}
          minimumTrackTintColor={COLORS.slateGreen}
          maximumTrackTintColor={COLORS.slateGreen}
          thumbImage={require('../assets/images/SliderDot.png')}
          thumbSize={50}
        />

        <View style={styles.sliderLabels}>
          <Text style={styles.sliderLabel}>{min}m</Text>

          <Text style={styles.sliderHint}>drift gently</Text>

          <Text style={styles.sliderLabel}>{max}m</Text>
        </View>
      </View>

      {/* Preset Buttons */}
      <View style={styles.presetsContainer}>
        {PRESETS.map(preset => {
          const selected = value === preset;

          return (
            <Pressable
              key={preset}
              onPress={() => onChange(preset)}
              style={[styles.presetButton, selected && styles.selectedPreset]}
            >
              <Text
                style={[
                  styles.presetText,
                  selected && styles.selectedPresetText,
                ]}
              >
                {preset}m
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },

  ringContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  centerContent: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  durationRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  durationText: {
    fontSize: 100,
    fontWeight: '300',
    color: '#F1EEE7',
    fontFamily: 'serif',
  },

  minuteText: {
    fontSize: 19,
    color: '#7C897D',
    marginLeft: 8,
  },

  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },

  subtitle: {
    color: COLORS.boneWhite,
    fontSize: 16,
    fontFamily: 'NunitoSans-Variable',
    fontVariationSettings: '"wght" 400',
  },

  sliderContainer: {
    width: '88%',
    marginTop: 8,
  },

  slider: {
    width: '100%',
    height: 30,
  },

  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal: 5,
  },

  sliderLabel: {
    fontSize: 15,
    color: COLORS.boneWhite,
  },

  sliderHint: {
    fontSize: 16,
    color: COLORS.boneWhite,
    fontStyle: 'italic',
    fontFamily: 'serif',
  },

  presetsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 25,
  },

  presetButton: {
    paddingHorizontal: 17,
    paddingVertical: 11,
    borderRadius: 30,
  },

  selectedPreset: {
    backgroundColor: COLORS.forestGreen,
    shadowColor: '#5D9B70',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 5,
  },

  presetText: {
    color: COLORS.white,
    fontSize: 16,
  },

  selectedPresetText: {
    color: '#F4F1E9',
  },
});

export default DurationPicker;
