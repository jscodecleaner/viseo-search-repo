import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import store from './redux/store'

/* Import Components */
import LoginScreen from './screens/LoginScreen/LoginScreen'
import ListScreen from './screens/ListScreen/ListScreen'
import DetailsScreen from './screens/DetailsScreen/DetailsScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
            name={'LoginScreen'}
            component={LoginScreen}
          />
          <Stack.Screen
            name={'ListScreen'}
            component={ListScreen}
          />
          <Stack.Screen name={'DetailsScreen'} component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
