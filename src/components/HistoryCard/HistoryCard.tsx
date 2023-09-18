import type { FC } from 'react';
import styled from 'styled-components';
import { applyEffect } from '../../utils/applyEffect';

interface HistoryCardProps {
  image: string;
  name: string;
  effect: string;
}

const StyledHistoryCardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledHistoryCardImage = styled.img<{ effect: string }>`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  object-fit: cover;

  filter: ${({ effect }) => applyEffect(effect)};
`;

const StyledHistoryCardName = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const HistoryCard: FC<HistoryCardProps> = ({ image, effect, name }) => {
  return (
    <StyledHistoryCardWrapper>
      <StyledHistoryCardImage src={image} alt={name} effect={effect} />
      <StyledHistoryCardName>{name}</StyledHistoryCardName>
    </StyledHistoryCardWrapper>
  );
};
export default HistoryCard;
