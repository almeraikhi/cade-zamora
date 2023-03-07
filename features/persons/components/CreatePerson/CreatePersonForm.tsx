import React from 'react';
import { ImageUpload } from '../ImageUpload/ImageUpload';
import styled from 'styled-components';
import { TextField } from '@/components/composite/TextField/TextField';
import { Button } from '@/components/elements';
import { Form } from '@/components/elements/Form';
import { useFormik } from 'formik';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  width: 550px;
`;

const FieldsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
`;

export const CreatePersonForm = () => {
  const { values, handleChange } = useFormik({
    initialValues: {
      name: '',
      age: 0,
      gender: '',
      address: '',
    },
    onSubmit: () => {},
  });
  return (
    <Form>
      <Container>
        <FieldsContainer>
          <TextField
            label='Name'
            name='name'
            value={values.name}
            onChange={handleChange}
          />
          <TextField
            type='number'
            label='Age'
            name='age'
            value={values.age}
            onChange={handleChange}
          />
          <TextField label='Gender' />
          <TextField label='Address' />
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
