import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Expositor from './Expositor';

class Listado extends Component {

    mostrarExpositores = () => {
        const expositores = this.props.expositores;

        if(expositores.length === 0) return null;
        
        return (
            <React.Fragment>
                {Object.keys(expositores).map(expositor => (
                    <Expositor 
                        key={expositor}
                        borrarExpositor={this.props.borrarExpositor}
                        info={this.props.expositores[expositor]}
                        />
                ))}
            </React.Fragment>
        )
    }
    render() { 
        return ( 
            <table className="table">
            
                <thead>
                    <Link to={`/Crear/`} className="btn btn-warning">Agregar nuevo Expositor</Link>
                </thead>
                <tbody>
                    {this.mostrarExpositores()}
                </tbody>
            </table>
         );
    }
}
 
export default Listado;

/*key={expositor}
info={this.expositores.expositores[expositor]}
borrarExpositor={this.props.borrarExpositor} */