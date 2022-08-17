import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native'
import TestFlatList from "./TestFlatList";
import TestImage from "./TestImage";
import Search from "./Search";
import AffichageHistorique from './AffichageHistorique';


const Tab = createMaterialTopTabNavigator();

const SearchComp = (props) => {
    return <Search sh={props.search()} results={props.results} funcCommande={props.funcCommande} />
}


const BarreNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Feed"
                screenOptions={{
                    tabBarActiveTintColor: 'black',
                    tabBarLabelStyle: { fontSize: 20 },
                    tabBarStyle: { backgroundColor: 'powderblue' },

                }}
            >
                <Tab.Screen
                    name="TestFlatList"
                    // component={<TestFlatList showProps={true}{...h} />}
                    component={SearchComp}
                    options={{ tabBarLabel: 'TestFlatList' }}
                />
                {/* <Tab.Screen
                    name="Search"
                    component={Search}
                    options={{ tabBarLabel: 'Menu' }}
                    showProps={true}{...props.search}
                /> */}
                {/* <Tab.Screen
                    name="Historique"
                    component={AffichageHistorique}
                    options={{ tabBarLabel: 'Historique' }}
                /> */}
                {/* <Tab.Screen
                    name="Historique Journalière"
                    component={Profile}
                    options={{ tabBarLabel: 'Historique Journalière' }}
                /> */}
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default BarreNavigation