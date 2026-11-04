import { Text, StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { COLORS } from '../colors';
import TimerSettings, { TimerSettingsState } from '../components/TimerSettings';
import DurationPicker from '../components/DurationPicker';
import { getEndTime } from '../util/indes';

const Home = () => {
  const [settings, setSettings] = useState<TimerSettingsState>({
    turnOffScreen: false,
    pauseMusic: false,
    fadeAudio: false,
  });
  const [duration, setDuration] = useState(45);

  const updateSetting = (key: keyof TimerSettingsState, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  function handleNextPress(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <Text style={styles.text}>Sleep Timer</Text>
        <DurationPicker
          value={duration}
          onChange={setDuration}
          endTimeLabel={getEndTime(duration)}
        />
        <View style={styles.box} />

        <TimerSettings
          settings={settings}
          onSettingChange={updateSetting}
          onStartPress={handleNextPress}
        />
        <View style={styles.box} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.deepCharcoal,
  },
  text: {
    fontFamily: 'NunitoSans-Variable', // The name you registered the font with
    fontSize: 24,
    fontVariationSettings: '"wght" 500', // Adjust the weight as needed
    color: COLORS.boneWhite,
    marginVertical: 10,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  box: { height: 30 },
});
