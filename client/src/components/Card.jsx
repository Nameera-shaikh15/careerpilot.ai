function Card({ children }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition duration-300">
      {children}
    </div>
  );
}

export default Card;