import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Primary blue based on your splash screen
const PRIMARY_BLUE = '#18416B';

const CustomButton = ({ title, onPress, color = PRIMARY_BLUE }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: color }]} 
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  text: {color: '#fff', fontSize: 18, fontWeight: 'bold'},
});

export default CustomButton;