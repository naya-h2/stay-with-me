'use client';
import BottomChat from '@/components/BottomChat';
import HeaderLayout from '@/components/Layout/HeaderLayout';
import { CATEGORY } from '@/const/category';
import { getData } from '@/util/getData';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import ScrapIcon from '~/icon/post-bookmark.svg';
import HeartIcon from '~/icon/post-favorite.svg';

// const DATA = {
//   id: 1,
//   created_At: '2024-10-11T15:26:41.997Z',
//   category: 'question',
//   host: 'nickname',
//   title: '절약 팁 알려주세요!',
//   content:
//     '안녕하세요, 201호 새 입주민입니다. 이번 달 전기요금 고지서를 받고 깜짝 놀랐어요. 지난달보다 3배나 더 나왔네요... \n\n전기 절약을 위한 팁이 있을까요?\n다들 어떻게 관리하시는지 궁금해요.',
//   heart: 0,
//   save: 0,
//   commentList: [
//     {
//       id: 0,
//       created_At: '2024-10-11T15:26:41.997Z',
//       content: '안녕하세요 제가 좀 알려드려요?',
//       host: '집주인',
//       heart: 15,
//     },
//     {
//       id: 1,
//       created_At: '2024-10-11T15:26:41.997Z',
//       content: '안녕하세요',
//       host: '집주인',
//       heart: 15,
//     },
//     {
//       id: 2,
//       created_At: '2024-10-11T15:26:41.997Z',
//       content: '안녕하세요',
//       host: '집주인',
//       heart: 15,
//     },
//     {
//       id: 3,
//       created_At: '2024-10-11T15:26:41.997Z',
//       content: '안녕하세요',
//       host: '집주인',
//       heart: 15,
//     },
//   ],
// };

function PostPage({ params: { id } }: { params: { id: string } }) {
  const [data, setData] = useState(null);
  // const { category, commentList, content, created_At, heart, host, save, title } = getData(`/communication/${id}`);

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
          <p className="text-14 text-main-mint font-medium mt-8">{CATEGORY[data.category]}</p>
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
