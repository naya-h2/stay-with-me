'use client';

import { useState } from 'react';
import ProgressBar from './_components/ProgressBar';
import StepOne from './_components/StepOne';
import StepTwo from './_components/StepTwo';
import { FormProvider, useForm } from 'react-hook-form';

export type StepType = 'account' | 'address';

const TITLE = {
  account: '기본 정보를 입력해주세요',
  address: '거주 정보를 입력해주세요',
};

const BUTTON = {
  account: '다음',
  address: '완료',
};

const BODY = {
  account: <StepOne />,
  address: <StepTwo />,
};

function SignupPage() {
  const [step, setStep] = useState<StepType>('account');
  const context = useForm();
  const { email, password, nickname, address, address_name } = context.watch();
  const isOneAccept = email && password && nickname;
  const isTwoAccept = address && address_name;

  const handleSignup = async () => {
    const { email, password, nickname, address, address_name, address_detail, type } = context.getValues();
    const body = {
      username: email,
      password,
      nickname,
      type,
      zipcode: '',
      streetAdr: address,
      detailAdr: address_detail,
      nameAdr: address_name,
    };
    try {
      const res = await fetch('/proxy/join', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        window.alert(`${nickname}님 가입을 환영해요!`);
        window.location.href = '/login/email';
      } else throw Error();
    } catch {
      window.alert('잠시 후 다시 시도해 주세요.');
    }
  };

  return (
    <FormProvider {...context}>
      <form onSubmit={context.handleSubmit(handleSignup)} className="pt-16 min-h-dvh relative">
        <ProgressBar step={step} />
        <h2 className="font-semibold pt-12 pb-[52px]">{TITLE[step]}</h2>
        {BODY[step]}
        <button
          disabled={step === 'account' ? !isOneAccept : !isTwoAccept}
          type={step === 'account' ? 'button' : 'submit'}
          onClick={() => setStep('address')}
          className="disabled:bg-Line-Normal-Normal primary-button h-14 text-16 mt-[136px] mb-20"
        >
          {BUTTON[step]}
        </button>
      </form>
    </FormProvider>
  );
}

export default SignupPage;
