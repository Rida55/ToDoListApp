export interface CustomCardProps {
    title: string;
    checked: boolean;
    onEditPress: () => void;
    onDeletePress: () => void;
    onCompleteToggle: () => void;
}
export interface headerProps {
    heading: string;
  }
  export interface Task {
    id: string;
    title: string;
    checked: boolean;
  }
  
  export interface TaskState {
    tasks: Task[];
  }