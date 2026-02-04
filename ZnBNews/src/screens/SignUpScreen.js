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
  TextInput,
} from 'react-native';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {addUser} from '../store/userSlice';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

function SignUpScreen({navigation}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSignUp = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill email and password');
      return;
    }

    // For now we only store email + password in Redux
    dispatch(addUser({email, password}));
    Alert.alert('Success', 'Account created! Please sign in.');
    navigation.navigate('SignIn');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'android' ? 'padding' : undefined}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.screenWrapper}>
            <Text style={styles.header}>Sign up</Text>
            <Text style={styles.subHeader}>
              Create an account to continue!
            </Text>

            <CustomInput
              label="Full Name"
              placeholder="Syed Zeeshan"
              value={fullName}
              onChangeText={setFullName}
            />
            <CustomInput
              label="Email"
              placeholder="example@gmail.com"
              value={email}
              onChangeText={setEmail}
            />
            <CustomInput
              label="Date of Birth"
              placeholder="dd/mm/yy"
              value={dob}
              onChangeText={setDob}
            />

            <Text style={styles.labelStyle}>Phone Number</Text>
            <View style={styles.phoneContainer}>
              <View style={styles.flagBox}>
                <Text>🇵🇰 +92</Text>
              </View>
              <TextInput
                style={styles.phoneInput}
                placeholder="300-9999999"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
            </View>

            <CustomInput
              label="Set Password"
              placeholder="******"
              value={password}
              onChangeText={setPassword}
              isPassword
            />
            <CustomButton title="Register" onPress={onSignUp} />
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.footerText}>
                Already have an account?{' '}
                <Text style={styles.link}>Sign In</Text>
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
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: PRIMARY_BLUE,
    marginBottom: 5,
  },
  subHeader: {fontSize: 14, color: '#888', marginBottom: 25},
  labelStyle: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    fontWeight: '600',
  },
  phoneContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  flagBox: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 12,
    fontSize: 16,
  },
  footerText: {textAlign: 'center', marginTop: 25},
  link: {color: PRIMARY_BLUE, fontWeight: 'bold'},
});

export default SignUpScreen;