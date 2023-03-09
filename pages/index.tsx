import { AlertConfirmationModal } from '@/components/composite/AlertConfirmationModal/AlertConfirmationModal';
import { Header } from '@/components/composite/Header';
import { CardsGrid } from '@/features/persons/components/CardsGrid';
import { CreatePersonModal } from '@/features/persons/components/CreatePerson/CreatePersonModal';
import { EditPersonModal } from '@/features/persons/components/EditPerson/EditPersonModal';
import { useTour } from '@reactour/tour';

const Page = () => {
  const { setIsOpen } = useTour();

  return (
    <>
      <Header />
      <div style={{ paddingTop: 50 }}>
        <CardsGrid />
      </div>
      <CreatePersonModal />
      <EditPersonModal />
      <AlertConfirmationModal />
    </>
  );
};

export default Page;
