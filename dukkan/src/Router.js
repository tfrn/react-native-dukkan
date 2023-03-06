// react
import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages
import Products from './pages/Products';
import Detail from './pages/Detail';
import Auth from './pages/Auth';

// redux
import { useSelector, useDispatch } from 'react-redux';

// loading
import Loading from './components/Loading';

// icon
import Icon from  'react-native-vector-icons/MaterialCommunityIcons'
// call stack navigation
const Stack = createNativeStackNavigator();

// main function
function Router() {
  const userSession = useSelector(state=> state.user);
  const isAuthLoading = useSelector(state=> state.isAuthLoading);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
        {isAuthLoading ? 
        (
          <Loading></Loading>
        ) : !userSession ? (
            <Stack.Navigator>
              <Stack.Screen name="AuthPage" component={Auth} options={{
                title:"Auth",
                headerStyle:{backgroundColor:"#64b5f6"},
                headerTitleStyle:{color:"white"},
              }}></Stack.Screen>
              </Stack.Navigator>
        )
        :
        (
          <Stack.Navigator>
            <Stack.Screen name="ProductsPage" component={Products} options={{
              title:"Dükkan",
              headerStyle:{backgroundColor:"#64b5f6"},
              headerTitleStyle:{color:"white"},
              headerRight:()=><Icon name="logout" size={30} color="white" onPress={()=>dispatch({type:"REMOVE_USER" })}></Icon>
            }}></Stack.Screen>
            <Stack.Screen name="DetailPage" component={Detail} options={{
              title:"Detay",
              headerStyle:{backgroundColor:"#64b5f6"},
              headerTitleStyle:{color:"white"},
              headerTintColor:{color:"white"},
            }}></Stack.Screen>
          </Stack.Navigator>
        ) 
      }
    </NavigationContainer>
  );
};

export default Router;
