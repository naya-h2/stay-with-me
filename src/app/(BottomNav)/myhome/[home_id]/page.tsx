'use client';

import HeaderLayout from '@/components/Layout/HeaderLayout';
import HomeIcon from '~/icon/myhome.svg';
import InfoIcon from '~/icon/home-info.svg';
import RuleIcon from '~/icon/home-checkbook.svg';
import { useState } from 'react';
import NoticeCard from '@/components/Card/NoticeCard';

const NOTICE_DATA = [
  {
    id: 0,
    title: '재활용품 배출 안내',
    content: '야간 및 주말 시간대 재활용품 배출에 대해 공지드립니다. 문장이 겁나 겁나 길어요 어떡하죠',
    date: '2024.08.28',
  },
  {
    id: 1,
    title: '재활용품 배출 안내',
    content: '야간 및 주말 시간대 재활용품 배출에 대해 공지드립니다. 문장이 겁나 겁나 길어요 어떡하죠',
    date: '2024.08.28',
  },
  {
    id: 2,
    title: '재활용품 배출 안내',
    content: '야간 및 주말 시간대 재활용품 배출에 대해 공지드립니다. 문장이 겁나 겁나 길어요 어떡하죠',
    date: '2024.08.28',
  },
];

function MyhomePage() {
  const [selected, setSelected] = useState('공지');

  const TAB_LIST = [
    { label: '공지', icon: <InfoIcon fill={selected === '공지' ? '#FFFFFF' : '##00c7be'} /> },
    { label: '생활 규칙', icon: <RuleIcon fill={selected === '생활 규칙' ? '#FFFFFF' : '##00c7be'} /> },
  ];

  return (
    <HeaderLayout>
      <div className="mt-14 flex justify-center">
        <HomeIcon />
      </div>

      <div className="mt-8 mb-5">
        <h2 className="font-semibold">스테이하우스 3호점</h2>
        <p className="text-14 mt-1">서울시 마포구 공덕동</p>
      </div>

      <div className="flex gap-2 flex-nowrap overflow-x-scroll scroll-hidden">
        {TAB_LIST.map(({ icon, label }) => (
          <div
            key={label}
            onClick={() => setSelected(label)}
            className={`bg-background-secondary text-main-gray rounded-[40px] flex gap-1 text-14 items-center px-4 py-2 text-nowrap ${
              selected === label ? 'text-main-white bg-main-mint font-medium' : null
            }`}
          >
            <>{icon}</>
            {label}
          </div>
        ))}
      </div>

      <div className="mt-4">
        {NOTICE_DATA.map(({ id, title, content, date }) => (
          <NoticeCard key={id} title={title} content={content} date={date} />
        ))}
      </div>
    </HeaderLayout>
  );
}

export default MyhomePage;
