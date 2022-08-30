import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, DetailsScreen, SeriesScreen, ComicsScreen, ConfigScreen } from '../screens/index';

const Stack = createStackNavigator();

export function StackHomeScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeStack" component={HomeScreen}/>
            <Stack.Screen name="DetailsStack" component={DetailsScreen}/>
        </Stack.Navigator>
    )
}
export function StackSeriesScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="SeriesStack" component={SeriesScreen}/>
        </Stack.Navigator>
    )
}
export function StackComicsScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="ComicsStack" component={ComicsScreen}/>
        </Stack.Navigator>
    )
}

export function StackConfigScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="ConfigStack" component={ConfigScreen}/>
        </Stack.Navigator>
    )
}

