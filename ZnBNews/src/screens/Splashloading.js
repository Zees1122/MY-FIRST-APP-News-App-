import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';

function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Root'); 
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/splashnew.jpeg')}
        style={styles.splashImage}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashImage: {
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;
