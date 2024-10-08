'use client';

import HomeIcon from '~/icon/nav-home.svg';
import CommunityIcon from '~/icon/nav-workspaces.svg';
import MypageIcon from '~/icon/nav-account_circle.svg';
import { ReactNode, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const COLOR = {
  default: '#7A7A7A',
  selected: '#00C7BE',
};

type NavType = 'home' | 'mypage' | 'community';

function BottomNav() {
  const path = usePathname();
  const navigate = useRouter();

  const checkCurPath = () => {
    if (path === '/') return 'home';
    if (path.startsWith('/community')) return 'community';
    return 'mypage';
  };

  const [selected, setSelected] = useState<NavType>(checkCurPath());

  const decideStyle = (type: NavType) => {
    return COLOR[selected === type ? 'selected' : 'default'];
  };

  const NAV_LIST: {
    id: NavType;
    label: string;
    icon: ReactNode;
    href: string;
  }[] = [
    { id: 'home', label: '홈', icon: <HomeIcon fill={decideStyle('home')} />, href: '/' },
    {
      id: 'community',
      label: '커뮤니티',
      icon: <CommunityIcon fill="none" stroke={decideStyle('community')} />,
      href: '/community',
    },
    { id: 'mypage', label: '마이페이지', icon: <MypageIcon fill={decideStyle('mypage')} />, href: '/mypage' },
  ];

  return (
    <nav className="h-[104px] px-3 py-6 bg-white absolute bottom-0 left-0 right-0 flex justify-center shadow-bottomnav">
      <div className="flex gap-6">
        {NAV_LIST.map(({ href, icon, label, id }) => (
          <button
            key={label}
            onClick={() => {
              setSelected(id);
              navigate.push(href);
            }}
            className="w-[72px] flex flex-col gap-1 items-center"
          >
            <>{icon}</>
            <p className="text-12 text-main-gray">{label}</p>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default BottomNav;
