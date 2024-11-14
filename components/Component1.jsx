import A from '../screens/screen1';
import B from '../screens/screen2';
import C from '../screens/screen3';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function Component1() {
  return (
    <Stack.Navigator
      initialRouteName="A"  // Corrected here
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        initialParams={{
          screen: 'A',  // Corrected here
        }}
        options={{
          unmountOnBlur: true,
        }}
        name="A"
        component={A}
      />

      <Stack.Screen
        initialParams={{
          screen: 'B',  // Corrected here
        }}
        options={{
          unmountOnBlur: true,
        }}
        name="B"
        component={B}
      />

      <Stack.Screen
        initialParams={{
          screen: 'C',  // Corrected here
        }}
        options={{
          unmountOnBlur: true,
        }}
        name="C"
        component={C}
      />
    </Stack.Navigator>
  );
}
