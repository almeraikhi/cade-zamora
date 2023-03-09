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
import { getBaseUrl } from '@/utils/getBaseUrl';

export const CreatePersonForm = () => {
  const [hasErrors, setHasErrors] = useState(false);
  const [toBeUploadedImage, setToBeUploadedImage] = useState<File | null>(null);

  const setIsOpen = createPersonStore.set.isOpen;
  const isOpen = createPersonStore.use.isOpen();
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
  const { values, setValues, errors, handleChange, handleSubmit, resetForm } =
    useFormik({
      validationSchema: toFormikValidationSchema(addInputSchema),
      initialValues: {
        name: '',
        age: 0,
        gender: 'unspecified' as Gender,
        address: '',
        imageUrl: '' as string | null,
      },
      onSubmit: async (values) => {
        if (toBeUploadedImage) {
          const formData = new FormData();
          formData.append('image', toBeUploadedImage);
          const { data } = await axios.post<{ path: string }>(
            `${getBaseUrl()}/api/upload`,
            formData
          );
          imageUploadStore.set.image(null);

          values.imageUrl = data.path;
        } else {
          values.imageUrl = null;
        }

        addPerson.mutate(values);
      },
    });

  const handleImagePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length === 0) return;
    const file = event.target.files?.[0];
    if (!file) return;
    const fileLoaded = URL.createObjectURL(file);
    setToBeUploadedImage(file);
    setValues({ ...values, imageUrl: fileLoaded });
  };

  /**
   * When the errors change, update the `hasErrors` state
   */
  useEffect(() => {
    setHasErrors(Object.keys(errors).length > 0);
  }, [errors]);

  /**
   * Initialize form on mount
   */
  useEffect(() => {
    resetForm();
  }, [isOpen]);

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
          <ImageUpload
            name={values.name}
            imageUrl={values.imageUrl}
            color=''
            onInputChange={handleImagePreview}
          />
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
