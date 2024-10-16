'use client';

import { useForm } from 'react-hook-form';
import SendIcon from '~/icon/send.svg';

interface Props {
  postId: string;
}

function BottomChat({ postId }: Props) {
  const { register, handleSubmit, getValues } = useForm();
  const submitCmt = async () => {
    const { chat } = getValues();
    if (!chat) return window.alert('댓글을 입력해 주세요.');
    const body = {
      content: chat,
      postType: 'Communication',
      postId: Number(postId),
    };
    try {
      const res = await fetch('/proxy/api/comment', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('f-authToken') ?? '',
        },
      });
      if (res.ok) {
        window.alert(`댓글 작성이 완료되었습니다.`);
        window.location.reload();
      } else {
        if (400 <= res.status && res.status < 500) {
          window.alert('로그인이 필요한 기능입니다.');
          window.location.href = '/login';
        }
        throw Error('에러');
      }
    } catch {
      window.alert(`댓글 작성에 실패하였습니다.`);
    }
  };
  return (
    <div className="fixed_center h-[136px] w-full max-w-[480px] z-10 px-3 pt-6 pb-16 bg-main-white bottom-0 flex justify-center shadow-bottomnav">
      <form className="relative w-full" onSubmit={handleSubmit(submitCmt)}>
        <input
          {...register('chat')}
          className="pl-6 rounded-[44px] border border-Line-Normal-Normal bg-[#f4f4f5] pr-10 py-4 text-14 placeholder:text-Labels-Secondary"
          placeholder="메세지를 입력해주세요."
        />
        <button>
          <SendIcon className="absolute top-3 right-4 cursor-pointer" />
        </button>
      </form>
    </div>
  );
}

export default BottomChat;
