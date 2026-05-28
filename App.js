import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Landing  from './screens/Landing'
import Login    from './screens/auth/Login'
import Register from './screens/auth/Register'
import Home from './screens/Home'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing"  component={Landing}  />
        <Stack.Screen name="Login"    component={Login}    />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
       


      </Stack.Navigator>
    </NavigationContainer>
  )
}