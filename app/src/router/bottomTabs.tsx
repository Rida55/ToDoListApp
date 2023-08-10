import React from 'react';
import { Image, Text, View } from 'react-native';
import { AllTasks, Completed, UnCompleted } from '../screens/index';
import { AllTask, CompletedIcon, UnCompletedIcon } from '../../res/images';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { scale } from '../../res/components/scale/scale';
import { PLATFORM_IOS } from '../../res/globalStyle/dimentions';
import NavigationStrings from '../../res/strings/NavigationStrings'
import { color } from '../../res/globalStyle/colors';
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="AllTasks"
        screenOptions={{
          unmountOnBlur: true,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: color.white,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: color.white,
          tabBarStyle: {
            height: PLATFORM_IOS ? scale(60) : scale(60),
            backgroundColor: color.white,
            alignItems: 'center',
            alignSelf: 'center',
            borderWidth: 0

          },
        }}>
        <Tab.Screen
          name="AllTasks"
          component={AllTasks}
          options={{
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {focused ? (
                  <View>
                    <Image source={AllTask} tintColor={color.primary} style={{ width: scale(25), height: scale(25), }} />
                    <Text
                      style={{
                        color: color.primary,
                        fontSize: scale(14),
                        textAlign: 'center',
                      }}>
                      {NavigationStrings.AllTaskText}
                    </Text>
                  </View>
                ) : (
                  <View>
                    <Image source={AllTask} style={{ width: scale(25), height: scale(25) }} />
                    <Text
                      style={{
                        color: color.black,
                        fontSize: scale(14),
                        textAlign: 'center',
                      }}>
                      {NavigationStrings.AllTaskText}
                    </Text>
                  </View>
                )}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Completed"
          component={Completed}
          options={{
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {focused ? (
                  <View>
                    <View style={{ alignSelf: 'center' }}>
                      <Image source={CompletedIcon} tintColor={color.primary} style={{ width: scale(25), height: scale(25) }} />

                    </View>
                    <Text
                      style={{
                        color: color.primary,
                        fontSize: scale(14),
                        textAlign: 'center',
                      }}>
                      {NavigationStrings.CompletedText}
                    </Text>
                  </View>
                ) : (
                  <View>
                    <View style={{ alignSelf: 'center' }}>
                      <Image source={CompletedIcon} style={{ width: scale(25), height: scale(25) }} />

                    </View>
                    <Text
                      style={{
                        color: color.black,

                        fontSize: scale(14),
                        textAlign: 'center',
                      }}>
                      {NavigationStrings.CompletedText}
                    </Text>
                  </View>
                )}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="UnCompleted"
          component={UnCompleted}
          options={{
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {focused ? (
                  <View>
                    <View style={{ alignSelf: 'center' }}>
                      <Image source={UnCompletedIcon} tintColor={color.primary} style={{ width: scale(25), height: scale(25) }} />

                    </View>
                    <Text
                      style={{
                        color: color.primary,

                        fontSize: scale(14),
                        textAlign: 'center',
                      }}>
                      {NavigationStrings.UnCompletedText}
                    </Text>
                  </View>
                ) : (
                  <View>
                    <View style={{ alignSelf: 'center' }}>
                      <Image source={UnCompletedIcon} style={{ width: scale(25), height: scale(25) }} />

                    </View>
                    <Text
                      style={{
                        color: color.black,
                        fontSize: scale(14),
                        textAlign: 'center',
                      }}>
                      {NavigationStrings.UnCompletedText}
                    </Text>
                  </View>
                )}
              </View>
            ),
          }}
        />

      </Tab.Navigator>
    </>
  );
}

export default BottomTabs;
