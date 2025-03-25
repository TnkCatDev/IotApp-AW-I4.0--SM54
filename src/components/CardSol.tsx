import "../css/Cards.css"

interface CardSolProps {
  sol: number
}

function CardSol({ sol }: CardSolProps) {
  return (
    <div className="card sun">
      <h2 className="card-title">Sol</h2>
      <p className="card-description">{sol} %</p>
    </div>
  )
}

export default CardSol

