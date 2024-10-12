'use client';
import { ReactNode } from 'react';
import TitleHeader from '../Header/TitleHeader';
import { usePathname } from 'next/navigation';

interface Props {
  children: ReactNode;
}

const HEADER_LIST = [
  { title: '납부', backlink: '/' },
  { title: '마이 홈', backlink: '/' },
  { title: '글 상세보기', backlink: '/community/board' },
  { title: '모임 상세보기', backlink: '/community/crew' },
];

function HeaderLayout({ children }: Props) {
  const path = usePathname();

  const findTitle = () => {
    if (path.startsWith('/bill')) return 0;
    if (path.startsWith('/myhome')) return 1;
    if (path.startsWith('/post')) return 2;
    if (path.startsWith('/community/crew')) return 3;
    return 0;
  };

  return (
    <div className="pt-[50px]">
      <TitleHeader backlink={HEADER_LIST[findTitle()].backlink} title={HEADER_LIST[findTitle()].title} />
      {children}
    </div>
  );
}

export default HeaderLayout;
