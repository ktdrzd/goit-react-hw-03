import style from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const validation = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required!'),
  number: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required!'),
});

export const ContactForm = ({ onAdd }) => {
  const nameField = useId();
  const numberField = useId();

//   const initialVal = {
//     username: '',
//     number: '',
//   };

//   const handleSubmit = (values, actions) => {
//     onAdd({ id: nanoid(5), ...values });
//     actions.resetForm();
//   };

  return (
    <Formik initialValues={{
        name: "",
        number: ""
    }}
    onSubmit={(values, actions) => {
        onAdd({ id: nanoid(5), ...values });
        actions.resetForm();
    }}
    validationSchema={validation}>
      <Form className={style.form}>
        <div className={style.item}>
          <label htmlFor={nameField} className={style.text}>Name</label>
          <Field type="text" name="name" id={nameField} className={style.name}/>
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={style.item}>
          <label htmlFor={numberField} className={style.text}>Number</label>
          <Field type="text" name="number" id={numberField} className={style.name}/>
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit" className={style.button}>Add contact</button>
      </Form>
    </Formik>
  );
};
