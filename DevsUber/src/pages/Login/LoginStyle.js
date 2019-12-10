import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #888888;
`;

export const Header = styled.View`
  height: 150px;
  background-color: #3574CB;
  justify-content: center;
  padding-left: 20px;
`;

export const HeaderTitle = styled.Text`
  color: #FFFFFF;
  font-size: 27px;
`;

export const Menu = styled.View`
  background-color: #3574CB;
  flex-direction: row;
  padding-left: 20px;
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