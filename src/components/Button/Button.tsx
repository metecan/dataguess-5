import type { FC } from 'react';
import styled from 'styled-components';

type ColorType = 'light' | 'dark' | 'primary';

interface ButtonProps {
  children: React.ReactNode;
  color: ColorType;
  height?: number;
  onClick?: () => void;
}

const StyledButton = styled.button<{ color: ColorType; height?: number }>`
  height: ${({ height }) => (height ? `${height}px` : '40px')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  border: none;
  cursor: pointer;
  padding: ${({ height }) => (height ? `${height / 5}px ${height / 4}px` : '8px 10px')};
  border-radius: 10px;

  ${({ color, theme }) => {
    switch (color) {
      case 'light':
        return `
          color: ${theme.colors.BLACK};
          background-color: ${theme.colors.WHITE};
        `;
      case 'dark':
        return `
          color: ${theme.colors.WHITE};
          background-color: ${theme.colors.BLACK};
        `;
      case 'primary':
        return `
          color: ${theme.colors.WHITE};
          background-color: ${theme.colors.PRIMARY};
        `;
    }
  }}

  &:hover {
    opacity: 0.8;
  }
`;

const Button: FC<ButtonProps> = ({ children, color, height, onClick }) => {
  return (
    <StyledButton onClick={onClick} color={color} height={height}>
      {children}
    </StyledButton>
  );
};
export default Button;
