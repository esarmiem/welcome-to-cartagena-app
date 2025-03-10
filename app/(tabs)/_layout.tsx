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
        tabBarStyle: { width: '100%', alignSelf: 'center', justifyContent: 'center', marginTop:0, paddingBottom: 4, marginBottom:0, borderRadius: 0, backgroundColor: Colors[colorScheme ?? 'light'].background },
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
        name="chatbotAI"
        options={{
          title: 'chatbot',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'chatbox-ellipses' : 'chatbox'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
