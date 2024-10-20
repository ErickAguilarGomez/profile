import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Contact() {
  const sendMessage = (values: any) => {
    alert(JSON.stringify(values))
  }

  const validation = (values: any) => {
    const errors: any = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (!values.message) {
      errors.message = 'Required';
    }
    return errors;
  }

  return (
    <>
      <div className="w-full bg-black pt-14">
        <h2 className="text-white text-center rajdhani text-4xl tracking-widest bg-black">
          CONTACTO
        </h2>
      </div>
      <div className=" flex w-[100%] bg-black justify-center  items-center flex-col lg:flex-row lg:p-14">
        <img src="https://i.postimg.cc/fTQJVnzR/idea.png" alt="contacto" className='w-[60%]  lg:w-[20%] lg:h-[10%]' />

        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validate={validation}
          onSubmit={sendMessage}
        >

          <Form className='flex flex-col w-full lg:w-[20%] justify-around gap-4'>
            <div className="w-full bg-black">
              <h2 className="rajdhani text-center text-lg md:text-2xl xl:text-3xl font-color">
                ¡Trabajemos juntos!
              </h2>
            </div>

            <div className='flex w-100 justify-center lg:justify-between flex-wrap gap-4 items-center text-center'>
              <div className='flex flex-col w-[80%] lg:w-[40%]'>
                <Field type="text" name="name" placeholder="Nombre" className="bg-black border border-gray-400 rounded text-white" />
                <ErrorMessage name="name" component="div" className='text-red-700' />
              </div>

              <div className='flex flex-col w-[80%] lg:w-[40%] text-center'>
                <Field type="email" name="email" placeholder="Email" className="bg-black border border-gray-400 rounded text-white" />
                <ErrorMessage name="email" component="div" className='text-red-700' />
              </div>



              <div className='w-full flex flex-col text-center  justify-center items-center'>
                <Field as="textarea" name="message" placeholder="Escriba aquí" className="w-[80%] lg:w-full bg-black border border-gray-400 rounded  text-white" />
                <ErrorMessage name="message" component="div" className='text-red-700' />
              </div>

              <div className='w-full flex justify-center'>
                <button type="submit" className='text-white font-color-bg w-28 rounded  '>
                  Enviar
                </button>
              </div>
            </div>





          </Form>
        </Formik>

      </div>
    </>
  )
}
