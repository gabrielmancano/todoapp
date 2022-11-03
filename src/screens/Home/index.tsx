import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { Todo, TodoList } from '../../components/List';
import { Input } from '../../components/Input';

import {
    Container,
    Header,
    Title,
} from './styles';

export function Home() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [theme, setTheme] = useState('light');

    const handleAddTodo = (todo: string) => {
        const data = {
            id: new Date().getTime(),
            title: todo,
            done: false
        }

        setTodos(oldTodos => [
            ...oldTodos, data
        ]);
    }

    const handleRemoveTodo = (id: number) => {
        setTodos(oldData => oldData.filter(
            task => task.id != id
        ))
    }

    const handleDoneTodo = (id: number) => {
        const updatedTodos = todos.map(todo => ({ ...todo }));
        const todoFound = updatedTodos.find(todo => todo.id === id);

        todoFound.done = !todoFound.done

        setTodos(updatedTodos);
    }

    return (
        <Container>
            <StatusBar backgroundColor='#F4F5F6' barStyle='dark-content' />

            <Header>
                <Title>Task List</Title>

                <MaterialIcons name="event-note" size={24} color="black" style={{ marginRight: 20 }} />
            </Header>

            <Input handleAddTodo={handleAddTodo} todos={todos} />

            <TodoList todos={todos} removeTodo={handleRemoveTodo} doneTodo={handleDoneTodo} />
        </Container>
    )
}