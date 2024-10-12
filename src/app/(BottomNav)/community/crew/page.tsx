'use client';
import CrewCard from '@/components/Card/CrewCard';
import { useState } from 'react';

const CATEGORY_LIST = ['전체', '운동/스포츠', '취미', '스터디'];

function CrewPage() {
  const [selected, setSelected] = useState('전체');

  return (
    <>
      <h4 className="font-semibold mb-4 mt-5">나의 모임</h4>
      <div className="grid grid-cols-2 gap-2">
        <CrewCard crewName="한강 야간 러닝크루" type="운동/스포츠" address="서울시 마포구" crewNum={6} limit={20} />
        <CrewCard crewName="한강 야간 러닝크루" type="운동/스포츠" address="서울시 마포구" crewNum={6} limit={20} />
        <CrewCard crewName="한강 야간 러닝크루" type="운동/스포츠" address="서울시 마포구" crewNum={6} limit={20} />
      </div>
      <h4 className="font-semibold mb-4 mt-10">근처 모임</h4>
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
      <div className="grid grid-cols-2 gap-2">
        <CrewCard crewName="한강 야간 러닝크루" type="운동/스포츠" address="서울시 마포구" crewNum={6} limit={20} />
        <CrewCard crewName="한강 야간 러닝크루" type="운동/스포츠" address="서울시 마포구" crewNum={6} limit={20} />
        <CrewCard crewName="한강 야간 러닝크루" type="운동/스포츠" address="서울시 마포구" crewNum={6} limit={20} />
      </div>
    </>
  );
}

export default CrewPage;
