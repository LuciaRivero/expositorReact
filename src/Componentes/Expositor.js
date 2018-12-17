import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';


class Expositor extends Component {
    
    confirmarEliminacion = () => {
       const {id} = this.props.info;
       console.log(id);
        Swal({
            title: 'Estas Seguro',
            text: "Esto no se puedo revertir",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Borrar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
            this.props.borrarExpositor(id)
              Swal(
                'Eliminado',
                'El expositor fue eliminado',
                'success'
              )
            }
          })
    }
    render() { 
       const {nombre,apellido,cargo,empresa} = this.props.info;
        return ( 
            <tr>   
                <td>{nombre}</td>
                <td>{apellido}</td> 
                <td>{cargo}</td>
                <td>{empresa}</td>
                <td></td>           
                <td>
                <Link to={`/Editar/`} className="btn btn-warning">Editar</Link> 
                    <button onClick={this.confirmarEliminacion} className="btn btn-danger">Borrar</button>
                </td>
            </tr>
         );
    }
}
 
export default Expositor;


