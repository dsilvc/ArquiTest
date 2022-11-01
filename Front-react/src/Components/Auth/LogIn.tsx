import "../../Assets/styles/auth.css";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { useNavigate } from "react-router";

import { Input } from "../../Services/Formik/Input";
import { useAuth } from "../../Context/Auth";
import { EMERGENCIES_LINK } from "../../Navigation/routes";
import { useState } from "react";

// And now we can use these
export const LogInForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();
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
        setSubmitting(true);
        const formatValues = {
          user: { email: values.email, password: values.password },
        };
        auth.logIn(formatValues).then((code: number) => {
          if (code === 200) {
            navigate(EMERGENCIES_LINK, { replace: true });
          } else if (code === 401) {
            setError(true);
          }
        });
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
          {error && <div className="error">Contraseña o email incorrectos</div>}
          <button type="submit">Entrar</button>
        </div>
      </Form>
    </Formik>
  );
};
