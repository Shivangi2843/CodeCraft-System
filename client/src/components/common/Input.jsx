const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
        w-full
        p-3
        rounded-xl
        bg-slate-800
        text-white
        border
        border-slate-700
        outline-none
        focus:border-cyan-400
      "
    />
  );
};

export default Input;