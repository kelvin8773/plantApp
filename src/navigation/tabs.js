import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {icons, COLORS} from '../constants';
import {Home} from '../screens';

const Tab = createBottomTabNavigator();
const tabOptions = {
  showLabel: false,
  style: {
    height: '10%',
  },
};

const BottomButton = ({icon, color, center}) => (
  <View style={center ? styles.centerButton : {}}>
    <Image
      source={icon}
      resizeMode="contain"
      style={
        center
          ? {tintColor: COLORS.white, width: 23, height: 23}
          : {tintColor: color, width: 25, height: 25}
      }
    />
  </View>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;
          switch (route.name) {
            case 'Home':
              return <BottomButton icon={icons.flash} color={tintColor} />;
            case 'Box':
              return <BottomButton icon={icons.cube} color={tintColor} />;
            case 'Camera':
              return (
                <BottomButton
                  icon={icons.camera}
                  color={tintColor}
                  center={true}
                />
              );
            case 'Search':
              return <BottomButton icon={icons.search} color={tintColor} />;
            case 'Favorite':
              return <BottomButton icon={icons.heart} color={tintColor} />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Box" component={Home} />
      <Tab.Screen name="Camera" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Favorite" component={Home} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  centerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
  },
});

export default Tabs;
