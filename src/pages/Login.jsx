import React from 'react'
// Diseñar el formulario de inicio de sesión y programar los eventos de formulario
// Como así también el envío de los datos al servidor
export const Login = () => {
  return (
    <div className='row vh-100'>
      <div className='"col-md-5 mx-auto align-self-center col-lg-2 col-sm-6 col-sx-12"'>

        <div className='col-form-label'>
        <div classname="mb-3 row">
          <label htmlFor="staticEmail" classname="col-sm-2 col-form-label">Email</label>
          <div classname="col-sm-10">
            <input type="text" classname="form-control-plaintext" id="inputEmail" />
          </div>
        </div>
        <div classname="mb-3 row">
          <label htmlFor="inputPassword" classname="col-sm-2 col-form-label">Password</label>
          <div classname="col-sm-10">
            <input type="password" classname="form-control" id="inputPassword" />
          </div>
        </div>
        </div>
      </div>
      </div>

  )
}
