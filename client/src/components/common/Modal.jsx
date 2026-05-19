const Modal = ({ title, children }) => {
  return (
    <div
      className="
        fixed
        inset-0
        bg-black/50
        flex
        items-center
        justify-center
      "
    >

      <div
        className="
          bg-slate-900
          p-6
          rounded-2xl
          w-[400px]
        "
      >

        <h2 className="text-white text-2xl mb-4">
          {title}
        </h2>

        {children}

      </div>

    </div>
  );
};

export default Modal;