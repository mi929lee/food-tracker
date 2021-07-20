const FormItem = ({ title, placeholder, id, handleChange }) => (
  <div className="input-group mb-3">
    <span className="input-group-text">{title}</span>
    <input
      className="form-control"
      type="text"
      placeholder={placeholder}
      id={id}
      onChange={(e) => handleChange(e.target.value)}
    />
  </div>
);

export default FormItem;
