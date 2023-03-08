import React, { useEffect, useState } from 'react';
import { ImageUpload } from '../ImageUpload/ImageUpload';
import { TextField } from '@/components/composite/TextField/TextField';
import { Button } from '@/components/elements';
import { Form } from '@/components/elements/Form';
import { useFormik } from 'formik';
import { trpc } from '@/utils/trpc';
import { Gender, Person } from '@prisma/client';
import { createPersonStore } from '../../stores/createPersonStore';
import {
  ButtonArea,
  Container,
  FieldsContainer,
  ImageContainer,
} from './Elements';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { addInputSchema } from '@/dtos/person';
import { PersonGetOneOutput } from '@/server/client';
import { editPersonStore } from '../../stores/editPersonStore';
import { useUpdatePerson } from '../../api/updatePerson';
import { useOpenDeleteConfirmationModal } from '@/features/hooks/useOpenDeleteConfirmationModal';
import { SelectField } from '@/components/composite/SelectField/SelectField';
import { MenuItem } from '@mui/material';

export interface EditPersonFormProps {
  initialData: PersonGetOneOutput;
}

export const EditPersonForm = ({ initialData }: EditPersonFormProps) => {
  const isOpen = editPersonStore.use.isOpen(); // we also want to keep track of `isOpen` so that opening the same person again will update the form
  const openConfirmationModal = useOpenDeleteConfirmationModal();
  const updatePerson = useUpdatePerson();
  const [hasErrors, setHasErrors] = useState(false);

  const { values, errors, handleChange, handleSubmit, setValues } = useFormik({
    validationSchema: toFormikValidationSchema(addInputSchema),
    // these will act as placeholder values
    initialValues: {
      name: '',
      age: 0,
      gender: '' as Gender,
      address: '',
    },
    onSubmit: (values) => {
      if (!initialData) return;
      updatePerson.mutate({ id: initialData.id, ...values });
    },
  });

  /**
   * When the errors change, update the `hasErrors` state
   */
  useEffect(() => {
    setHasErrors(Object.keys(errors).length > 0);
  }, [errors]);

  /**
   * When this component mounts, change the values of the form to the initial data
   */
  useEffect(() => {
    if (!initialData) return;
    const { name, age, gender, address } = initialData;
    setValues({ name, age, gender, address });
  }, [initialData, isOpen]);

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <FieldsContainer>
          <TextField
            required
            label='Name'
            name='name'
            value={values.name}
            onChange={handleChange}
            errorMessage={errors.name}
          />
          <TextField
            required
            type='number'
            label='Age'
            name='age'
            value={values.age}
            onChange={handleChange}
            errorMessage={errors.age}
          />
          <SelectField
            label='gender'
            required
            errorMessage={errors.gender}
            name='gender'
            value={values.gender}
            onChange={handleChange}
          >
            <MenuItem value='male'>Male</MenuItem>
            <MenuItem value='female'>Female</MenuItem>
            <MenuItem value='unspecified'>unspecified</MenuItem>
          </SelectField>
          <TextField
            required
            label='Address'
            name='address'
            value={values.address}
            onChange={handleChange}
            errorMessage={errors.address}
          />
        </FieldsContainer>
        <ImageContainer>
          <ImageUpload name={values.name} imageUrl='' />
        </ImageContainer>
      </Container>
      <ButtonArea>
        <Button
          danger
          onClick={() => {
            openConfirmationModal(initialData);
          }}
        >
          Delete
        </Button>
        <Button disabled={hasErrors} type='submit'>
          Apply
        </Button>
      </ButtonArea>
    </Form>
  );
};
