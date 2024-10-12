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
    category: '나눔',
    host: '닉네임씨',
    title: '의자 나눔',
    content: '안 쓰는 의자 나눔합니다!',
    heart: 15,
    save: 14,
    commentList: [],
  },
  {
    id: 2,
    category: '질문',
    host: '닉네임씨',
    title: '절약 팁 알려주세요!',
    content: '이번 달 전기요금 고지서를 받고 깜짝 놀랐어요. 지난달보다 3배나 더 나왔네요... ',
    heart: 15,
    save: 14,
    commentList: [],
  },
  {
    id: 3,
    category: '꿀팁',
    host: '닉네임씨',
    title: '혼밥 리스트',
    content: '근처 혼잡하기 좋은 식당 좌표 공유합니다. 조용하고, 1인석 많고, 너무 붐비........',
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
