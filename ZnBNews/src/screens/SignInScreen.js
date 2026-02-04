import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../store/userSlice';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

function SignInScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);

  const onLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    const user = users.find(
      u => u.email === email && u.password === password,
    );

    if (user) {
      dispatch(loginUser({email, password}));
    } else {
      Alert.alert('Error', 'User not found or password is incorrect');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'android' ? 'padding' : undefined}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.screenWrapper}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../../assets/z&blogob.jpeg')}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.header}>Sign in to your Account</Text>

            <CustomInput
              label="Email"
              placeholder="example@gmail.com"
              value={email}
              onChangeText={setEmail}
            />
            <CustomInput
              label="Password"
              placeholder="******"
              value={password}
              onChangeText={setPassword}
              isPassword
            />

            <TouchableOpacity>
              <Text style={styles.forgotPass}>Forgot Password?</Text>
            </TouchableOpacity>

            <CustomButton title="Log in" onPress={onLogin} />

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.footerText}>
                Don't have an account?{' '}
                <Text style={styles.link}>Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const PRIMARY_BLUE = '#18416B';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  scrollContent: {padding: 25},
  screenWrapper: {width: '100%'},
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoImage: {
    width: 160,
    height: 80,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: PRIMARY_BLUE,
    marginBottom: 20,
    textAlign: 'left',
  },
  forgotPass: {
    color: PRIMARY_BLUE,
    textAlign: 'right',
    marginBottom: 20,
  },
  footerText: {textAlign: 'center', marginTop: 25},
  link: {color: PRIMARY_BLUE, fontWeight: 'bold'},
});

export default SignInScreen;