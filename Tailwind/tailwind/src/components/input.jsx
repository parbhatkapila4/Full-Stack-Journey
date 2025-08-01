export const Input = ({ onClick, type, placeholder }) => {
  return (
    <span
      onClick={onClick}
      className={`rounded-2xl text-2xl px-2 py-2 text-white cursor-pointer bg-green-900`}
    >
      <input type={type} placeholder={placeholder} />
    </span>
  );
};

export default Input;
