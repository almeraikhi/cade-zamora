import styled from 'styled-components';

export const Container = styled.div`
  width: 540px;
  height: 230px;
  background-color: #fff; // TODO: use theme
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  gap: 10px;
  :hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  }
`;

export const ImageSection = styled.div`
  min-width: 170px;
  height: 100%;
  background-color: #ea005e;
  position: relative;
`;
export const InfoSection = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
