'use client';

import { usePathname } from 'next/navigation';
import BackIcon from '~/icon/arrow_back.svg';

const HEADER_LIST = [
  { title: '납부', backlink: '/' },
  { title: '마이 홈', backlink: '/' },
  { title: '글 상세보기', backlink: '/community/board' },
];

function TitleHeader() {
  const path = usePathname();

  const findTitle = () => {
    if (path.startsWith('/bill')) return 0;
    if (path.startsWith('/myhome')) return 1;
    if (path.startsWith('/post')) return 2;
    return 0;
  };

  return (
    <header className="h-[44px] bg-background fixed_center max-w-[480px] top-0 left-0 z-10 w-full text-16 font-semibold flex justify-center items-center">
      <BackIcon onClick={() => (window.location.href = HEADER_LIST[findTitle()].backlink)} className="absolute left-6 top-[10px] cursor-pointer" />
      {HEADER_LIST[findTitle()].title}
    </header>
  );
}

export default TitleHeader;
