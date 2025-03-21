import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './pages/home'
import { Passwords } from './pages/passwords'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if(focused) {
                            return <Ionicons size={size} color={color} name="home" /> 
                        } 

                        return <Ionicons size={size} color={color} name="home-outline"/>
                    }
                }}
            />

            <Tab.Screen
                name="Passwords"
                component={Passwords}
                options={{
                    // tabBarShowLabel: false,    // serve pra tirar o nome em baixo do icone
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if(focused) {
                            return <Ionicons size={size} color={color} name="lock-closed" />
                        }

                        return <Ionicons size={size} color={color} name="lock-closed-outline" />
                    }
                }}
            />
        </Tab.Navigator>
    )
}
            