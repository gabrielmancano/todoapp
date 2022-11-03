import React, { useState } from 'react';

import { AntDesign } from '@expo/vector-icons';

import {
    Container,
    TodoInputContainer,
    TodoInput,
    TodoAddButton,
} from './styles';

import { Alert, Keyboard } from 'react-native';
import { Todo } from '../List';

export function Input({ handleAddTodo, todos }) {
    const [task, setTask] = useState('');

    const addTodo = () => {
        const todoAlreadyExists = todos.find(
            (todo: Todo) => todo.title === task
        )

        if(todoAlreadyExists) {
            Alert.alert('ERROR', 'Task already registered');
            return;
        }

        if(!task)
            return;

        handleAddTodo(task);
        setTask('');

        Keyboard.dismiss();
    }
    
    return (
        <Container>
            <TodoInputContainer>
                <TodoInput
                    value={task}
                    placeholder='Add new to do'
                    onChangeText={setTask}
                    onSubmitEditing={addTodo}
                />
                <TodoAddButton
                    onPress={addTodo}
                >
                    <AntDesign name="arrowright" size={24} color="#7A7A80" />
                </TodoAddButton>
            </TodoInputContainer>
        </Container>
    )
}