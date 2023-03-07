import React from 'react';
import styled from 'styled-components';
import { Typography } from '@/components/elements/Typography';
import { DataLabel } from '@/components/composite/DataLabel';
import { getInitials } from '@/utils/getInitials';
import Image from 'next/image';

export const Container = styled.div`
  width: 540px;
  height: 230px;
  background-color: #fff; // TODO: use theme
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ImageSection = styled.div`
  min-width: 170px;
  height: 100%;
  background-color: red;
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

export type Person = {
  id: string;
  name: string;
  age: number;
  gender: string;
  address: string;
  imageUrl?: string;
};

export const GetPersonImage = ({ name, imageUrl }: Person) => {
  if (imageUrl) {
    return (
      <Image
        src={imageUrl}
        alt={`${name} picture`}
        fill
        style={{ objectFit: 'cover' }}
      />
    );
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
      }}
    >
      <Typography variant='h3'>{getInitials(name)}</Typography>
    </div>
  );
};

export const PersonCard = (props: Person) => {
  const { id, name, age, gender, address } = props;
  return (
    <Container>
      <ImageSection>
        {GetPersonImage(props)}
        {/* TODO: this will either render an image or the initials of the person's name */}
      </ImageSection>
      <InfoSection>
        <Typography variant='h5'>{name}</Typography>
        <DataLabel label='Age'>{String(age)}</DataLabel>
        <DataLabel label='Gender'>{gender}</DataLabel>
        <DataLabel label='Address'>{address}</DataLabel>
      </InfoSection>
    </Container>
  );
};
