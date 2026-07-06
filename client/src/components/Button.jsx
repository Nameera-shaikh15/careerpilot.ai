function Button({ text, variant = "primary", onClick }) {
  const baseStyle =
    "px-6 py-3 rounded-xl font-semibold transition duration-300";

  const styles = {
    primary: "bg-cyan-500 text-white hover:bg-cyan-600",
    secondary:
      "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${styles[variant]}`}
    >
      {text}
    </button>
  );
}

export default Button;