import React from 'react'
// Diseñar el formulario de inicio de sesión y programar los eventos de formulario
// Como así también el envío de los datos al servidor
export const Register = () => {
  return (
    <div className='container  '>
         {/* <div className="col-md-12"> */}
        <div className="row vh-100">
          <div className="col">
            <div className="well well-sm">
              <form className="form-horizontal" method="post">
                <fieldset>
                  <legend className="text-center header">Registro</legend>
                  <div className="form-group">
                    <span className="col-md-3 col-md-offset-4 text-center"><i className="fa fa-user bigicon" /></span>
                    <div className="col-md-12 mb-3">
                      <input id="fname" name="name" type="text" placeholder="Nombres" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon" /></span>
                    <div className="col-md-12 mb-3">
                      <input id="lname" name="name" type="text" placeholder="Apellido" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-envelope-o bigicon" /></span>
                    <div className="col-md-12 mb-3">
                      <input id="email" name="email" type="text" placeholder="Email" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-phone-square bigicon" /></span>
                    <div className="col-md-12 mb-3">
                      <input id="phone" name="phone" type="text" placeholder="telefono" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon" /></span>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12 mb-3 text-center">
                      <button type="submit" className="btn btn-primary btn-lg">Registrarse</button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
  
    // </div>
  )
}
