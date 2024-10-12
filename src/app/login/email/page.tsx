'use client';
import { useForm } from 'react-hook-form';

const INPUT_LIST = [
  {
    id: 'email',
    label: '이메일',
    placeholder: '이메일 입력',
    type: 'text',
  },
  {
    id: 'password',
    label: '비밀번호',
    placeholder: '비밀번호 입력',
    type: 'password',
  },
];

function EmailLoginPage() {
  const { register, getValues, handleSubmit } = useForm();

  const handleLoginClick = async () => {
    const { email, password } = getValues();
    const body = {
      username: email,
      password,
    };
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        window.alert(`환영합니다!`);

        localStorage.setItem('f-authToken', res.headers.get('Authorization') ?? '');
        window.location.href = '/';
      } else throw Error('에러');
    } catch {
      window.alert(`로그인에 실패하였습니다.`);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLoginClick)} className="h-full py-[120px]">
      <div className="text-center mb-[142px]">
        <h2>1인가구 맞춤형 주거 구독,</h2>
        <h1 className="text-logo-green">스테이위드미</h1>
      </div>

      <div className="flex flex-col gap-6">
        {INPUT_LIST.map(({ label, placeholder, id, type }) => (
          <label key={id} className="font-semibold flex flex-col gap-[14px]">
            {label}
            <input type={type} placeholder={placeholder} {...register(id)} />
          </label>
        ))}
      </div>

      <button className="primary-button h-[56px] !text-18 mt-16">로그인</button>
    </form>
  );
}

export default EmailLoginPage;
