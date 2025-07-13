import { ReactNode } from 'react';

interface SquareCardProps {
  children: ReactNode;
  className?: string;
}

const SquareCard = ({ children, className = '' }: SquareCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default SquareCard;