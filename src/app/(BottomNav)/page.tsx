'use client';

import HomeCard from '@/components/Card/HomeCard';
import Link from 'next/link';
import LogoIcon from '~/icon/logo.svg';
import NotifyIcon from '~/icon/notifications_unread.svg';
import AddIcon from '~/icon/myhome-add_circle.svg';
import PostListLayout from '@/components/Layout/PostListLayout';
import { useEffect, useState } from 'react';
const POST_DATA = [
  {
    id: 1,
    category: '나눔',
    title: '의자 나눔',
    content: '안 쓰는 의자 나눔합니다!',
    created_at: '2분 전',
    nickname: '익명의 드래곤',
    scrap: 14,
    heart: 15,
    isHeart: false,
    isScrap: false,
  },
  {
    id: 2,
    category: '꿀팁',
    title: '혼밥 리스트',
    content: '근처 혼밥하기 좋은 식당 좌표 공유합니다. 조용한 식당일수록 좋을 것 같아요 ~!',
    created_at: '4분 전',
    nickname: '닉네임뭐하지',
    scrap: 14,
    heart: 15,
    isHeart: false,
    isScrap: true,
  },
];

const CREW_DATA = [
  {
    id: 1,
    category: '공지',
    title: '8월 마지막 모임 공지!',
    content: '8월 마지막 모임 공지입니다.',
    created_at: '2분 전',
    nickname: '같이달려요',
    scrap: 14,
    heart: 15,
    isHeart: true,
    isScrap: false,
    crew: '한강 러닝크루',
  },
  {
    id: 2,
    category: '자유게시판',
    title: '러닝화 추천 리스트',
    content: '러닝화 고민이신 분들 주목! 2024년 새로운 러닝화 추천리스트 공유드립니다.',
    created_at: '44분 전',
    nickname: '운동킹',
    scrap: 14,
    heart: 15,
    isHeart: false,
    isScrap: true,
    crew: '한강 러닝크루',
  },
];

const MYHOME_DATA = [
  { id: 1, nickname: '스테이하우스 3호점', address: '서울시 마포구 동교동' },
  { id: 2, nickname: '스테이하우스 1호점', address: '서울시 마포구 동교동' },
];

export default function HomePage() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('f-authToken')) {
      setIsLogin(true);
    } else {
      window.location.href = '/login';
    }
  }, []);

  return (
    <>
      {isLogin && (
        <>
          <header className="pt-2 h-11 w-full flex justify-center relative">
            <LogoIcon />
            <Link href={`/mypage`}>
              <NotifyIcon className="absolute top-2 right-0" />
            </Link>
          </header>
          <main className="flex flex-col gap-10 mt-5">
            <div className="flex flex-nowrap gap-4 overflow-x-scroll scroll-hidden">
              {MYHOME_DATA.map(({ id, nickname, address }) => (
                <HomeCard key={id} id={id} nickname={nickname} address={address} />
              ))}
              <div className="myhome_card_box flex justify-center items-center flex-shrink-0">
                <AddIcon />
              </div>
            </div>

            <PostListLayout type="board" addLink="/community/board" postData={POST_DATA} title="최신 소통 글" />
            <PostListLayout type="crew" addLink="/community/crew" postData={CREW_DATA} title="최신 모임 글" />
          </main>
        </>
      )}
    </>
  );
}
