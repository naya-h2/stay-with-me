'use client';

import { useState } from 'react';

interface Props {
  defaultValue: string;
  tabList: string[];
  style: string;
  onClickTab?: (btnType: string) => void;
}

const SELECTED_STYLE = 'pb-3 border-main-mint border-b-2 font-semibold !text-main-mint';

function Tab({ defaultValue, tabList, style, onClickTab }: Props) {
  const [selected, setSelected] = useState<string>(defaultValue);
  return (
    <div className="relative">
      <div className="flex gap-6 flex-nowrap overflow-x-scroll scroll-hidden">
        {tabList.map((btn) => (
          <button
            key={btn}
            onClick={() => {
              setSelected(btn);
              if (onClickTab) onClickTab(btn);
            }}
            className={`tab_default ${selected === btn ? SELECTED_STYLE : null} ${style}`}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="absolute bottom-[0.5px] w-full border-b border-Line-Normal-Normal" />
    </div>
  );
}

export default Tab;
