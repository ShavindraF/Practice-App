import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Page</Text>
    </View>
  );
};

export default SettingsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});
