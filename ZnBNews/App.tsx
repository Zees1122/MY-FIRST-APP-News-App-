import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider, useSelector} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store} from './src/store/store';

import SplashScreen from './src/screens/Splashloading';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HeadlinesScreen from './src/screens/HeadlinesScreen';
import NewsDetailScreen from './src/screens/NewsDetailScreen';
import BookmarksScreen from './src/screens/BookmarksScreen';

import AppHeader from './src/components/AppHeader';

const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const BookmarkStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        header: () => <AppHeader />, 
      }}>
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
}


function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false, 
      }}>
      <HomeStack.Screen name="Headlines" component={HeadlinesScreen} />
      <HomeStack.Screen name="NewsDetail" component={NewsDetailScreen} />
    </HomeStack.Navigator>
  );
}

function BookmarkStackNavigator() {
  return (
    <BookmarkStack.Navigator
      screenOptions={{
        headerShown: false, // We hide the stack header because the Tab Navigator provides the AppHeader
      }}>
      <BookmarkStack.Screen name="BookmarksMain" component={BookmarksScreen} />
      <BookmarkStack.Screen name="NewsDetail" component={NewsDetailScreen} /> 
      {/* This allows you to navigate to details from your bookmarks list */}
    </BookmarkStack.Navigator>
  );
}

function MainTabsNavigator() {
  return (
    <Tab.Navigator screenOptions={{header: () => <AppHeader/>}}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Bookmarks" component={BookmarkStackNavigator} />
    </Tab.Navigator>
  );
}




function RootNavigator() {
  const currentUser = useSelector((state: any) => state.user.currentUser);

  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {/* Splash Screen */}
      <RootStack.Screen name="Splash" component={SplashScreen} />

      {/* Root Screen (Auth or Main) */}
      <RootStack.Screen
        name="Root"
        component={currentUser ? MainTabsNavigator : AuthStackNavigator}
      />
    </RootStack.Navigator>
  );
}



function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
