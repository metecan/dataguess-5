import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../stores';
import EffectCard, { EffectType } from '../components/EffectCard/EffectCard';
import React from 'react';
import { applyEffect } from '../utils/applyEffect';

interface EditorProps {}

const StyledEditor = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
`;

const StyledImageWrapper = styled.div`
  width: auto;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
`;

const StyledImage = styled.img<{ effect: string }>`
  width: 100%;
  height: 100%;
  object-fit: cover;

  filter: ${({ effect }) => applyEffect(effect)};
`;

const StyledEffectsWrapper = styled.div`
  padding: 24px 48px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  gap: 100px;
`;

const Editor: FC<EditorProps> = () => {
  const editingImageRef = React.useRef<HTMLImageElement>(null);
  const { itemId } = useParams();

  const historyItem = useSelector((state: RootState) => state.project.projectHistory.find(item => item.id === itemId));
  const [selectedFilter, setSelectedFitler] = React.useState(historyItem?.filter || 'none');

  const effects = ['blur', 'brightness', 'contrast', 'grayscale', 'hue', 'invert', 'saturate', 'sepia', 'none'];

  return (
    <StyledEditor>
      <StyledImageWrapper>
        <StyledImage ref={editingImageRef} effect={selectedFilter} src={historyItem?.file} alt={historyItem?.name} />
      </StyledImageWrapper>
      <StyledEffectsWrapper>
        {effects.map(effect => (
          <EffectCard
            key={effect}
            image={historyItem}
            effect={effect as EffectType}
            selected={selectedFilter === effect}
            setSelectedFilter={setSelectedFitler}
          />
        ))}
      </StyledEffectsWrapper>
    </StyledEditor>
  );
};
export default Editor;
