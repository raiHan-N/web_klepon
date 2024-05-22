const CusButton = ({
  primary = true,
  sizeFont = "text-lg",
  weightFont = "font-normal",
  children,
}) => {
  return primary ? (
    <button
      className={`bg-primary  w-fit px-4 py-2 ${sizeFont} ${weightFont} text-white border-gray-900 border-2 rounded-lg`}
    >
      {children}
    </button>
  ) : (
    <button
      className={`bg-primary w-fit px-4 py-2 ${sizeFont} ${weightFont} text-white border-gray-900 border-2 rounded-lg`}
    >
      {children}
    </button>
  );
};

export default CusButton;
