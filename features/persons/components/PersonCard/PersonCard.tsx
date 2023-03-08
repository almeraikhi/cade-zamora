import { DataLabel } from '@/components/composite/DataLabel';
import { Typography } from '@/components/elements/Typography';
import { getPersonImage } from '@/utils/getPeronImage';
import { editPersonStore } from '../../stores/editPersonStore';
import { Container, ImageSection, InfoSection } from './Elements';
import { Person } from './types';

export const PersonCard = (props: Person) => {
  const setOpenEditModal = editPersonStore.set.openModal;
  const { id, name, age, gender, address, imageUrl } = props;
  return (
    <Container
      onClick={() => {
        setOpenEditModal(id);
      }}
    >
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
