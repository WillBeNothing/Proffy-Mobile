 import React from 'react'
 import {createStackNavigator} from '@react-navigation/stack'
 import {NavigationContainer} from '@react-navigation/native'

import LandingPage from '../pages/landing'
import GiveClassesPage from '../pages/giveClasses'
import StudyTabs from './studytabs'


 const {Navigator, Screen} = createStackNavigator() 

 function AppStack() {
    
    return(
    <NavigationContainer>
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="Landing" component={LandingPage}/>
            <Screen name="GiveClasses" component={GiveClassesPage}/>
            <Screen name="study" component={StudyTabs}/>
        </Navigator>
    </NavigationContainer>
    )
 }

 export default AppStack;

