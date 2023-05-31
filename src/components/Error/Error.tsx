export const Errores = (props: { error: string }) => {
  return (
    <div className="bg-danger">
      <h4>{props.error}</h4>
    </div>
  );
};
