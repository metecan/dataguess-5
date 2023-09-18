import type { FC } from 'react';
import styled from 'styled-components';

interface IconButtonProps {
  children: React.ReactNode;
  scale?: number;
  onClick?: () => void;
}

const StyledIconButton = styled.button<{ scale?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: transparent;

  ${({ scale }) => {
    if (scale) {
      return `
        transform: scale(${scale});
      `;
    }
  }}

  &:hover {
    opacity: 0.5;
  }
`;

const IconButton: FC<IconButtonProps> = ({ children, scale, onClick }) => {
  return (
    <StyledIconButton scale={scale} onClick={onClick}>
      {children}
    </StyledIconButton>
  );
};
export default IconButton;
