import React from 'react';
import {View, Image, StyleSheet, StatusBar} from 'react-native';

const PRIMARY_BLUE = '#18416B';

function AppHeader() {
  return (
    <View style={styles.header}>
      <StatusBar barStyle="light-content" backgroundColor={PRIMARY_BLUE} />
      <Image
        source={require('../../assets/z&bnews.png')} // make sure name is zbnews.png
        style={styles.logo}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: PRIMARY_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    elevation: 6,
  },
  logo: {
    width: 100,
    height: 45,
    tintColor: 'white', // makes logo white if PNG supports tint
  },
});

export default AppHeader;
