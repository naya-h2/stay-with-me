import { ReactNode } from 'react';
import TitleHeader from '../Header/TitleHeader';

interface Props {
  children: ReactNode;
}

function HeaderLayout({ children }: Props) {
  return (
    <div className="pt-[50px]">
      <TitleHeader />
      {children}
    </div>
  );
}

export default HeaderLayout;
