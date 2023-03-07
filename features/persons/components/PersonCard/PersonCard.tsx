import { DataLabel } from '@/components/composite/DataLabel';
import { Typography } from '@/components/elements/Typography';
import { getPersonImage } from '@/utils/getPeronImage';
import { Container, ImageSection, InfoSection } from './Elements';
import { Person } from './types';

export const PersonCard = (props: Person) => {
  const { id, name, age, gender, address, imageUrl } = props;
  return (
    <Container>
      <ImageSection>{getPersonImage({ name, imageUrl })}</ImageSection>
      <InfoSection>
        <Typography variant='h5'>{name}</Typography>
        <DataLabel label='Age'>{String(age)}</DataLabel>
        <DataLabel label='Gender'>{gender}</DataLabel>
        <DataLabel label='Address'>{address}</DataLabel>
      </InfoSection>
    </Container>
  );
};
