import { useFormContext } from 'react-hook-form';

const INPUT_LIST = [
  {
    id: 'email',
    label: '이메일',
    placeholder: '이메일 입력',
    type: 'email',
  },
  {
    id: 'password',
    label: '비밀번호',
    placeholder: '비밀번호 입력',
    type: 'password',
  },
  {
    id: 'nickname',
    label: '닉네임',
    placeholder: '닉네임 입력',
    type: 'text',
  },
];

function StepOne() {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col gap-8">
      {INPUT_LIST.map(({ label, placeholder, id, type }) => (
        <label key={id} className="font-semibold flex flex-col gap-[14px]">
          {label}
          <input type={type} placeholder={placeholder} {...register(id)} />
        </label>
      ))}
    </div>
  );
}

export default StepOne;
