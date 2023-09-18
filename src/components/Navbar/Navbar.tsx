import type { FC } from 'react';
import styled from 'styled-components';
import SvgLogo from '../Icons/Logo';
import SvgLeftChevron from '../Icons/LeftChevron';

import SvgDownload from '../Icons/Download';
import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../stores';
import { useSelector } from 'react-redux';
import { getIdFromUrl } from '../../utils/getIdFromUrl';
import { SaveImage } from '../../utils/saveImage';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: transparent;

  padding: 22px 0px;
`;

const StyledLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const StyledLogo = styled.div`
  height: 25px;
  width: 25px;
`;

const StyledGoBack = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledProjectTitle = styled.h1`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
`;

const StyledRightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Navbar: FC = () => {
  const navigateTo = useNavigate();

  const itemId = getIdFromUrl();

  const handleBack = () => {
    navigateTo('/');
  };

  const historyItem = useSelector((state: RootState) => state.project.projectHistory.find(item => item.id === itemId));

  const handleExport = () => {
    if (historyItem) SaveImage(historyItem.id, historyItem.file, historyItem.filter);
  };

  return (
    <StyledNavbar>
      <StyledLeftSide>
        <StyledLogo>
          <SvgLogo />
        </StyledLogo>
        {itemId && (
          <StyledGoBack>
            <IconButton scale={1.4} onClick={() => handleBack()}>
              <SvgLeftChevron />
            </IconButton>
            <StyledProjectTitle>{historyItem?.id?.split('-')[0]}</StyledProjectTitle>
          </StyledGoBack>
        )}
      </StyledLeftSide>
      {itemId && (
        <StyledRightSide>
          <Button onClick={() => handleExport()} color="dark">
            <SvgDownload /> Export
          </Button>
        </StyledRightSide>
      )}
    </StyledNavbar>
  );
};
export default Navbar;
