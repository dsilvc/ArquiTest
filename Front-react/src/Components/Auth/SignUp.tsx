import "../../Assets/styles/auth.css";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Input } from "../../Services/Formik/Input";
import { useAuth } from "../../Context/Auth";
import { useNavigate } from "react-router";
import { EMERGENCIES_LINK } from "../../Navigation/routes";
import { useState } from "react";

// And now we can use these
export const SignupForm = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [error, setError] = useState(false);
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Email inválico")
          .required("Campo obligatorio"),
        password: Yup.string().min(8, "Debe tener por lo menos 8 caracteres"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const formatValues = {
          user: { email: values.email, password: values.password },
        };
        auth
          .signUp(formatValues)
          .then((code: number) => {
            if (code === 200) {
              navigate(EMERGENCIES_LINK, { replace: true });
            } else {
              setError(true);
            }
          })
          .catch((err) => console.log(err));
        setSubmitting(false);
      }}
    >
      <Form>
        <div className="signup-form-root">
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <Input
            label="Contraseña"
            name="password"
            type="password"
            placeholder="........"
          />
          {error && (
            <div className="error">Ese mail ya está asociado a una cuenta</div>
          )}
          <button type="submit">Crear cuenta</button>
        </div>
      </Form>
    </Formik>
  );
};
