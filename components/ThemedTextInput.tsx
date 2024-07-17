import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const ThemedTextInput: React.FC<TextInputProps> = (props) => {
  const { colors } = useTheme();

  return (
    <TextInput
      {...props}
      style={[
        {
          color: colors.text,
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
        props.style,
      ]}
      placeholderTextColor={colors.text}
    />
  );
};

export default ThemedTextInput;