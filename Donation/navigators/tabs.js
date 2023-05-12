import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native';
const Tab=createBottomTabNavigator();

import Blood from './../screens/Blood';
import History from './../screens/History';


import Account from '../screens/Account';
import styles from '../components/styles2';

const Tabs = () => {
    return(
        <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#ffffff',
            borderRadius: 15,
            height: 90,
            ...styles.shadow
          },
        }}
      >
  
  <Tab.Screen name='Account' component={Account}
                                    options={{
                                        tabBarIcon :({focused}) => (
                                            <View style={style.container}>
                                                <Image
                                                source={require('../assets/icons/Account.png')}
                                                resizeMode='contain'
                                                style={{
                                                    width:35,
                                                    height:35,
                                                    justifyContent:'center',
                                                    tintColor:focused?'#e32f45':'#748c94',
                                                    flex:5,
                                                }}
                                                />
                                                <Text
                                                    style={{color :focused ? '#e32f45':'#748c94',fontSize:8,flex:1}}>
                                                    Account
                                                </Text>
                                            </View>
                                        )
                                    }}            
            
            />

            <Tab.Screen name='Blood' component={Blood}
                        options={{
                            tabBarIcon :({focused}) => (
                                <View style={style.container}>
                                    <Image
                                    source={require('../assets/icons/blood.png')}
                                    resizeMode='contain'
                                    style={{
                                        width:35,
                                        height:35,
                                        justifyContent:'center',
                                        tintColor:focused?'#e32f45':'#748c94',
                                        flex:5,
                                    }}
                                    />
                                    <Text
                                        style={{color :focused ? '#e32f45':'#748c94',fontSize:8,flex:1}}>
                                        Blood
                                    </Text>
                                </View>
                            )
                        }}            
            />
            <Tab.Screen name='History' component={History}
                                    options={{
                                        tabBarIcon :({focused}) => (
                                            <View style={style.container}>
                                                <Image
                                                source={require('../assets/icons/history.png')}
                                                resizeMode='contain'
                                                style={{
                                                    width:35,
                                                    height:35,
                                                    justifyContent:'center',
                                                    tintColor:focused?'#e32f45':'#748c94',
                                                    flex:5,
                                                }}
                                                />
                                                <Text
                                                    style={{color :focused ? '#e32f45':'#748c94',fontSize:8,flex:1}}>
                                                    history
                                                </Text>
                                            </View>
                                        )
                                    }}            
            
            />



        </Tab.Navigator>

    );
}

const style = StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column', // Set flexDirection to 'column'
      },
    

});

export default Tabs;