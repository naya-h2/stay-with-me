import Image from 'next/image';
import Link from 'next/link';

const CATEGORY_LIST = ['내 정보 수정', '거주지 관리', '내가 쓴 글', '내가 스크랩한 글', '내가 좋아요한 글'];

function MyPage() {
  return (
    <>
      <h2 className="font-semibold pt-3 text-center">마이페이지</h2>

      <div className="mt-7 mb-10 border-b border-Line-Normal-Normal rounded-lg bg-main-white/75 px-4 py-[18px]">
        <div className="flex gap-4">
          <Image src={`/image/defaultProfile.png`} alt="프로필이미지" width={32} height={32} className="rounded-full object-cover object-center" />
          <p className="text-18 font-medium">
            <span className="font-semibold">나의닉네임</span> 의 스테이
          </p>
        </div>
        <div className="text-14 flex justify-between text-main-gray ml-12">
          <div>
            <p className="text-main-mint font-medium">스테이하우스 3호점</p>
            서울시 마포구 공덕동
          </div>
          <Link href={`/myhome/1`} className="mint_btn">
            바로가기
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {CATEGORY_LIST.map((category) => (
          <div key={category} className="cursor-pointer">
            {category}
          </div>
        ))}
      </div>

      <hr className="mt-12 border-Line-Normal-Normal mb-10" />

      <div className="flex flex-col gap-4 text-main-gray">
        <div className="cursor-pointer">로그아웃</div>
        <div className="cursor-pointer">회원탈퇴</div>
      </div>
    </>
  );
}

export default MyPage;
