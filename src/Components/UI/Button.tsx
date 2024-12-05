type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button className="bg-[#015e3c] transition hover:bg-[#488a72] px-8 py-1 shadow-lg rounded-3xl text-white">
      {children}
    </button>
  );
};

export default Button;
