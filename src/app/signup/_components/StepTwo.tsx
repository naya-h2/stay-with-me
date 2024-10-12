import { useEffect, useState } from 'react';
import SearchIcon from '~/icon/addr-search.svg';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { useFormContext } from 'react-hook-form';

type BuildingType = '오피스텔' | '빌라, 원룸' | '공공주택';

const BTN_LIST: BuildingType[] = ['오피스텔', '빌라, 원룸', '공공주택'];
const BUILDING_TYPE = {
  오피스텔: 'officetel',
  '빌라, 원룸': 'villa',
  공공주택: 'house',
};

const selectedStyle = '!bg-[#E8FAF9] !border-main-mint !text-main-mint';

function StepTwo() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<BuildingType>('오피스텔');
  const { setValue, register } = useFormContext();

  useEffect(() => {
    setValue('type', BUILDING_TYPE[type]);
  }, [type]);

  return (
    <div>
      <h4 className="font-semibold mb-[14px]">거주형태</h4>
      <div className="grid grid-cols-3 gap-3">
        {BTN_LIST.map((btn) => (
          <button
            key={btn}
            onClick={() => setType(btn)}
            type="button"
            className={`border rounded-[4px] text-14 bg-background-secondary border-Line-Normal-Normal text-main-gray ${type === btn && selectedStyle}`}
          >
            {btn}
          </button>
        ))}
      </div>

      <h4 className="font-semibold mb-[14px] mt-8">주소</h4>
      <div className="flex flex-col gap-4">
        <div className="w-full relative">
          <SearchIcon className="top-3 left-4 absolute" />
          <input
            readOnly
            onClick={() => setIsOpen(true)}
            {...register('address')}
            placeholder="클릭하여 주소 검색"
            className="w-full pl-12 py-3 placeholder:text-Labels-Secondary text-14 border border-main-gray rounded-lg focus:border-main-mint"
          />
        </div>
        {isOpen && (
          <DaumPostcodeEmbed
            animation
            onComplete={(data: any) => {
              setValue('address', data.address);
              setIsOpen(false);
            }}
            autoClose={false}
          />
        )}
        <input {...register('address_detail')} placeholder="상세주소 입력(선택)" />
        <input {...register('address_name')} placeholder="닉네임 설정" />
        <input {...register('type')} hidden />
      </div>
    </div>
  );
}

export default StepTwo;
