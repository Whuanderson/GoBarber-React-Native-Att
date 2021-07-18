import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  isFocused: boolean;
  error: string;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.background_input};
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.background_input};

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isFocused && css`
    border-color: ${({ theme }) => theme.colors.background_button} ;
    `}
  ${(props) =>
    props.error && css`
    border-color: ${({ theme }) => theme.colors.error} ;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.branco_texto};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Error = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular };
  color: ${({ theme }) => theme.colors.error };

  margin: 7px 0;
`;