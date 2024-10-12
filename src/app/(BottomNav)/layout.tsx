import BottomNav from '@/components/BottomNav';
import { ReactNode } from 'react';

function BottomNavLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh pb-[144px]">
      {children}
      <BottomNav />
    </div>
  );
}

export default BottomNavLayout;
