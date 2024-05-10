//2 criamos a class app js
/*3- intalamos o stack npm install @react-navigation/stack ou podemos utlizar
o npm install -g yarn(que é O Yarn é uma ferramenta mais rápida e melhor do que o
NPM,)"yarn add @react-navigation/stack */
/* 4  instalamos também "yarn add @react-navigation/native ou npm install @react-navigation/native "
 vamos adicionar a biblioteca react-navigation/native, pois ela nos fornece o contêiner
para a navegação em pilha (stack navigation)
yarn add @react-navigation/stack ou npm install @react-navigation/stack
* vamos instalar a  mais algumas  dependencias 
OBS expo install e npm install são iguais, a única diferença
é que o npm instala a versão mais recente da biblioteca,
enquanto o expo install instala a versão compatível da
biblioteca
expo install react-native-gesture-handler
expo install react-native-reanimated
expo install react-native-screens
expo install react-native-safe-area-context
expo install @react-native-community/masked-view
*/
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home";
import LocalizacaoScreen from "./screens/Localizacao";
import MeteoroScreen from "./screens/Meteoro";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Localização" component={LocalizacaoScreen} />
        <Stack.Screen name="Meteoro" component={MeteoroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
