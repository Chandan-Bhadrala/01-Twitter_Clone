const Button = ({ label, className = "" }) => {
  return (
    <button
      className={` text-black cursor-pointer font-bold text-lg py-2 rounded-full mt-4 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
