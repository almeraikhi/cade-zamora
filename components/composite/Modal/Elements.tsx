import styled from 'styled-components';

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.backdrop};
`;

export const Paper = styled.div`
  background-color: #fff;
  padding: 25px;
  border-radius: 8px;
  z-index: ${({ theme }) => theme.zIndex.modal};
`;
