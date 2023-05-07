import { useState } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, screenHeaderBtn, Welcome, welcome } from '../components'
//import { openDatabase } from 'react-native-sqlite-storage';

{/*const db = openDatabase({
    name: "Blood_Donations",
});
*/}
const Home = () => {
    const router = useRouter();
    {/*const createTables = () => {
        db.transaction(txn => {
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOIMCREMENT, name VARCHAR(20))`,
                [],
                (sqlTxn:SQLTransaction, res:SQLResultSet) => {
                    console.log("tabele created");
                },
                error => {
                    console.log("error!")
                },
             );
        });
    };*/}
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: 'lightblue'},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension='50%' />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
                    ),
                    headerTitle: "Seif"

                }}
            />
             
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                style={{
                    flex: 1,
                    padding: SIZES.medium
                }}
                >
                    <Welcome />
                    <Popularjobs />
                   {/* <Nearbyjobs />*/}



                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home