'use client';

import { useState } from 'react';

const TAB_LIST = ['전체', '월 임대료', '전기, 수도, 가스요금', '인터넷', '주차비'];
const SELECTED_STYLE = 'pb-3 border-main-mint border-b-2 font-semibold !text-main-mint';

function Tab() {
  const [selected, setSelected] = useState('전체');
  return (
    <div className="relative">
      <div className="flex gap-6 flex-nowrap overflow-x-scroll scroll-hidden">
        {TAB_LIST.map((btn) => (
          <button key={btn} onClick={() => setSelected(btn)} className={`tab_default ${selected === btn ? SELECTED_STYLE : null}`}>
            {btn}
          </button>
        ))}
      </div>
      <div className="absolute bottom-[0.5px] w-full border-b border-Line-Normal-Normal" />
    </div>
  );
}

export default Tab;
