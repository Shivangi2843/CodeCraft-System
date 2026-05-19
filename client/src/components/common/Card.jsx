const Card = ({ children }) => {
  return (
    <div
      className="
        bg-slate-900
        p-6
        rounded-2xl
        shadow-lg
        border
        border-slate-800
      "
    >
      {children}
    </div>
  );
};

export default Card;