import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View` 
    flex: 1;

    justify-content: center;
    align-items: center;

    background-color: #F4F5F6;
`;


export const Header = styled.View` 
    padding-left: 20px;
    width: 100%;
    height: 50px;

    justify-content: space-between;
    align-items: center;

    flex-direction: row;
`;

export const Title = styled.Text` 
    font-size: 22px;
    font-family: Anton_400Regular;
`;


export const Icons = styled.View`
    flex-direction: row;
    height: 100%;

    align-items: center;
    justify-content: space-around;

    margin-right: 10px;

`

export const Button = styled(TouchableOpacity)`
    width: 30px;
`;