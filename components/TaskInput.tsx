import { useTaskContext } from '@/Context/TaskContext';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const TaskInput = () => {
  const { addTask } = useTaskContext();
  const [newTask, setNewTask] = useState('');
  const [category, setCategory] = useState('Work');

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    addTask(newTask, category);
    setNewTask('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a new task</Text>
      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        placeholder="What's task for the day?"
        placeholderTextColor="#aaa"
        style={styles.input}
      />
      <View style={styles.pickerWrapper}>
        <Text style={styles.label}>Category:</Text>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
          style={styles.pickerWrapper}
          dropdownIconColor="#333"
        >
          <Picker.Item label="Work" value="Work" />
          <Picker.Item label="Personal" value="Personal" />
          <Picker.Item label="Shopping" value="Shopping" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Add Task" onPress={handleAddTask} color="#4CAF50" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 6,
    marginVertical: 16,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 16,
  },
 pickerWrapper: {
    backgroundColor: '#ffffff', 
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    marginBottom: 9, 
    paddingHorizontal: 8, 
    paddingVertical: 4,
    shadowColor: '#000', 
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2, 
  },
  picker: {
    height: 44, 
    color: '#333', 
    fontSize: 16, 
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8, 
    paddingLeft: 4,
  },
  buttonWrapper: {
    borderRadius: 8,
    overflow: 'hidden',
  },

});

export default TaskInput;