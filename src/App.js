import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import styles from "./App.module.css";
export default function App() {
  const schema = yup
    .object()
    .shape({
      login: yup
        .string("This must by String")
        .min(5, "This field must contain min.5 letters")
        .required("This field is required")
        .matches(/damian/, "This field must contain word 'damian'"),
      password: yup
        .string("This must by String")
        .min(5, "This field is too short")
        .required("This field is required"),
      email: yup
        .string("This must be string")
        .email("This must by valid email address")
        .required("Field required"),
    })
    .required();

  return (
    <div className={styles.mainContainer}>
      <Formik
        validationSchema={schema}
        onSubmit={(data) => {
          alert(`SUBMITTED DATA ${JSON.stringify(data)}`);
        }}
        initialValues={{
          login: "",
          password: "",
          email: "",
        }}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            className={styles.flexColumn}
          >
            <div className={styles.flexColumn}>
              <label htmlFor="login">Login</label>
              <Field name="login" />
              {errors.login && touched.login ? (
                <div className={styles.redText}>{errors.login}</div>
              ) : null}
            </div>
            <div className={styles.flexColumn}>
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" />
              {errors.password && touched.password ? (
                <div className={styles.redText}>{errors.password}</div>
              ) : null}
            </div>
            <div className={styles.flexColumn}>
              <label htmlFor="email">email</label>
              <Field name="email" label="login" />
              {errors.email && touched.email ? (
                <div className={styles.redText}>{errors.email}</div>
              ) : null}
            </div>
            <div className={styles.flexColumn}>
              <button type="submit">SEND</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
