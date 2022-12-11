import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MapScreen from '../screens/MapScreen'
import PhotoScreen from '../screens/PhotoScreen'
import QuestionScreen from '../screens/QuestionScreen'
import SuccessScreen from '../screens/SuccessScreen'

const Stack = createNativeStackNavigator()

export const MainStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="map" options={{ title: "Vá até um local válido!" }} component={MapScreen} />
    <Stack.Screen name="photo" options={{ title: "Tire uma foto do local" }} component={PhotoScreen} />
    <Stack.Screen name="questions" options={{ title: "Responda o questionário" }} component={QuestionScreen} />
    <Stack.Screen name="success" options={{ title: "Sucesso!", headerShown: false}} component={SuccessScreen} />
  </Stack.Navigator>
)

export default MainStackNavigator
