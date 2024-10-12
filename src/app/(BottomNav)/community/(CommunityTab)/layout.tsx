'use client';

import Tab from '@/components/Tab';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import SearchIcon from '~/icon/search.svg';

const TAB_LIST = ['소통', '모임'];

function CommunityLayout({ children }: { children: ReactNode }) {
  const path = usePathname();
  const onClickTab = (tab: string) => {
    if (tab === '모임') window.location.href = '/community/crew';
    if (tab === '소통') window.location.href = '/community/board';
  };

  return (
    <>
      <header className="relative font-semibold text-20 pt-3 text-center mb-7">
        커뮤니티
        <SearchIcon className="absolute right-0 top-3" />
      </header>

      <Tab defaultValue={path === '/community/board' ? '소통' : '모임'} onClickTab={onClickTab} tabList={TAB_LIST} style="text-16 pb-2 px-2" />
      {children}
    </>
  );
}

export default CommunityLayout;
