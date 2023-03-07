import styled from 'styled-components';

export const StyledInput = styled.input`
  box-sizing: border-box;
  border: initial;
  font-size: 16px;
  padding: 7px 0px;
  width: 100%;
  :focus {
    outline: none;
  }
`;

export const Label = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const Underline = styled.div`
  height: 2px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.text.secondary};
  :focus {
    border-bottom: 2px solid ${({ theme }) => theme.palette.text.secondary};
  }
`;
