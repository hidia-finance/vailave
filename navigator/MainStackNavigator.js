import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MapScreen from '../screens/MapScreen'
import PhotoScreen from '../screens/PhotoScreen'
import QuestionScreen from '../screens/QuestionScreen'

const Stack = createNativeStackNavigator()

export const MainStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="map" component={MapScreen} />
    <Stack.Screen name="photo" component={PhotoScreen} />
    <Stack.Screen name="questions" component={QuestionScreen} />
  </Stack.Navigator>
)

export default MainStackNavigator
