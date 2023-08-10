import { FlatList, ImageSourcePropType, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { AllTaskStrings, CompletedStrings } from '../../../res/strings/AppConstant';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks';
import { styles } from './style';
import { addTask, deleteTask, toggleTask, updateTask } from '../../redux/slice/taskSlice';
import { color } from '../../../res/globalStyle/colors';
import { MainHeader, TaskCards } from '../../../res/components';
interface Task {
    id: string;
    title: string;
    checked: boolean;
}
const Completed = () => {
    const selector = useAppSelector((state: { tasks: { tasks: Task[] } }) => state.tasks.tasks);
    const dispatch = useAppDispatch();
    const inputFocus = useRef<TextInput | null>(null);
    const [showCompletedTasks, setShowCompletedTasks] = useState(true);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [showError, setShowError] = useState<boolean>(false);
    const [editShow, setEditShow] = useState<boolean>(false);
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
    const filteredTasks = showCompletedTasks ? selector.filter(task => task.checked) : selector;

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
            <Text style={styles.noDataText}>{CompletedStrings.emptyListDescription}</Text>
        </View>
    );
    return (
        <View style={{ flex: 1, backgroundColor: color.white }}>
            <MainHeader heading={CompletedStrings.header} />
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

export default Completed;
