import { FlatList, ImageSourcePropType, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import { AllTaskStrings, UnCompletedStrings } from '../../../res/strings/AppConstant';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks';
import { styles } from './style';
import { addTask, deleteTask, toggleTask, updateTask } from '../../redux/slice/taskSlice';
import { color } from '../../../res/globalStyle/colors';
import { Task } from '../../../res/interfaces/interfaces';
import { MainHeader, TaskCards } from '../../../res/components';

const UnCompleted = () => {
  const selector = useAppSelector((state: { tasks: { tasks: Task[] } }) => state.tasks.tasks);
  const dispatch = useAppDispatch();
  const inputFocus = useRef<TextInput | null>(null);

  const [showUnCompletedTasks, setShowUNCompletedTasks] = useState(true);
  const filteredTasks = showUnCompletedTasks ? selector.filter(task => !task.checked) : selector;
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [showError, setShowError] = useState<boolean>(false);
  const [editShow, setEditShow] = useState<boolean>(false);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  useEffect(() => {
    if (editShow || (inputFocus.current && inputFocus.current.focus)) {
      inputFocus.current?.focus();
    }
  }, [editShow]);
  const handleCompleteToggle = (taskId: string) => {
    dispatch(toggleTask(taskId));
  };
  const handleDeletePress = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };
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

  const renderNoData = () => (
    <View style={styles.noDataContainer}>
      <Text style={styles.noDataText}>{UnCompletedStrings.emptyListDescription}</Text>
    </View>
  );
  return (
    <View style={{ flex: 1, backgroundColor: color.white }}>
      <MainHeader heading={UnCompletedStrings.header} />

      <FlatList
        data={filteredTasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskCards
            title={item.title}
            checked={item.checked}
            onEditPress={() => {
              setEditShow(true)
              handleEditPress(item.id, item.title)
            }}
            onDeletePress={() => handleDeletePress(item.id)}
            onCompleteToggle={() => handleCompleteToggle(item.id)}
          />
        )}
        ListEmptyComponent={renderNoData}

      />
      {editShow &&
        <>
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
        </>
      }
    </View>
  );
};

export default UnCompleted;
