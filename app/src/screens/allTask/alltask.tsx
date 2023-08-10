import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState, useRef } from 'react';
import { AllTaskStrings } from '../../../res/strings/AppConstant'
import { styles } from './style';
import { useAppSelector, useAppDispatch } from '../../redux/Hooks';
import { addTask, deleteTask, toggleTask, updateTask } from '../../redux/slice/taskSlice';
import { color } from '../../../res/globalStyle/colors';
import { MainHeader, TaskCards } from '../../../res/components';
import { Task } from '../../../res/interfaces/interfaces';

const AllTasks = () => {

  const selector = useAppSelector((state: { tasks: { tasks: Task[] } }) => state.tasks.tasks);
  const dispatch = useAppDispatch();
  const inputFocus = useRef<TextInput | null>(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [showError, setShowError] = useState<boolean>(false);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      if (selectedTaskId) {
        dispatch(updateTask({ id: selectedTaskId, title: newTaskTitle }));
        setSelectedTaskId(null);
      } else {
        const newTask: Task = {
          id: String(Date.now()),
          title: newTaskTitle,
          checked: false,
        };
        dispatch(addTask(newTask));
      }
      setNewTaskTitle('');
    } else {
      setShowError(true);
    }
  };
  const handleEditPress = (taskId: string, taskTitle: string) => {
    inputFocus.current?.focus();
    setSelectedTaskId(taskId);
    setNewTaskTitle(taskTitle);
  };
  const handleDeletePress = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };

  const handleCompleteToggle = (taskId: string) => {
    dispatch(toggleTask(taskId));
  };
  const renderNoData = () => (
    <View style={styles.noDataContainer}>
      <Text style={styles.noDataText}>{AllTaskStrings.emptyListDescription}</Text>
    </View>
  );
  return (
    <View style={{ flex: 1, backgroundColor: color.white }}>
      <MainHeader heading={AllTaskStrings.header} />
      <FlatList
        data={selector}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskCards
            title={item.title}
            checked={item.checked}
            onEditPress={() => handleEditPress(item.id, item.title)}
            onDeletePress={() => handleDeletePress(item.id)}
            onCompleteToggle={() => handleCompleteToggle(item.id)}
          />
        )}
        ListEmptyComponent={renderNoData}
      />
      <View style={styles.floatingButton}>
        <TextInput
          ref={inputFocus}
          style={styles.textInput}
          placeholder={AllTaskStrings.createTask}
          placeholderTextColor={color.blackRgbaBlur}
          value={newTaskTitle}
          onChangeText={text => {
            setShowError(false);
            setNewTaskTitle(text);
          }}
        />
        <TouchableOpacity
          onPress={handleAddTask}
          disabled={showError}
          style={styles.buttonContainer}>
          <Text style={styles.doneText}>{AllTaskStrings.doneButton}</Text>
        </TouchableOpacity>
      </View>
      {showError && (
        <Text style={styles.errorMessage}>{AllTaskStrings.validationtext}</Text>
      )}
    </View>
  );
};

export default AllTasks;
