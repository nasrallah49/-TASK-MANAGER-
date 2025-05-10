import TaskInput from '@/components/TaskInput';
import TaskList from '@/components/TaskList';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>📝 Task Manager</Text>

      <View style={styles.taskWrapper}>
        <TaskInput />
      </View>

      <View style={styles.taskListWrapper}>
        <TaskList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 24,
  },
  taskWrapper: {
    marginBottom: 20,
  },
  taskListWrapper: {
    flex: 1,
  },
});
