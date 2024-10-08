import HomeCard from '@/components/Card/HomeCard';
import PostCard from '@/components/Card/PostCard';

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

export default function HomePage() {
  //스플래시 화면 보여주면서 login 여부 확인
  //미로그인 시, login 화면으로 리다이렉트
  //로그인이면 화면 보여주기

  return (
    <main>
      <HomeCard id={1} nickname="스테이하우스 3호점" address="서울시 마포구 동교동" />

      <div className="flex flex-col gap-3">
        {POST_DATA.map(({ id, category, content, created_at, heart, isHeart, isScrap, nickname, scrap, title }) => (
          <PostCard
            key={id}
            category={category}
            content={content}
            created_at={created_at}
            heart={heart}
            id={id}
            isHeart={isHeart}
            isScrap={isScrap}
            nickname={nickname}
            scrap={scrap}
            title={title}
          />
        ))}
      </div>
    </main>
  );
}
