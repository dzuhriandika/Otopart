import React, {Component} from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Screen/Home';
import Feed from './Screen/Feed';
import Cart from './Screen/Cart';
import Profile from './Screen/Profile';

export default createMaterialBottomTabNavigator(
    {
      Home: { screen: Home , navigationOptions: () => ({
                tabBarIcon:({tintColor}) => (
                        <Icon
                            name="ios-home"
                            size={25}
                            style={[{ color: '#ffffff' }]}
                        />
                    )
                }),
            },
      Feed: { screen: Feed , navigationOptions: () => ({
                tabBarIcon:({tintColor}) => (
                        <Icon
                            name="ios-card"
                            size={25}
                            style={[{ color: '#ffffff' }]}
                        />
                    )
                }),
            },
      Cart: { screen: Cart , navigationOptions: () => ({
                tabBarIcon:({tintColor}) => (
                        <Icon
                            name="ios-cart"
                            size={25}
                            style={[{ color: '#ffffff' }]}
                        />
                    )
                }), 
            },
      Profile: { screen: Profile , navigationOptions: () => ({
            tabBarIcon:({tintColor}) => (
                    <Icon
                        name="ios-person"
                        size={25}
                        style={[{ color: '#ffffff' }]}
                    />
                )
            }),
        },
    },
    {
      initialRouteName: 'Home',
      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      labeled: true,
      barStyle: { backgroundColor: '#694fad' },
      shifting: true
    },
  );