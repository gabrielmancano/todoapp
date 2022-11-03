import React from "react";
import { Alert, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import {
    List,
    ListItem,
    ListItemTextContainer,
    ListItemText,
    ListItemButton,
    Buttons
} from './styles';

export interface Todo {
    id: number;
    title: string;
    done: boolean;
}


export function TodoList({ todos, removeTodo, doneTodo }) {

    const handleRemoveTodo = (id: number) => {
        Alert.alert(
            'DELETE ITEM',
            'Are you sure you want to delete this item?',
            [
                {
                    text: 'Cancel',

                },
                {
                    text: 'Delete',
                    onPress: () => removeTodo(id)
                }
            ]
        )
    }

    return (
        <List>
            {
                todos.map((todo: Todo) => (
                    <ListItem key={todo.id}>
                        <ListItemTextContainer>
                            <ListItemButton onPress={() => doneTodo(todo.id)}>
                                {
                                    todo.done ?
                                        <FontAwesome name="check-square-o" size={20} color="#7A7A80" />
                                        :
                                        <FontAwesome name="square-o" size={22} color="#7A7A80" />
                                }
                            </ListItemButton>

                            <ListItemText done={todo.done}>
                                {todo.title}
                            </ListItemText>
                        </ListItemTextContainer>

                            <ListItemButton onPress={() => handleRemoveTodo(todo.id)} >
                                <Feather name="trash-2" size={20} color="#7A7A80" />
                            </ListItemButton>
                    </ListItem>
                ))
            }
        </List>
    )
}