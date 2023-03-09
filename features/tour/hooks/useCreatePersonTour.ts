import { useTour } from '@reactour/tour';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { createPersonSteps } from '../steps/createPerson';

export type UseCreatePersonTourProps = {
  isOpen: boolean;
};

/**
 * custom hook to show the create person tour
 * @param param0
 */
export const useCreatePersonTour = ({ isOpen }: UseCreatePersonTourProps) => {
  const tour = useTour();
  const [tourShown, setTourShown] = useLocalStorage(
    'create_person_tour',
    false
  );

  useEffect(() => {
    if (isOpen && !tourShown) {
      setTourShown(true);
      tour.setCurrentStep(0);
      tour.setSteps?.(createPersonSteps);
      tour.setIsOpen(true);
    }
  }, [isOpen]);
};
