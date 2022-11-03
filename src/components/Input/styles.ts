import styled from 'styled-components/native';
import { TextInput, TouchableOpacity } from 'react-native';

export const Container = styled.View` 
width: 100%;

margin-bottom: 28px;
margin-top: 20px;

justify-content: space-between;
align-items: center;

`;

export const TodoInputContainer = styled.View`
width: 85%;
height: 50px;

border-radius: 10px;
border-color: #7A7A80;
border-width: 1px;

padding: 0 5px;
padding-left: 10px;

background-color: #fff;

flex-direction: row;
`;

export const TodoInput = styled(TextInput)` 
width: 80%;

`;

export const TodoAddButton = styled(TouchableOpacity)` 
height: 100%;
width: 20%;

justify-content: center;
align-items: center;
`;
