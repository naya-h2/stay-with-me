import HomeCard from '@/components/Card/HomeCard';
import Link from 'next/link';
import LogoIcon from '~/icon/logo.svg';
import NotifyIcon from '~/icon/notifications_unread.svg';
import AddIcon from '~/icon/myhome-add_circle.svg';
import PostListLayout from '@/components/Layout/PostListLayout';

const POST_DATA = [
  {
    id: 1,
    category: '나눔',
    title: '의자 나눔',
    content: '안 쓰는 의자 나눔합니다!',
    created_at: '2분 전',
    nickname: '닉네임',
    scrap: 14,
    heart: 15,
    isHeart: true,
    isScrap: false,
  },
  {
    id: 2,
    category: '꿀팁',
    title: '혼밥 리스트',
    content: '근처 혼밥하기 좋은 식당 좌표 공유합니다. 조용한 어쩌구 저쩌구 내용이 겁나 길다요',
    created_at: '4분 전',
    nickname: '닉네임',
    scrap: 14,
    heart: 15,
    isHeart: false,
    isScrap: true,
  },
];

const MYHOME_DATA = [
  { id: 1, nickname: '스테이하우스 3호점', address: '서울시 마포구 동교동' },
  { id: 2, nickname: '스테이하우스 1호점', address: '서울시 마포구 동교동' },
];

export default function HomePage() {
  //스플래시 화면 보여주면서 login 여부 확인
  //미로그인 시, login 화면으로 리다이렉트
  //로그인이면 화면 보여주기

  return (
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
        <PostListLayout type="crew" addLink="/community/crew" postData={POST_DATA} title="최신 모임 글" />
      </main>
    </>
  );
}
