import { useTaskContext } from '@/Context/TaskContext';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const TaskList = () => {
  const { tasks, toggleTask, deleteTask } = useTaskContext();
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const filteredTasks =
    filterCategory === 'All'
      ? tasks
      : tasks.filter((task) => task.category === filterCategory);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Tasks :</Text>

      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Filter:</Text>
        <Picker
          selectedValue={filterCategory}
          style={styles.picker}
          onValueChange={(value: string) => setFilterCategory(value)}
        >
          <Picker.Item label="All" value="All" />
          <Picker.Item label="Work" value="Work" />
          <Picker.Item label="Personal" value="Personal" />
          <Picker.Item label="Shopping" value="Shopping" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View
              style={[
                styles.taskItem,
                item.completed && styles.completedTaskItem,
              ]}
            >
              <TouchableOpacity
                style={styles.taskContent}
                onPress={() => toggleTask(item.id)}
              >
                <Text
                  style={[
                    styles.taskTitle,
                    item.completed && styles.completedText,
                  ]}
                >
                  {item.title}
                </Text>
                <Text style={styles.category}>{item.category}</Text>
              </TouchableOpacity>
          
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteTask(item.id)}
              >
                <Text style={styles.deleteButtonText}>🗑</Text>
              </TouchableOpacity>
            </View>
          )}
          
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>No tasks in this category.</Text>
        }
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingTop: 8,
      flex: 1,
    },
    heading: {
      fontSize: 24,
      fontWeight: '700',
      marginBottom: 16,
      color: '#1a1a1a',
    },
    filterContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 10,
      marginBottom: 16,
      borderColor: '#ddd',
      borderWidth: 1,
    },
    filterLabel: {
      fontSize: 16,
      color: '#555',
      marginRight: 8,
    },
    picker: {
      flex: 1,
      height: 36,
    },
    taskItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 16,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 3 },
      elevation: 3,
    },
    completedTaskItem: {
      backgroundColor: '#f0fdf4',
    },
    taskContent: {
      flex: 1,
    },
    taskTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#333',
    },
    completedText: {
      textDecorationLine: 'line-through',
      color: '#999',
    },
    category: {
      fontSize: 13,
      color: '#666',
      marginTop: 4,
    },
    deleteButton: {
      marginLeft: 12,
      backgroundColor: '#ff5252',
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 6,
      justifyContent: 'center',
      alignItems: 'center',
    },
    deleteButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    emptyMessage: {
      textAlign: 'center',
      color: '#aaa',
      fontSize: 16,
      marginTop: 30,
    },
  });
  
export default TaskList;
