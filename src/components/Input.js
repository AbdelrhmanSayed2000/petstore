const Input = ({
  label,
  type,
  id,
  describeDby,
  placeholder,
  onChange,
  value,
  required,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={id}
        aria-describedby={describeDby}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;
