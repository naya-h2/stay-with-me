import HeaderLayout from '@/components/Layout/HeaderLayout';
import NotifyIcon from '~/icon/notifications_active.svg';
import UpIcon from '~/icon/arrow_circle_up.svg';
import Tab from '@/components/Tab';
import BillCard from '@/components/Card/BillCard';

const BILL_DATA = [
  { month: 8, cost: 840000, no: 2, yes: 2 },
  { month: 7, cost: 825000, no: 2, yes: 1 },
  { month: 6, cost: 825000, no: 0, yes: 4 },
];

function BillPage({ params: { home_id, month } }: { params: { home_id: string; month: string } }) {
  return (
    <HeaderLayout>
      <div className="max-w-[480px] py-2 px-6 bg-[#E8FAF9] text-main-mint flex gap-3 w-dvw absolute left-0">
        <NotifyIcon />
        <p>
          <span className="font-semibold">매월 2일, 23일</span> 납부 알림
        </p>
      </div>

      <div className="flex flex-col gap-2 mt-[96px] mb-16">
        <p>{month}월 납부 예정 금액</p>
        <p className="flex gap-2 items-center">
          <span className="text-36 font-bold">840,000</span>원
        </p>
        <div className="flex gap-2 text-main-red text-14 items-center">
          <UpIcon />
          전월 대비 15,000원 증가
        </div>
      </div>

      <Tab />
      <p className="text-14 text-main-gray mb-4 mt-7">2024년</p>
      <div>
        {BILL_DATA.map(({ month, cost, no, yes }, idx) => (
          <>
            <BillCard key={month} month={month} cost={cost} fin={yes} noFin={no} />
            {idx < BILL_DATA.length - 1 && <hr className="text-Line-Normal-Normal my-4" />}
          </>
        ))}
      </div>
    </HeaderLayout>
  );
}

export default BillPage;
