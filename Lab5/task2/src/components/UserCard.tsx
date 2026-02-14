import { Person } from '../types';
import { ReactNode } from 'react';

interface PersonCardProps {
  personData: Person;
  isOnline?: boolean;
  extraContent: ReactNode;
}

export const PersonCard = ({ personData, isOnline = true, extraContent }: PersonCardProps) => {
  return (
    <div style={{
      opacity: isOnline ? 1 : 0.5,
      border: '2px solid #ddd',
      padding: '15px',
      margin: '10px 0',
      borderRadius: '8px'
    }}>
      <h2>{personData.fullName}</h2>
      <p>{personData.emailAddress} | Возраст: {personData.yearsOld}</p>
      {extraContent}
    </div>
  );
};