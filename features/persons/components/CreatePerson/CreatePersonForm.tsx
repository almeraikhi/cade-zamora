import React, { useEffect } from 'react';
import { ImageUpload } from '../ImageUpload/ImageUpload';
// import { TextField } from '@/components/composite/TextField/TextField';
import { Button } from '@/components/elements';
import { Form } from '@/components/elements/Form';
import { useFormik } from 'formik';
import { trpc } from '@/utils/trpc';
import { Gender } from '@prisma/client';
import { createPersonStore } from '../../stores/createPersonStore';
import {
  ButtonArea,
  Container,
  FieldsContainer,
  ImageContainer,
} from './Elements';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { addInputSchema } from '@/dtos/person';
import { MenuItem } from '@mui/material';
import { SelectField } from '@/components/composite/SelectField/SelectField';
import { TextField } from '@/components/composite/TextField/TextField';

export const CreatePersonForm = () => {
  const setIsOpen = createPersonStore.set.isOpen;
  // initialize the context to be able to invalidate our query
  const context = trpc.useContext();

  // initialize the mutation
  const addPerson = trpc.person.add.useMutation({
    onSuccess: () => {
      // it will re-fetch the data from the server after the mutation is done successfully
      context.person.getAll.invalidate();
      setIsOpen(false); // close the modal
    },
  });
  const { values, errors, handleChange, handleSubmit } = useFormik({
    validationSchema: toFormikValidationSchema(addInputSchema),
    initialValues: {
      name: '',
      age: 0,
      gender: 'unspecified' as Gender,
      address: '',
    },
    onSubmit: (values) => {
      addPerson.mutate(values);
    },
  });

  useEffect(() => {
    console.log('errors', errors);
  }, [errors]);

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
        <Button type='submit'>Add Person</Button>
      </ButtonArea>
    </Form>
  );
};
