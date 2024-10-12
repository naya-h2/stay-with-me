import TypeIcon from '~/icon/crew-category.svg';
import AddrIcon from '~/icon/crew-explore.svg';
import PersonIcon from '~/icon/crew-group.svg';

interface Props {
  crewId: number;
  crewName: string;
  type: string;
  address: string;
  crewNum: number;
  limit: number;
  isMyCrew?: boolean;
}

function CrewCard({ crewId, crewName, type, address, crewNum, limit, isMyCrew = false }: Props) {
  const INFO_LIST = [
    { id: 'type', icon: <TypeIcon />, data: type },
    { id: 'address', icon: <AddrIcon />, data: address },
    { id: 'mem', icon: <PersonIcon />, data: `${crewNum}/${limit}명` },
  ];

  return (
    <div className="rounded-lg bg-main-white shadow-sm p-4 w-full min-w-[152px]">
      <p className="font-semibold">{crewName}</p>
      <div className="flex flex-col gap-2 mt-4 mb-5">
        {INFO_LIST.map(({ icon, id, data }) => (
          <div className="flex gap-1 text-12 items-center" key={id}>
            {icon}
            {data}
          </div>
        ))}
      </div>
      <button
        onClick={() => (window.location.href = isMyCrew ? `/community/crew/${crewId}` : `/community/crew/${crewId}/join`)}
        className="primary-button h-[30px] rounded-[4px]"
      >
        {isMyCrew ? '바로가기' : '가입'}
      </button>
    </div>
  );
}

export default CrewCard;
