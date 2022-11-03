import styled from 'styled-components/native';
import { ScrollView, TouchableOpacity } from 'react-native';


export const List = styled(ScrollView).attrs({
    contentContainerStyle: {
    },
    showsVerticalScrollIndicator: false,
})` 
    flex: 1;
    
    width: 95%;

`;


export const ListItem = styled.View` 
    align-items: center;
    justify-content: space-between;

    flex-direction: row;

    background-color: #fff;
    height: 50px;

    margin-bottom: 10px;
    padding: 5px;

    border-radius: 5px;

    text-align: center;


`;

export const ListItemText = styled.Text` 
    margin-left: 10px;

    text-decoration: ${todo => todo.done ? 'line-through' : 'none'};
    color: ${todo => todo.done ? '#AEAEB3' : '#000'};

    font-family: Inter_500Medium;
    font-size: 16px;
`;

export const Buttons = styled.View` 
    align-items: center;
    flex-direction: row;
    height: 100%;
`;

export const ListItemButton = styled(TouchableOpacity)` 
    width: 30px;

    align-items: center;
    justify-content: center;

    height: 100%;
`;


export const ListItemTextContainer =styled.View`
    flex-direction: row;
    flex: 1;
    height: 100%;

    align-items: center;
`