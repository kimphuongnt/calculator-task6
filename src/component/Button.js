const Button = ({ onClick, className, children }) => {
    return (
      <button
        onClick={onClick}
        className={`p-4 text-xl font-bold rounded-lg ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;