import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './roots/rootTabsNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App(){
  return(
    <NavigationContainer>
      <TabNavigator />
      <StatusBar />
    </NavigationContainer>
  )
}