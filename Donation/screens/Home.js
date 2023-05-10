import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Text, View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../components/styles2.js';
import { icons, SIZES, images } from '../constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const donationTypes = ["Blood", "Money", "Clothes"];

const Stack = createNativeStackNavigator();

const Home = (navigation) => {
    const [activeDonationType, setActiveDonationType] = useState("Blood")

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
            
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flex: 1, padding: 25 }}>


                    <View style={{ flex: 1, backgroundColor: 'white'}}>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Image
                            source= {images.profile}
                            resizeMode="cover"
                            style={styles.btnImg(40)}
                        />
                    </TouchableOpacity>
                    </View>

                        <View >
                            
                        <Text style={styles.userName}>
                            Hello User
                        </Text>

                        <Text style={styles.welcomeMessage}>
                            Donate Here!
                        </Text>

                            <View style={styles.tabsContainer}>
                                <FlatList 
                                data={donationTypes}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={styles.tab(activeDonationType, item)} onPress={() => {
                                    setActiveDonationType(item);
                                    navigation.navigate("Welcome")
                                    }}>
                                        <Text style={styles.tabText(activeDonationType, item)}>{item}</Text>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={item => item}
                                contentContainerStyle={{ columnGap: 16}}
                                vertical
                                />
                            </View>

                       
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Home;