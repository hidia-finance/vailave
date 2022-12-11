import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MapScreen from '../screens/MapScreen'
import PhotoScreen from '../screens/PhotoScreen'
import QuestionScreen from '../screens/QuestionScreen'
import SuccessScreen from '../screens/SuccessScree'

const Stack = createNativeStackNavigator()

export const MainStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="map" component={MapScreen} />
    <Stack.Screen name="photo" component={PhotoScreen} />
    <Stack.Screen name="questions" component={QuestionScreen} />
    <Stack.Screen name="success" component={SuccessScreen} />
  </Stack.Navigator>
)

export default MainStackNavigator
