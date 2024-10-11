'use client';

import { useRouter } from 'next/navigation';
import ScrapIcon from '~/icon/post-bookmark.svg';
import HeartIcon from '~/icon/post-favorite.svg';

interface Props {
  id: number;
  title: string;
  content: string;
  category: string;
  created_at: string;
  nickname: string;
  scrap: number;
  heart: number;
  crew?: string;
  isHeart?: boolean;
  isScrap?: boolean;
  cardStyle?: string;
  contentStyle?: string;
}

/**
 * 글 목록 카드 컴포넌트
 * @param nickname 작성한 사람 닉네임
 * @param crew 크루명 (모임 게시판 글이라면)
 * @param heart 게시글 하트 개수
 * @param isHeart 현재 로그인 유저가 하트를 누른 게시글인지
 */
function PostCard({
  title,
  id,
  content,
  category,
  created_at,
  nickname,
  contentStyle,
  scrap,
  heart,
  isHeart = false,
  isScrap = false,
  crew,
  cardStyle,
}: Props) {
  const navigate = useRouter();

  return (
    <div
      onClick={() => navigate.push(`/community/post/${id}`)}
      className={`cursor-pointer w-full flex flex-col gap-3 bg-main-white p-4 rounded-lg ${cardStyle}`}
    >
      {crew && <p className="text-14 font-semibold text-main-mint">{crew}</p>}

      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className={`min-w-full text-nowrap truncate text-14 ${contentStyle}`}>{content}</p>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2 text-Labels-Secondary text-14">
          <p className="w-fit font-medium text-main-mint">{category}</p>
          <p className="w-fit px-2 border-x border-Labels-Secondary">{created_at}</p>
          <p className="w-fit">{nickname}</p>
        </div>

        <div className="flex gap-[6px] text-12 h-4">
          <div className="flex items-center text-main-gray">
            <ScrapIcon fill={isScrap ? '#7A7A7A' : 'none'} />
            {scrap}
          </div>
          <div className="flex items-center text-main-red">
            <HeartIcon fill={isHeart ? '#FF3B30' : 'none'} />
            {heart}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
