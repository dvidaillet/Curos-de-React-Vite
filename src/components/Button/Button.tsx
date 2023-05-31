export const Button = (props:{valor: string}) => {
  return (
    <input
      type="submit"
      className="btn btn-lg btn-danger btn-block"
      value={props.valor}
    />
  );
};
