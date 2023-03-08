import React from 'react';
import { useTheme } from '@/theme';
import { Modal } from '../Modal';
import { WarningIcon } from '@/components/icons/WarningIcon';
import {
  ButtonsArea,
  Container,
  GraphicContainer,
  TextContainer,
} from './Elements';
import { Button, Typography } from '@/components/elements';
import { alterConfirmationStore } from './alertConfirmationStore';

export const AlertConfirmationModal = () => {
  const theme = useTheme();
  const { title, message, isOpen, onConfirm } =
    alterConfirmationStore.useStore();
  const setIsOpen = alterConfirmationStore.set.isOpen;

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirmation = async () => {
    await onConfirm();
    handleClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      styles={{
        backdrop: { zIndex: theme.zIndex.backdrop + 10 },
        modal: { zIndex: theme.zIndex.modal + 10, padding: 'initial' },
      }}
    >
      <Container>
        <GraphicContainer>
          <WarningIcon width='250' height='250' color='#FFF' />
        </GraphicContainer>
        <TextContainer>
          <Typography variant='h3'>{title}</Typography>
          <Typography>{message}</Typography>
          <ButtonsArea>
            <Button onClick={handleClose}>Cancel</Button>
            <Button danger onClick={handleConfirmation}>
              Confirm
            </Button>
          </ButtonsArea>
        </TextContainer>
      </Container>
    </Modal>
  );
};
