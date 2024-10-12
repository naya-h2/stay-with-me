import SendIcon from '~/icon/send.svg';

function BottomChat() {
  return (
    <div className="fixed_center h-[136px] w-full max-w-[480px] z-10 px-3 pt-6 pb-16 bg-main-white bottom-0 flex justify-center shadow-bottomnav">
      <form className="relative w-full">
        <input
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
