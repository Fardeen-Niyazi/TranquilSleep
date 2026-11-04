import { Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS } from '../colors';
import { ArrowIcon, MoonIcon } from '../assets/images';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: object;
  icon: 'arrow' | 'moon';
  textStyle?: object;
}

const Button = (props: ButtonProps) => {
  return (
    <Pressable
      style={[styles.button, props.style]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      {props.icon === 'moon' && <MoonIcon size={17} color={COLORS.boneWhite} />}

      <Text style={[styles.buttonText, props.textStyle]}>{props.title}</Text>
      {props.icon === 'arrow' && <ArrowIcon />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.lightGreen,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
    height: 54,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    gap: 10,
  },
  buttonText: {
    color: COLORS.onyxBlack,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
