const input = (props: any) => {
  return <input type="text" className={`input ${props.classname}`} {...props} />;
};

export default input;
