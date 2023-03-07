import styled from 'styled-components';

const H1 = styled.div`
  font-weight: 400;
  font-size: 96px;
  line-height: 116px;
`;

const H2 = styled.div`
  font-weight: 400;
  font-size: 60px;
  line-height: 73px;
`;
const H3 = styled.div`
  font-weight: 400;
  font-size: 48px;
  line-height: 58px;
`;
const H4 = styled.div`
  font-weight: 400;
  font-size: 34px;
  line-height: 41px;
`;
const H5 = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;
const H6 = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

const DefaultText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

const Body1 = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
`;

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'default' | 'body1';
  children: React.ReactNode;
}

export const Typography = ({ variant, children }: TypographyProps) => {
  switch (variant) {
    case 'h1':
      return <H1>{children}</H1>;
    case 'h2':
      return <H2>{children}</H2>;
    case 'h3':
      return <H3>{children}</H3>;
    case 'h4':
      return <H4>{children}</H4>;
    case 'h5':
      return <H5>{children}</H5>;
    case 'h6':
      return <H6>{children}</H6>;
    case 'body1':
      return <Body1>{children}</Body1>;
    default:
      return <DefaultText>{children}</DefaultText>;
  }
};
