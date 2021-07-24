import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'

import ProductOverviewScreen from '../screens/ProductOverviewScreen'


const Tab = createBottomTabNavigator()

function HomeScreen() {
    return (
      <View style={styles.screen}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

const BottomNav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomNav

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
