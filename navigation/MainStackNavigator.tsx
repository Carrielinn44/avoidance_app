import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../app";

const Stack = createNativeStackNavigator()

function MainStackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}

export default MainStackNavigator