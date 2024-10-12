import HeaderLayout from '@/components/Layout/HeaderLayout';
import Image from 'next/image';
import Link from 'next/link';
import TypeIcon from '~/icon/crew-category.svg';
import AddrIcon from '~/icon/crew-explore.svg';
import PersonIcon from '~/icon/crew-group.svg';

function CrewJoinPage() {
  return (
    <HeaderLayout>
      <Image
        src={'/image/crew_example.png'}
        alt="모임 썸네일 이미지"
        width={480}
        height={120}
        className="mt-5 h-[120px] object-center object-cover w-dvw absolute left-0 right-0"
      />
      <div className="flex flex-col gap-6 py-6 border-b border-Line-Normal-Normal mt-[145px]">
        <div className="flex justify-between items-center">
          <h1>한강 야간 러닝크루</h1>
          <span className="bg-[#E8FAF9] rounded-[80px] border border-main-mint text-14 text-main-mint px-4 py-[6px]">모집중</span>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex gap-4">
            <div className="flex gap-1 text-12 items-center">
              <TypeIcon />
              운동/스포츠
            </div>
            <div className="flex gap-1 text-12 items-center">
              <AddrIcon />
              서울시 마포구
            </div>
          </div>
          <div className="flex gap-1 text-12 items-center">
            <PersonIcon />
            6/20명
          </div>
        </div>
      </div>

      <div className="pt-8 mb-[100px]">
        <h2 className="text-18 font-semibold mb-4">소개</h2>
        <p className="text-14">
          한강에서 함께 달려요! 매주 화,목 저녁 8시, 마포 한강공원 집결입니다. 시원한 강바람을 맞으며 스트레스를 날려버리고, 야경과 함께 새로운 추억을
          만들어보세요.
        </p>
      </div>
      <Link href="/404">
        <button className="primary-button fixed bottom-[136px] w-[312px] fixed_center">가입하기</button>
      </Link>
    </HeaderLayout>
  );
}

export default CrewJoinPage;
