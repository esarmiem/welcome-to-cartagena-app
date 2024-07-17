import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: { width: '90%', alignSelf: 'center', justifyContent: 'center', marginTop: 5, paddingBottom: 5, marginBottom: 5, borderRadius: 20, backgroundColor: Colors[colorScheme ?? 'light'].background },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-sharp'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Tiendas',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'bag-handle' : 'bag'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Chatbot"
        options={{
          title: 'Chatbot',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'chatbubble-ellipses' : 'chatbubble'} color={color} />
          ),
        }}
      />
            <Tabs.Screen
        name="Chatbot2"
        options={{
          title: 'Chatbot2',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'chatbox-ellipses' : 'chatbox'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
