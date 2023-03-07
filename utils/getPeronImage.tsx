import { Typography } from '@/components/elements/Typography';
import { getInitials } from '@/utils/getInitials';
import Image from 'next/image';

export interface GetPersonImageProps {
  name: string;
  imageUrl?: string;
}

/**
 * Function that returns a component that renders the person image if the imageUrl is available.
 * Otherwise, it will generate a placeholder image with the person initials.
 */
export const getPersonImage = ({ name, imageUrl }: GetPersonImageProps) => {
  if (imageUrl) {
    return (
      <Image
        src={imageUrl}
        alt={`${name} picture`}
        fill
        style={{ objectFit: 'cover' }}
      />
    );
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        backgroundColor: '#ea005e',
      }}
    >
      <Typography variant='h3'>{getInitials(name)}</Typography>
    </div>
  );
};
