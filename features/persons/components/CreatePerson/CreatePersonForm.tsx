import React, { useEffect, useState } from 'react';
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
import { imageUploadStore } from '../ImageUpload/imageUploadStore';
import axios from 'axios';

export const CreatePersonForm = () => {
  const [hasErrors, setHasErrors] = useState(false);
  const image = imageUploadStore.use.image();

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
      imageUrl: '' as string | undefined,
    },
    onSubmit: async (values) => {
      if (image) {
        const formData = new FormData();
        formData.append('image', image);
        const { data } = await axios.post<{ path: string }>(
          // TODO: change this to be dynamic
          'http://localhost:3000/api/upload',
          formData
        );

        values.imageUrl = data.path;
      } else {
        values.imageUrl = undefined;
      }

      addPerson.mutate(values);
    },
  });

  /**
   * When the errors change, update the `hasErrors` state
   */
  useEffect(() => {
    setHasErrors(Object.keys(errors).length > 0);
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
          <ImageUpload name={values.name} imageUrl='' color='' />
        </ImageContainer>
      </Container>
      <ButtonArea>
        <Button disabled={hasErrors} type='submit'>
          Add Person
        </Button>
      </ButtonArea>
    </Form>
  );
};
