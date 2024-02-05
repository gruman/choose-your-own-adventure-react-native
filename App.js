// Import necessary components and screens
import Home from './screens/Home';
import Story from './screens/Story';
import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView } from 'react-native'
// Import navigation components from React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
// Main App component
export default function App() {

  return (
    <View style={{ flex: 1, backgroundColor: '#222' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Home' // Set the initial route to Home
          >
            <Stack.Screen name="Home" component={Home}
              options={{ headerShown: false }} />
            <Stack.Screen
              name="Story"
              component={Story}
              options={{
                headerStyle: {
                  backgroundColor: '#222', // Set the background color
                },
                headerTintColor: '#fff', // Set the text color
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      <StatusBar />
    </View>
  );
}
