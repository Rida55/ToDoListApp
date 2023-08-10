import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { CompletedIcon, Edit, Delete, UnCompletedIcon } from '../../images'
import { color } from '../../globalStyle/colors';
import { scale } from '../scale/scale';
import { CustomCardProps } from '../../interfaces/interfaces';

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
                        tintColor={checked ?color.primary:color.blackRgbaBlur}
                        style={{ width: scale(20), height: scale(20) }}
                    />
                </TouchableOpacity>
                <Text style={[styles.title,{ textDecorationLine:checked?'line-through':'none'}]}>{title}</Text>
                <TouchableOpacity style={styles.iconContainer} onPress={onEditPress}>
                <Image source={Edit} tintColor={color.primary} style={{ width: scale(23), height: scale(23), }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={onDeletePress}>
                <Image source={Delete} tintColor={color.primary} style={{ width: scale(23), height: scale(23), }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop:scale(20),
        marginVertical: scale(10),
        alignItems: 'center',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '80%',
        borderRadius: scale(10),
        shadowColor: color.black,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 4,
        paddingHorizontal: scale(10),
    },
    iconContainer: {
        marginRight: scale(14),
    },
    title: {
        flex: 1,
        fontSize: 16,
        color: color.black,
        width:'70%',
        paddingTop:scale(10),
        paddingBottom:scale(10),
        paddingRight:scale(3)
    },
});
export default TaskCards;
