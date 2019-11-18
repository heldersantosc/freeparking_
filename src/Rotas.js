import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './Login';
import Cadastrar from './Cadastrar';

const MainNav = createStackNavigator (
{
    Login:{
        screen: Login,
        navigationOptions:{
            header: null
        }
    },
    Cadastrar:{
        screen: Cadastrar,
        navigationOptions:{
            header: null
        }
    }
}    
)

export default Rotas = createAppContainer(MainNav);