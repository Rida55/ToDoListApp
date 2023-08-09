import { FlatList, ImageSourcePropType, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState,useRef } from 'react';
import TaskCards from '../../../res/components/taskCards/taskCard';
import MainHeader from '../../../res/components/header/MainHeader';
import {AllTaskStrings} from '../../../res/strings/AppConstant'
import { styles } from './style';
import { useAppSelector ,useAppDispatch} from '../../redux/Hooks';
import { addTask, deleteTask, toggleTask, updateTask } from '../../redux/slice/taskSlice';
import { color } from '../../../res/globalStyle/colors';

interface Task {
    id: string;
    title: string;
    checked: boolean;
  }
const AllTasks = () => {

  const selector = useAppSelector((state: { tasks: { tasks: Task[] } }) => state.tasks.tasks);
  const dispatch = useAppDispatch();
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [showError, setShowError] = useState<boolean>(false);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null); // State for tracking selected task for editing

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
    setSelectedTaskId(taskId);
    setNewTaskTitle(taskTitle);
  };
      const handleDeletePress = (taskId: string) => {
        console.log('Delete press');
        dispatch(deleteTask(taskId));
      };
    
      const handleCompleteToggle = (taskId: string) => {
        console.log('Complete toggle');
        dispatch(toggleTask(taskId));
      };
     
      const renderNoData = () => (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>{AllTaskStrings.emptyListDescription}</Text>
        </View>
      );
    return (
   
        <View style={{ flex: 1, backgroundColor: 'white' }}>
<MainHeader heading={AllTaskStrings.header} pageType={AllTaskStrings.header}/>
    
       
      <FlatList
        data={selector}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskCards
            title={item.title}
            checked={item.checked}
            onEditPress={ ()=>handleEditPress(item.id, item.title)}
            onDeletePress={() => handleDeletePress(item.id)}
            onCompleteToggle={() => handleCompleteToggle(item.id)}
            
          
          />
        )}
        ListEmptyComponent={renderNoData}

      />
        <View style={styles.floatingButton}>
        <TextInput
          style={styles.textInput}
          placeholder={"+ Add a task"}
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
