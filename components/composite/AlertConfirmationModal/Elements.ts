import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
  width: 550px;
`;

export const GraphicContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 100%;
  background-color: ${({ theme }) => theme.palette.warning.main};
`;

export const TextContainer = styled.div`
  text-align: center;
  padding: 44px 25px 30px 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonsArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;
