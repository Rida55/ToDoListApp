import { FlatList, ImageSourcePropType, Text, View } from 'react-native';
import React,{useState} from 'react';
import { UnCompletedStrings } from '../../../res/strings/AppConstant';
import MainHeader from '../../../res/components/header/MainHeader';
import { useAppSelector } from '../../redux/Hooks';
import TaskCards from '../../../res/components/taskCards/taskCard';
import { styles } from './style';
interface Task {
    id: string;
    title: string;
    checked: boolean;
  }
const UnCompleted = () => {
    const selector = useAppSelector((state: { tasks: { tasks: Task[] } }) => state.tasks.tasks);
      const [showCompletedTasks, setShowCompletedTasks] = useState(true);
      const filteredTasks = showCompletedTasks ? selector.filter(task => !task.checked) : selector;

      const renderNoData = () => (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>{UnCompletedStrings.emptyListDescription}</Text>
        </View>
      );
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
<MainHeader heading={UnCompletedStrings.header} pageType={UnCompletedStrings.header}/>

<FlatList
        data={filteredTasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskCards
            title={item.title}
            checked={item.checked}
            onEditPress={()=>{}}
            onDeletePress={() => {}}
            onCompleteToggle={() => {}}
            
          
          />
        )}
        ListEmptyComponent={renderNoData}

      />
        </View>
    );
};

export default UnCompleted;
