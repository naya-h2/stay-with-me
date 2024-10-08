'use client';

import Link from 'next/link';
import HomeIcon from '~/icon/myhome-home_work.svg';
import InfoIcon from '~/icon/myhome-info.svg';
import NotifyIcon from '~/icon/myhome-campaign.svg';
import BillIcon from '~/icon/myhome-credit_card.svg';
import EditIcon from '~/icon/myhome-edit.svg';
import { Fragment } from 'react';

interface Props {
  id: number;
  nickname: string;
  address: string;
}

/**
 * 메인 페이지 마이홈 리스트에 사용되는 카드 컴포넌트
 */
function HomeCard({ id, nickname, address }: Props) {
  const BTN_LIST = [
    { label: '마이 홈', icon: <InfoIcon />, href: `/myhome/${id}` },
    { label: '민원', icon: <NotifyIcon />, href: `/404` },
    { label: '납부', icon: <BillIcon />, href: `/bill/${id}` },
  ];

  return (
    <div className="relative w-[288px] h-[200px] flex flex-col justify-between flex-shrink rounded-[16px] border border-Line-Normal-Normal bg-main-white/75 pt-5 pl-4 pb-4">
      <div className="w-full flex gap-4">
        <HomeIcon />
        <div>
          <h2 className="font-semibold">{nickname}</h2>
          <p className="text-14 text-Labels-Secondary">{address}</p>
        </div>
      </div>

      <Link href={'/404'} className="absolute top-5 right-6">
        <EditIcon />
      </Link>

      <div className="flex gap-2 flex-nowrap overflow-x-scroll scroll-hidden">
        {BTN_LIST.map(({ icon, href, label }) => (
          <Fragment key={label}>
            <Link href={href} className="bg-background rounded-[40px] flex gap-[6px] text-16 font-medium items-center px-4 py-2 text-nowrap">
              <>{icon}</>
              {label}
            </Link>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default HomeCard;
