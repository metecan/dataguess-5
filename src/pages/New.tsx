import type { FC } from 'react';
import styled from 'styled-components';
import Button from '../components/Button/Button';
import SvgUploadBubble from '../components/Icons/UploadBubble';
import HistoryTable from '../components/HistoryTable/HistoryTable';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Project, addToProjectHistory } from '../stores/project';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../stores';
import { imageConverter } from '../utils/imageConverter';
import { v4 as uuidv4 } from 'uuid';
import SvgPlus from '../components/Icons/Plus';

const StyledNew = styled.div`
  padding: 20px 0px;
`;

const StyledNewProjectArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 240px;
`;

const StyledLabel = styled.span`
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const StyledButtonInside = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const StyledButtonText = styled.span`
  font-size: 20px;
`;

const StyledEditHistoryWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 44px;
`;

const StyledFileInput = styled.input`
  display: none;
`;

const New: FC = () => {
  const navigateTo = useNavigate();

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const itemsHistory = useSelector((state: RootState) => state.project.projectHistory);

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    let selectedFile: Project;

    if (file) {
      imageConverter(file)
        .then(res => {
          selectedFile = {
            id: uuidv4(),
            name: file.name.split('.')[0],
            file: res,
            fileSize: file.size,
            createdAt: new Date().toISOString(),
            affectedFile: res,
            filter: 'none',
          };
        })
        .then(() => {
          dispatch(addToProjectHistory(selectedFile));
          navigateTo(`/editor/${selectedFile.id}`);
        })
        .catch(() => alert('Choose smaller image'));
    }
  };

  return (
    <StyledNew>
      <StyledNewProjectArea>
        <StyledLabel>Create New Project</StyledLabel>
        <Button color="dark" height={86} onClick={() => handleUpload()}>
          <StyledButtonInside>
            <SvgUploadBubble /> <StyledButtonText>Upload</StyledButtonText>
          </StyledButtonInside>
          <SvgPlus />
        </Button>
        <StyledFileInput type="file" accept="image/*" ref={fileInputRef} onChange={e => handleFileChange(e)} />
      </StyledNewProjectArea>
      <StyledEditHistoryWrapper>
        <StyledLabel>Edit History</StyledLabel>
        <HistoryTable items={itemsHistory} />
      </StyledEditHistoryWrapper>
    </StyledNew>
  );
};
export default New;
