import { useTour } from '@reactour/tour';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { initialSteps } from '../steps/initial';

export type useInitialTourProps = {
  data: any[] | undefined;
};

/**
 * custom hook to show the initial tour
 * @param param0
 */
export const useInitialTour = ({ data }: useInitialTourProps) => {
  const tour = useTour();
  const [tourShown, setTourShown] = useLocalStorage('tour_initial', false);

  /**
   * Open the tour when the data is loaded
   */
  useEffect(() => {
    if (data && data.length > 0 && !tourShown) {
      setTourShown(true);
      tour.setSteps?.(initialSteps);
      tour.setIsOpen(true);
    }
  }, [data]);
};
