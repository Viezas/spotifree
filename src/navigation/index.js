import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Landing from '../features/onboarding/landing/Landing.screen'
import Login from '../features/onboarding/login/Login.screen';
import LoginForm from '../features/onboarding/loginForm/LoginForm';
import ResetPassword from '../features/onboarding/resetPassword/ResetPassword';
import LoggedIn from '../features/onboarding/loggedIn/LoggedIn';

import Amplify from 'aws-amplify'
import awsconfig from '../config/aws-exports'
Amplify.configure(awsconfig)

const Stack = createNativeStackNavigator();

const rootContainer = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="landing" component={Landing} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="loginWithPhone" component={LoginForm} />
                <Stack.Screen name="resetPassword" component={ResetPassword} />
                <Stack.Screen name="loggedIn" component={LoggedIn} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default rootContainer;
