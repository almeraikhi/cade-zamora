import styled from 'styled-components';

export const ImagePreviewArea = styled.div`
  width: 185px;
  height: 222px;
  position: relative;
`;

export const UploadPrompt = styled.div`
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
  :hover {
    opacity: 1;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.25);
  }
`;
