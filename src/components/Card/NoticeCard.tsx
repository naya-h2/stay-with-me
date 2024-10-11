interface Props {
  title: string;
  content: string;
  date: string;
}

function NoticeCard({ title, content, date }: Props) {
  return (
    <div className="flex flex-col gap-[6px] py-4 border-b border-Line-Normal-Normal">
      <div className="flex justify-between">
        <span className="font-semibold">{title}</span>
        <span className="text-12 text-Labels-Secondary">{date}</span>
      </div>
      <p className="truncate max-w-[480px] text-14">{content}</p>
    </div>
  );
}

export default NoticeCard;
