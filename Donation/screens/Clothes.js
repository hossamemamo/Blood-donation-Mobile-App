import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight, Button, FlatList, Text, View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../components/styles2.js';
import { icons, SIZES, images } from '../constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const getOrganization = (item) => {
    let image;
    if (item === "Resala") {
        image = images.resala;
    } else if (item === "Orman") {
        image = images.orman;
    } 
    return image;
  };


const organization = ["Resala", "Orman"];
const delivery = ["Pickup", "Dropoff"];


const Stack = createNativeStackNavigator();

const Clothes = (navigation) => {
    const [activeDonationType, setActiveDonationType] = useState("Resala")
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
            
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flex: 1, padding: 25 }}>


                    <View style={{ flex: 1, backgroundColor: 'white'}}>
                    <TouchableOpacity style={styles.btnContainer} onPress={() => {
                                    navigation.navigate("Account")
                                    }}>
                        <Image
                            source= {images.profile}
                            resizeMode="cover"
                            style={styles.btnImg(40)}
                        />
                    </TouchableOpacity>
                    </View>

                        <View >
                            
                        <Text style={styles.userName}>
                            Donate Clothes
                        </Text>

                            <View style={styles.tabsContainer}>
                                <FlatList 
                                data={organization}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={styles.tab(activeDonationType, item)} onPress={() => {
                                        setActiveDonationType(item);
                                      }}>
                                        <Image source= {getOrganization(item)} resizeMode="cover" style={styles.btnImg(63)}/>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={item => item}
                                contentContainerStyle={{ columnGap: 16}}
                                horizontal
                                />
                            </View>

                            <Text style={styles.normal}>
                            Delivery:
                            </Text>

                            <FlatList 
                                data={delivery}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={styles.tab(activeDonationType, item)} onPress={() => {
                                        setActiveDonationType(item);
                                      }}>
                                        <Text style={styles.tabText(activeDonationType, item)}>{item}</Text>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={item => item}
                                contentContainerStyle={{ columnGap: 16}}
                                horizontal
                            />
                        
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Clothes;