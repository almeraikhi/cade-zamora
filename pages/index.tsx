import React from 'react';
import { Inter } from 'next/font/google';
import { CardsGrid } from '@/features/persons/components/CardsGrid';
import styled from 'styled-components';
const inter = Inter({ subsets: ['latin'] });

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Page = () => {
  return (
    <main className={inter.className}>
      <div>header</div>
      <Container>
        <CardsGrid />
      </Container>
    </main>
  );
};

export default Page;
