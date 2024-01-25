// sukurti login forma

import { useFormik } from 'formik';
import SmartInput from '../UI/SmartInput';
import Btn from '../UI/Btn';
import axios from 'axios';
import * as Yup from 'yup';

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().min(4).max(255).required(),
      password: Yup.string().min(4).max(255).required(),
    }),
    onSubmit: (values) => {
      console.log(values);
      sendAxiosRequest({
        username: values.email,
        password: values.password,
      });

      //   const valuesIs = {
      //     email: 'kminchelle',
      //     password: '0lelplR',
      //   };

      //   const needsBe = {
      //     username: 'kminchelle',
      //     password: '0lelplR',
      //   };
    },
  });

  function sendAxiosRequest(data) {
    axios
      .post('https://dummyjson.com/auth/login', data)
      .then((resp) => {
        console.log('resp ===', resp);
        console.log('resp.data ===', resp.data);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
        console.log('error.response.data ===', error.response.data); // axios klaida back
      });
  }

  return (
    <div className='container'>
      <h2 className='text-3xl mb-8'>Login</h2>

      <form onSubmit={formik.handleSubmit}>
        <SmartInput name={'email'} formik={formik} />
        <SmartInput type='password' name={'password'} formik={formik} />
        <Btn type='submit'>Login</Btn>
      </form>
    </div>
  );
}

// email ir password

// valdyti su formik

// validuoti su Yup

// pirma pasirasyti patiems

// kai veikia panaudoti SmartInput

// sekmningai supildzius siusti i login
// dokumentacija siuo adresu https://dummyjson.com/docs/auth

// gavus token issisaugom i localStorage

/*
{
 username: 'kminchelle',
 password: '0lelplR',
}
*/
