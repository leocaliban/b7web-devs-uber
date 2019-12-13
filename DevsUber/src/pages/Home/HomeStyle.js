import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ccc;
`;

export const IntineraryArea = styled.View`
  position: absolute;
  left: 10px;
  right:10px;
  top:50px;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 0px 0px 4px #999999;
  border-width: 1px;
  border-color: #EEEEEE;
`;

export const IntineraryItem = styled.TouchableHighlight`
  padding: 15px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #EEEEEE;
`;

export const IntineraryLabel = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const IntineraryPoint = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${props => props.color};
`;

export const IntineraryTitle = styled.Text`
  margin-left: 10px;
  color: #999999;
`;

export const IntineraryValue = styled.Text`
  color: #000000;
  font-size: 16px;
`;

export const IntineraryPlaceholder = styled.Text`
  color: #555555;
  font-size: 16px;
  text-align: center;
`;
