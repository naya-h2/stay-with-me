'use client';
import BottomChat from '@/components/BottomChat';
import HeaderLayout from '@/components/Layout/HeaderLayout';
import { CATEGORY, CategoryType } from '@/const/category';
import { getData } from '@/util/getData';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import ScrapIcon from '~/icon/post-bookmark.svg';
import HeartIcon from '~/icon/post-favorite.svg';

function PostPage({ params: { id } }: { params: { id: string } }) {
  const [data, setData] = useState<any[] | null>(null);

  const fetchData = async () => {
    const res = await getData(`/api/communication/${id}`);
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <HeaderLayout>
      {data && (
        <>
          <p className="text-14 text-main-mint font-medium mt-8">{CATEGORY[data.category as CategoryType]}</p>
          <div className="flex justify-between">
            <h2 className="font-semibold">{data.title}</h2>

            <div className="flex gap-3 text-main-gray text-12 font-medium">
              <div className="flex items-center gap-[2px]">
                <ScrapIcon />
                {data.save}
              </div>
              <div className="flex items-center text-main-red gap-[2px]">
                <HeartIcon fill="none" />
                {data.heart}
              </div>
            </div>
          </div>

          <div className="text-14 text-main-gray mt-4 mb-5">
            <p>{data.host}</p>
            <p>{dayjs(data.created_At).format('YYYY.MM.DD')}</p>
          </div>

          <p className="whitespace-pre-wrap">{data.content}</p>

          <hr className="h-[10px] bg-Line-Normal-Normal border-none mt-6 mb-5" />
          <p className="text-14 font-medium">댓글 {data.commentList.length}</p>

          <div>
            {data.commentList
              ? data.commentList.map(({ content, created_At, heart, host, id }) => (
                  <div key={id} className="border-b border-Line-Normal-Normal pt-3 pb-4 text-main-gray text-[13px] flex flex-col gap-1">
                    <p className="font-medium">{host}</p>
                    <p className="text-[#000000] text-14">{content}</p>
                    <p>{dayjs(created_At).format('YYYY.MM.DD')}</p>
                    <p className="flex gap-[6px] items-center">
                      <HeartIcon stroke="#7A7A7A" fill="none" />
                      {heart}
                    </p>
                  </div>
                ))
              : '댓글이 존재하지 않습니다.'}
          </div>
        </>
      )}
      <BottomChat postId={id} />
      <div className="mt-[136px]" />
    </HeaderLayout>
  );
}

export default PostPage;
