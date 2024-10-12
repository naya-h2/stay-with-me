import Link from 'next/link';
import PostCard from '../Card/PostCard';

interface Props {
  title: string;
  addLink: string;
  type: 'board' | 'crew';
  postData: any;
}

function PostListLayout({ title, addLink, type, postData }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2 className="text-18 font-semibold">{title}</h2>
        <Link href={addLink} className="text-Labels-Secondary text-12">
          더보기
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        {postData.map(({ id, category, content, created_at, heart, isHeart, isScrap, nickname, scrap, title }) => (
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
            crew={type === 'crew' ? '크루명' : undefined}
          />
        ))}
      </div>
    </div>
  );
}

export default PostListLayout;
