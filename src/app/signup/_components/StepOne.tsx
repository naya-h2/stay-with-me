const INPUT_LIST = [
  {
    label: '아이디',
    placeholder: '아이디 입력',
  },
  {
    label: '비밀번호',
    placeholder: '비밀번호 입력',
  },
  {
    label: '닉네임',
    placeholder: '닉네임 입력',
  },
];

function StepOne() {
  return (
    <div className="flex flex-col gap-8">
      {INPUT_LIST.map(({ label, placeholder }) => (
        <label key={label} className="font-semibold flex flex-col gap-[14px]">
          {label}
          <input placeholder={placeholder} />
        </label>
      ))}
    </div>
  );
}

export default StepOne;
