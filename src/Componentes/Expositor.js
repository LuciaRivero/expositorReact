import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';



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
            <div>
                <Paper>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>{nombre}</TableCell>
                                <TableCell >{apellido}</TableCell>
                                <TableCell >{cargo}</TableCell>
                                <TableCell>{empresa}</TableCell>
                                <TableCell>
                                <Link to={`/Editar/`} className="btn btn-warning">Editar</Link> 
                                <button onClick={this.confirmarEliminacion} className="btn btn-danger">Borrar</button>
                                </TableCell>
                            </TableRow>
                          
                            
                            
                        </TableBody>   
                    </Table>
                </Paper>
            </div>
        
         );
    }
    
}



 
export default Expositor;

/**<Link to={`/Editar/`} className="btn btn-warning">Editar</Link> 
<button onClick={this.confirmarEliminacion} className="btn btn-danger">Borrar</button> */








