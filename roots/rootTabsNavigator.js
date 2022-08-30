import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackHomeScreen, StackSeriesScreen, StackComicsScreen, StackConfigScreen } from './rootStackNavigator';

const tabs = createBottomTabNavigator();

export default function TabNavigator(){
    return(
        <tabs.Navigator screenOptions={{headerShown: false}}>
            <tabs.Screen name='Home' component={StackHomeScreen} />
            <tabs.Screen name='Series' component={StackSeriesScreen} />
            <tabs.Screen name='Comics' component={StackComicsScreen} />
            <tabs.Screen name='Config' component={StackConfigScreen} />
        </tabs.Navigator>
    )
}