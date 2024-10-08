import HomeCard from '@/components/Card/HomeCard';

export default function HomePage() {
  //스플래시 화면 보여주면서 login 여부 확인
  //미로그인 시, login 화면으로 리다이렉트
  //로그인이면 화면 보여주기

  return <main>{<HomeCard id={1} nickname="스테이하우스 3호점" address="서울시 마포구 동교동" />}</main>;
}
