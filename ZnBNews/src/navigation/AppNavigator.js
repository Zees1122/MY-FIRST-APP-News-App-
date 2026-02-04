import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HeadlinesScreen from '../screens/HeadlinesScreen';
import BookmarksScreen from '../screens/BookmarksScreen';
import AppHeader from '../components/AppHeader';

const Stack = createNativeStackNavigator();

const screenOptionsWithHeader = {
  header: () => <AppHeader />,
};

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bookmarks"
        component={BookmarksScreen}
        options={screenOptionsWithHeader}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={screenOptionsWithHeader}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={screenOptionsWithHeader}
      />
      <Stack.Screen
        name="Headlines"
        component={HeadlinesScreen}
        options={screenOptionsWithHeader}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
