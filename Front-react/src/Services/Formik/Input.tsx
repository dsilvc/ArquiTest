import { useField, FieldHookConfig } from "formik";

interface Props {
  label: string;
}

export const Input = (props: Props & FieldHookConfig<string>) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input {...field} placeholder={props.placeholder} type={props.type} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};
