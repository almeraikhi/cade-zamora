import { Header } from '@/components/composite/Header';
import { CardsGrid } from '@/features/persons/components/CardsGrid';
import { CreatePersonModal } from '@/features/persons/components/CreatePerson/CreatePersonModal';

const Page = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: 50 }}>
        <CardsGrid />
      </div>
      <CreatePersonModal />
    </>
  );
};

export default Page;
