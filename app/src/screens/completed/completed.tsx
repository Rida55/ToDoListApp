import { FlatList, ImageSourcePropType, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CompletedStrings } from '../../../res/strings/AppConstant';
import MainHeader from '../../../res/components/header/MainHeader';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks';
import TaskCards from '../../../res/components/taskCards/taskCard';
import { styles } from './style';
interface Task {
    id: string;
    title: string;
    checked: boolean;
}
const Completed = () => {
    const selector = useAppSelector((state: { tasks: { tasks: Task[] } }) => state.tasks.tasks);
    const dispatch = useAppDispatch();
    const [showCompletedTasks, setShowCompletedTasks] = useState(true);
    const filteredTasks = showCompletedTasks ? selector.filter(task => task.checked) : selector;
    const renderNoData = () => (
        <View style={styles.noDataContainer}>
            <Text style={styles.noDataText}>{CompletedStrings.emptyListDescription}</Text>
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <MainHeader heading={CompletedStrings.header} pageType={CompletedStrings.header} />
            <FlatList
                data={filteredTasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TaskCards
                        title={item.title}
                        checked={item.checked}
                        onEditPress={() => { }}
                        onDeletePress={() => { }}
                        onCompleteToggle={() => { }}


                    />
                )}
                ListEmptyComponent={renderNoData}

            />
        </View>
    );
};

export default Completed;
