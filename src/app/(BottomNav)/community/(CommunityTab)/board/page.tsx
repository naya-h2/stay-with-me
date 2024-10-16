'use client';

import PostCard from '@/components/Card/PostCard';
import { CATEGORY, CategoryType, PostType } from '@/const/category';
import { getData } from '@/util/getData';
import { useEffect, useState } from 'react';
const CATEGORY_LIST = ['전체', '질문', '꿀팁', '나눔', '자유게시판'];

function BoardPage() {
  const [selected, setSelected] = useState('전체');
  const [data, setData] = useState<PostType[] | null>(null);

  const fetchData = async () => {
    const res = await getData(`/api/communication`);
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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
        {data
          ? data.map(({ category, content, heart, host, id, save, title }) => (
              <PostCard
                key={id}
                category={CATEGORY[category as CategoryType]}
                content={content}
                created_at="2분 전"
                heart={heart}
                nickname={host}
                scrap={save}
                title={title}
                id={id}
                cardStyle="!bg-background !px-0 rounded-none border-b border-Line-Normal-Normal"
              />
            ))
          : '게시글이 존재하지 않습니다.'}
      </div>
    </>
  );
}

export default BoardPage;
