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
import UsersCart from '../user/UsersCart'


const Tab = createBottomTabNavigator()

const BottomNav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Products" component={ProductOverviewScreen} />
                <Tab.Screen name="Cart" component={UsersCart} />
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
