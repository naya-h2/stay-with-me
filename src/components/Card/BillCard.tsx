interface Props {
  month: number;
  cost: number;
  fin: number;
  noFin: number;
}

/**
 * @param fin 완납 건 수
 * @param noFin 미납 건 수
 */
function BillCard({ month, cost, fin, noFin }: Props) {
  return (
    <div className="flex justify-between">
      <div>{month}월</div>
      <div>
        <p className="text-end">
          <span className="font-semibold">{cost.toLocaleString('ko-kr')}</span> 원
        </p>
        <div className="text-14 font-semibold text-main-gray flex gap-2 justify-end">
          {fin > 0 && <p className="text-main-mint">{fin}건 완납</p>}
          {noFin > 0 && <p>{noFin} 건 완납</p>}
        </div>
      </div>
    </div>
  );
}

export default BillCard;
