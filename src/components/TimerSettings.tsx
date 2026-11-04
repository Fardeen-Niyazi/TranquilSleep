import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../colors';
import Button from './Button';
import SettingRow from './SettingsRow';

export interface TimerSettingsState {
  turnOffScreen: boolean;
  pauseMusic: boolean;
  fadeAudio: boolean;
}

interface TimerSettingsProps {
  settings: TimerSettingsState;
  onSettingChange: (key: keyof TimerSettingsState, value: boolean) => void;
  onStartPress: () => void;
}

const TimerSettings: React.FC<TimerSettingsProps> = ({
  settings,
  onSettingChange,
  onStartPress,
}) => {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>WHEN TIMER ENDS</Text>
          <View style={styles.indicator} />
        </View>

        <SettingRow
          title="Turn off screen"
          icon="screenlock"
          value={settings.turnOffScreen}
          onValueChange={value => onSettingChange('turnOffScreen', value)}
        />

        <SettingRow
          title="Pause music & video"
          icon="pause"
          value={settings.pauseMusic}
          onValueChange={value => onSettingChange('pauseMusic', value)}
        />

        <SettingRow
          title="Fade audio gently (60s)"
          icon="sound"
          value={settings.fadeAudio}
          onValueChange={value => onSettingChange('fadeAudio', value)}
        />
      </View>

      <Button
        title="Start Sleep Timer"
        icon="moon"
        onPress={onStartPress}
        style={styles.startButton}
        textStyle={styles.startButtonText}
      />
    </>
  );
};

export default TimerSettings;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.darkObsidian,
    borderRadius: 38,
    borderWidth: 1,
    borderColor: COLORS.nightGreen,
    paddingHorizontal: 20,
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  headerTitle: {
    color: '#77867A',
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: 'NunitoSans-Variable',
    fontVariationSettings: '"wght" 400',
  },
  indicator: {
    width: 11,
    height: 11,
    borderRadius: 10,
    backgroundColor: '#778D77',
  },
  startButton: {
    marginTop: 20,
    backgroundColor: COLORS.forestGreen,
  },
  startButtonText: {
    color: COLORS.boneWhite,
  },
});
