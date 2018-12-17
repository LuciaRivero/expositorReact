import React, { Component } from 'react';

class Editar extends Component {

    //Crear refs
    nombreRef = React.createRef();
    apellidoRef = React.createRef();

    editarExpositores = (e) => {
        e.preventDefault();

        const expositores = {
            //Leer refs
            nombre: this.tituloRef.current.value,
            apellido: this.apellidoRef.current.value,
            id: this.props.expositores.id
        }
    
        this.props.crearExpositores(expositores);
    }

    cargarFormulario = () => {

        if(!this.props.expositor) return null;

        const {nombre, apellido} = this.props.expositor;

        return (
            <form onSubmit={this.editarExpositores} className="col-8">
                    <legend className="text-center">
                        Editar Expositor
                    </legend>
                    <div className="form-group">
                        <input type="text" ref={this.nombreRef}className="form-control" defaultValue={nombre}/>
                    </div>
                    <div className="form-group">
                        <input ref={this.apellidoRef} className="form-control" defaultValue={apellido}/>
                    </div>
                    <button type="submit" className="btn btn-primary">
                    Guardar Cambios
                    </button>
                </form>
        )
    }
    
    render() { 
        return ( 
            <React.Fragment>
                {this.cargarFormulario()}
            </React.Fragment>
         );
    }
}
 
export default Editar;