import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { Feather } from '@expo/vector-icons'; 
// You might need to install and import icons from a suitable library
import { CompletedIcon, Edit, Delete, UnCompletedIcon } from '../../images'
import { color } from '../../globalStyle/colors';
import { scale } from '../scale/scale';

interface CustomCardProps {
    title: string;
    checked: boolean;
    onEditPress: () => void;
    onDeletePress: () => void;
    onCompleteToggle: () => void; // New prop
}

const TaskCards: React.FC<CustomCardProps> = ({
    title,
    checked,
    onEditPress,
    onDeletePress,
    onCompleteToggle
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={onCompleteToggle}>
                    <Image
                        source={checked ? CompletedIcon : UnCompletedIcon}
                        tintColor={color.primary}
                        style={{ width: scale(25), height: scale(25) }}
                    />
                </TouchableOpacity>
       
                <Text style={[styles.title,{ textDecorationLine:checked?'line-through':'none'}]}>{title}</Text>
                <TouchableOpacity style={styles.iconContainer} onPress={onEditPress}>
                    <Image source={Edit} tintColor={color.primary} style={{ width: scale(25), height: scale(25), }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={onDeletePress}>
                    <Image source={Delete} tintColor={color.primary} style={{ width: scale(25), height: scale(25), }} />

                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        alignItems: 'center',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '80%',
        height: 40,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 4,
        paddingHorizontal: 10,
    },
    iconContainer: {
        marginRight: 10,
    },
    title: {
        flex: 1,
        fontSize: 16,
        color: 'black',
    },
});

export default TaskCards;
