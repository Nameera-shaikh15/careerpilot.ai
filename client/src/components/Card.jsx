function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-700 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;