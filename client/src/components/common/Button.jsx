const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-cyan-500
        hover:bg-cyan-600
        text-white
        px-5
        py-3
        rounded-xl
        transition
        duration-300
        font-semibold
        shadow-2xl
      "
    >
      {text}
    </button>
  );
};

export default Button;
