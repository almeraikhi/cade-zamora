import { StepType } from '@reactour/tour';
export const initialSteps: StepType[] = [
  {
    selector: 'any',
    content:
      'Welcome to "Cade-Zamora", a codename for a simple CRUD app to display a list of people with basic data.',
    position: 'center',
    stepInteraction: true,
  },
  {
    selector: '#first-step',
    content:
      'Right here, we can see a list of people. We have created a few for you to play around with.',
    stepInteraction: true,
  },
  {
    selector: '#second-step',
    content:
      'Let us create a new person. Click on the "Create New" button and fill out the form.',
    stepInteraction: true,
  },
];
