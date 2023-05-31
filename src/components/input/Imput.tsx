export const Input = (props: {
  type: string;
  placeHolder: string;
  name: string;
}) => {
  return (
    <div>
      <label htmlFor={props.name}></label>
      <input
        type={props.type}
        placeholder={props.placeHolder}
        name={props.name}
      />
    </div>
  );
};
