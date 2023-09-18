import type { FC } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Editor from './pages/Editor';
import New from './pages/New';
import Navbar from './components/Navbar/Navbar';
import styled from 'styled-components';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 40px 20px 40px;
  position: relative;
`;

const App: FC = () => {
  return (
    <BrowserRouter>
      <StyledLayout>
        <Navbar />
        <Routes>
          <Route path="/" element={<New />} />
          <Route path="editor" element={<Editor />}>
            <Route path=":itemId" element={<Editor />} />
          </Route>
        </Routes>
      </StyledLayout>
    </BrowserRouter>
  );
};
export default App;
