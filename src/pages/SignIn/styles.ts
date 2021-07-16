import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
 height: 100%;
 align-items: center;
 justify-content: center;
 padding: 0 30px ${Platform.OS === 'android' ? 130 : 40}px;
`;

export const Logo = styled.Image`
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  margin: 64px 0  24px;
`;

export const Footer = styled.View`
position: absolute;
left: 0;
bottom: 0;
right: 0;
border-top-width: 1px;
border-color: ${({ theme }) => theme.colors.background_input};
padding: 16px 0 ${16 + getBottomSpace()}px;

flex-direction: row;
align-items: center;
justify-content: center;

`;