// sukurti login forma

import { useFormik } from 'formik';
import SmartInput from '../UI/SmartInput';

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
  });

  return (
    <div className='container'>
      <h2 className='text-3xl mb-8'>Login</h2>

      <form>
        <SmartInput name={'email'} formik={formik} />
        <SmartInput type='password' name={'password'} formik={formik} />
        <button></button>
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
 username: 'kminchelle',
    password: '0lelplR',
*/
