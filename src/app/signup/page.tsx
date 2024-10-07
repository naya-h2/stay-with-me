import StepOne from './_components/StepOne';

function SignupPage() {
  return (
    <div className="pt-16 h-dvh relative">
      <h2 className="font-semibold pt-12 pb-[52px]">기본 정보를 입력해주세요</h2>
      <StepOne />
      <button className="primary-button h-14 text-16 absolute bottom-20">다음</button>
    </div>
  );
}

export default SignupPage;
