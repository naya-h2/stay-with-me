'use client';

import BackIcon from '~/icon/arrow_back.svg';

interface Props {
  backlink: string;
  title: string;
}

function TitleHeader({ backlink, title }: Props) {
  return (
    <header className="h-[44px] bg-background fixed_center max-w-[480px] top-0 left-0 z-10 w-full text-16 font-semibold flex justify-center items-center">
      <BackIcon onClick={() => (window.location.href = backlink)} className="absolute left-6 top-[10px] cursor-pointer" />
      {title}
    </header>
  );
}

export default TitleHeader;
