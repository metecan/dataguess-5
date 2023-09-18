import type { FC } from 'react';
import styled from 'styled-components';
import HistoryCard from '../HistoryCard/HistoryCard';
import { Project } from '../../stores/project';
import { byteConverter } from '../../utils/byteConverter';
import { dateConverter } from '../../utils/dateConverter';
import { Link } from 'react-router-dom';

interface HistoryTableProps {
  items: Project[];
}

const StyledTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 44px;
`;

const StyledTableHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const StyledTableHeadTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  text-align: left;
  opacity: 0.5;

  &:nth-child(1) {
    width: 50%;
  }
`;

const StyledTableBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  overflow-y: auto;
  max-height: 650px;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TableRow = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.BLACK};

  &:hover {
    opacity: 0.8;
  }
`;

const StyledTableBodyItem = styled.div`
  font-size: 16px;
  font-weight: 400;

  &:nth-child(1) {
    width: 50%;
  }
`;

const HistoryTable: FC<HistoryTableProps> = ({ items }) => {
  if (items.length === 0) return <i>No history</i>;

  const allItems = [...items];
  const reversed = allItems.reverse();

  return (
    <StyledTableWrapper>
      <StyledTableHead>
        <StyledTableHeadTitle>Name</StyledTableHeadTitle>
        <StyledTableHeadTitle>Size</StyledTableHeadTitle>
        <StyledTableHeadTitle>Created At</StyledTableHeadTitle>
      </StyledTableHead>
      <StyledTableBody>
        {reversed.map((item, index) => (
          <TableRow key={index} to={`/editor/${item.id}`}>
            <StyledTableBodyItem>
              <HistoryCard image={item.file} name={item.id} effect={item.filter} />
            </StyledTableBodyItem>
            <StyledTableBodyItem>{byteConverter(item.fileSize)}</StyledTableBodyItem>
            <StyledTableBodyItem>{dateConverter(item.createdAt)}</StyledTableBodyItem>
          </TableRow>
        ))}
      </StyledTableBody>
    </StyledTableWrapper>
  );
};
export default HistoryTable;
