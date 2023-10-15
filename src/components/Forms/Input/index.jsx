import { forwardRef } from "react";

export default forwardRef(({ error, label, id, ...rest }, ref) => {
  return (
    <div className="">
      <label className="" htmlFor={id}>
        {label}
      </label>
      <input ref={ref} {...rest} />
      {error ? <p className="">{error.message}</p> : null}
    </div>
  );
});