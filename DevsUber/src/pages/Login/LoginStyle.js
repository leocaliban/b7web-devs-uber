import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #FFFFFF;
`;

export const Header = styled.SafeAreaView`
  height: 150px;
  background-color: #3574CB;
  justify-content: center;
  
`;

export const HeaderTitle = styled.Text`
  color: #FFFFFF;
  font-size: 27px;
  margin-left: 20px;
`;

export const Menu = styled.View`
  background-color: #3574CB;
  flex-direction: row;
  padding-left: 20px;
  margin-bottom: 20px;
`;

export const MenuItem = styled.TouchableHighlight`
  padding: 20px;
  border-bottom-width: 5px;
  border-bottom-color: ${props => props.active ? '#FFFFFF' : '#3574CB'};
`;

export const MenuItemTitle = styled.Text`
  color: #FFFFFF;
  font-size: 16px;
`;

export const Input = styled.TextInput`
  margin: 10px 20px;
  border-bottom-width: 2px;
  border-bottom-color: #cccccc;
  height: 50px;
  font-size: 16px;
  color: #333333;
`;

export const SubmitButton = styled.TouchableHighlight`
  background-color: #3574CB;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 5px;
  margin: 20px;
  box-shadow: 0 0 2px #999999;
`;

export const SubmitButtonTitle = styled.Text`
  color: #FFFFFF;
  font-size: 18px;
`;