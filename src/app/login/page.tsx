'use client';
import MailIcon from '~/icon/mail.svg';
import HrIcon from '~/icon/horizonLine.svg';
import Link from 'next/link';
import { useEffect } from 'react';

function LoginPage() {
  useEffect(() => {
    localStorage.removeItem('f-authToken');
  }, []);
  return (
    <div className="px-7 h-full py-[120px]">
      <div className="text-center mb-[142px]">
        <h2>1인가구 맞춤형 주거 구독,</h2>
        <h1 className="text-logo-green">스테이위드미</h1>
      </div>
      <div className="flex flex-col gap-6">
        <Link href={`/login/email`}>
          <button>
            <div className="flex gap-5 items-center">
              <MailIcon />
              이메일로 로그인
            </div>
          </button>
        </Link>
        <div className="text-Labels-Secondary text-[13px] flex justify-between items-center">
          <HrIcon />
          또는
          <HrIcon />
        </div>

        <Link href={'/signup'}>
          <button className="primary-button">회원가입</button>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
