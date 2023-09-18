import type { FC } from 'react';
import styled from 'styled-components';
import { Project, updateProject } from '../../stores/project';
import { useDispatch } from 'react-redux';
import { applyEffect } from '../../utils/applyEffect';

export type EffectType =
  | 'grayscale'
  | 'sepia'
  | 'blur'
  | 'brightness'
  | 'contrast'
  | 'hue'
  | 'invert'
  | 'saturate'
  | 'none';

interface EffectCardProps {
  image?: Project;
  effect: EffectType;
  selected?: boolean;
  setSelectedFilter: (filter: EffectType) => void;
}

const StyledEffect = styled.div<{ selected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 6px;
  border-radius: 10px;
  border: 2px solid transparent;
  cursor: pointer;

  ${({ selected, theme }) => {
    if (selected) {
      return `
        border: 2px solid ${theme.colors.PRIMARY};
      `;
    }
  }}
`;

const StyledImage = styled.img<{ effect: string }>`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 10px;

  filter: ${({ effect }) => applyEffect(effect)};
`;

const EffectCard: FC<EffectCardProps> = ({ image, effect, selected, setSelectedFilter }) => {
  const dispatch = useDispatch();

  const handleEffect = () => {
    if (image) {
      dispatch(updateProject({ ...image, filter: effect }));
      setSelectedFilter(effect);
    }
  };

  if (!image) {
    return null;
  }

  return (
    <StyledEffect selected={selected} onClick={() => handleEffect()}>
      <StyledImage effect={effect} src={image?.file} alt={effect} />
      <span>{effect}</span>
    </StyledEffect>
  );
};
export default EffectCard;
