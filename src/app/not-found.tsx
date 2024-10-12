import Link from 'next/link';

function NotFoundPage() {
  return (
    <div className="min-h-dvh flex flex-col justify-center">
      <Link href={'/'} className="text-center mb-12 cursor-pointer">
        <h2>1인가구 맞춤형 주거 구독,</h2>
        <h1 className="text-logo-green">스테이위드미</h1>
      </Link>
      <div className="text-center">
        존재하지 않는 페이지거나
        <br />
        현재 서비스 준비 중인 페이지입니다.
      </div>
    </div>
  );
}

export default NotFoundPage;
