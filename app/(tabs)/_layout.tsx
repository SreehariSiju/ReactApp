import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false
      }}>
        <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          // Use a home
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: 'Order',
          // Use a shopping cart icon for orders
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="shopping-cart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="importdata"
        options={{
          title: 'Import',
          // Use file-download for import actions
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="file-download" color={color} />,
        }}
      />
      <Tabs.Screen
        name="exportdata"
        options={{
          title: 'Export',
          // Use file-upload for export actions
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="file-upload" color={color} />,
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: 'Reports',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="bar-chart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="settings" color={color} />,
        }}
      />
    </Tabs>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // Ensures clean background behind tabs
  },
});