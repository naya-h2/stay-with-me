'use client';

import PostCard from '@/components/Card/PostCard';
import TitleHeader from '@/components/Header/TitleHeader';
import { useState } from 'react';

const CREW_DATA = {
  id: 1,
  category: 'sport', //or "hobby" or "study"
  host: 'nickname',
  title: '한강 러닝 크루',
  introduction: 'introduction',
  address: 'address',
  status: 'done', //"ing", "soon"
  clubDetailList: [{}, {}], //바로 아래 response list
};

const DATA = [
  {
    id: 1,
    category: '공지',
    host: '같이달려요',
    title: '8월 마지막 모임 공지!',
    content: '8월 마지막 모임 공지입니다.',
    heart: 15,
    save: 14,
    commentList: [],
  },
  {
    id: 2,
    category: '질문',
    host: '닉네임',
    title: '참여 일정 바꾸려면 어떻게 해야하나요?',
    content: '참여 일정 바꾸고 싶습니다. ',
    heart: 15,
    save: 14,
    commentList: [],
  },
  {
    id: 3,
    category: '자유게시판',
    host: '닉네임',
    title: '러닝화 추천 리스트',
    content: '러닝화 고민이신 분들 주목! 2024년 새로운 러닝화 추천리스트 공유드립니다.',
    heart: 15,
    save: 14,
    commentList: [],
  },
];

const CATEGORY_LIST = ['전체', '공지', '질문', '자유게시판'];

function CrewBoardPage() {
  const [selected, setSelected] = useState('전체');
  const { title } = CREW_DATA;

  return (
    <div className="pt-[50px]">
      <TitleHeader title={title} backlink="/community/crew" />

      <div className="flex gap-2 flex-nowrap overflow-x-scroll scroll-hidden my-5">
        {CATEGORY_LIST.map((btn) => (
          <button
            onClick={() => setSelected(btn)}
            key={btn}
            className={`mint_btn !font-normal !rounded-[32px] !px-4 !py-3 text-nowrap ${selected !== btn ? '!bg-Labels-Secondary' : null}`}
          >
            {btn}
          </button>
        ))}
      </div>

      <div>
        {DATA.map(({ category, content, heart, host, id, save, title }) => (
          <PostCard
            key={id}
            category={category}
            content={content}
            created_at="2분 전"
            heart={heart}
            nickname={host}
            scrap={save}
            title={title}
            id={id}
            cardStyle="!bg-background !px-0 rounded-none border-b border-Line-Normal-Normal"
          />
        ))}
      </div>
    </div>
  );
}

export default CrewBoardPage;
