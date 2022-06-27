import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image, Text } from 'react-native'



import Home from '../screens/splash/home';
import Search from '../screens/splash/search';
import Signup from '../screens/signup/signup';
import Promotions from '../screens/home/promotions/promotions';
import Splash from '../screens/splash/splash';
import Social from '../screens/home/social/social';
import Starred from '../screens/home/starred/starred';
import Snoozed from '../screens/home/snoozed/snoozed'
import Important from '../screens/home/important/important';
import Sent from '../screens/home/sent/sent';
import Scheduled from '../screens/home/scheduled/scheduled';
import Outbox from '../screens/home/outbox/outbox';
import Drafts from '../screens/home/drafts/drafts';
import Allmail from '../screens/home/allmail/allmail';
import Spam from '../screens/home/spam/spam';
import Lsunread from '../screens/lsunread/lsunread';
import SearchTow from '../screens/lsunread/searchTow';
import MyPager from '../screens/myPager/myPager';
import Skip from '../screens/skip/skip';
import Setemail from '../screens/setemail/setemail';
import Help from '../screens/help/help';
import Bin from '../screens/home/bin/bin';
import Calendar from '../screens/home/calendar/calendar';
import Contacts from '../screens/home/contacts/contacts';
import Settings from '../screens/home/settings/settings';
import HelpAndFeedback from '../screens/home/helpAndFeedback/helpAndFeedback'
import Join from '../screens/join/join';
import Storage from '../screens/storage/storage';
import GoogleOne from '../screens/googleOne/googleOne';
import StorageManager from '../screens/storageManager/storageManager';





const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()


function MeetStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="signup" component={Signup} />
        </Stack.Navigator>
    );
}
function MailStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        </Stack.Navigator>
    );
}
function TabApp() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: "#000",
                tabBarInactiveTintColor: "gray",
                tabBarLabel: (tabProps) => {
                    const { color, size, focused } = tabProps;
                    const { name } = route;
                    let tabTitle = ""
                    if (name === "MailStackScreen") {
                        tabTitle = "Mail";
                    } else if (name === "MeetStackScreen") {
                        tabTitle = "Meet";
                    }
                    return (
                        <Text
                            style={{
                                color: color,
                                fontSize: 16,
                                fontWeight: "400"
                            }}
                        >{tabTitle}</Text>
                    );

                },
                tabBarIcon: (tabProps) => {
                    const { color, size, focused } = tabProps;
                    const { name } = route;
                    let iconUri = "";
                    if (name === "MailStackScreen") {
                        iconUri = require("../assets/images/erty.png");
                    } else if (name === "MeetStackScreen") {
                        iconUri = require("../assets/images/hghg.png");
                    }
                    return (
                        <Image
                            style={{
                                tintColor: color,
                                width: 30,
                                height: 30
                            }}
                            source={iconUri}
                        />
                    );
                },
            })}
        >
            <Tab.Screen
                name="MailStackScreen"
                component={MailStackScreen}
            />
            <Tab.Screen
                name="MeetStackScreen"
                component={MeetStackScreen}
            />
        </Tab.Navigator>
    );
}

const DrawerRoute = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="home" component={TabApp} />
            <Drawer.Screen name="promotions" component={Promotions} />
            <Drawer.Screen name="socisl" component={Social} />
            <Drawer.Screen name="starred" component={Starred} />
            <Drawer.Screen name="snoozed" component={Snoozed} />
            <Drawer.Screen name="important" component={Important} />
            <Drawer.Screen name="sent" component={Sent} />
            <Drawer.Screen name="scheduled" component={Scheduled} />
            <Drawer.Screen name="outbox" component={Outbox} />
            <Drawer.Screen name="drafts" component={Drafts} />
            <Drawer.Screen name="allmail" component={Allmail} />
            <Drawer.Screen name="spam" component={Spam} />
            <Drawer.Screen name="bin" component={Bin} />
            <Drawer.Screen name="calendar" component={Calendar} />
            <Drawer.Screen name="contacts" component={Contacts} />
            <Drawer.Screen name="settings" component={Settings} />
            <Drawer.Screen name="helpAndFeedback" component={HelpAndFeedback} />



        </Drawer.Navigator>
    );

}


const NavigationComponent = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName='myPager'>
                <Stack.Screen options={{ headerShown: false }} name="home" component={DrawerRoute} />
                <Stack.Screen options={{ headerShown: false }} name="search" component={Search} />
                <Stack.Screen name="splash" component={Splash} />
                <Stack.Screen name="signup" component={Signup} />
                <Stack.Screen options={{ headerShown: false }} name="lsunread" component={Lsunread} />
                <Stack.Screen options={{ headerShown: false }} name="searchTow" component={SearchTow} />
                <Stack.Screen name="myPager" component={MyPager} />
                <Stack.Screen name="skip" component={Skip} />
                <Stack.Screen name="setemail" component={Setemail} />
                <Stack.Screen options={{ headerShown: false }} name="help" component={Help} />
                <Stack.Screen options={{ headerShown: false }} name="join" component={Join} />
                <Stack.Screen options={{ headerShown: false }} name="storage" component={Storage} />
                <Stack.Screen options={{ headerShown: false }} name="googleOne" component={GoogleOne} />
                <Stack.Screen options={{ headerShown: false }} name="storageManager" component={StorageManager} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationComponent;