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
                        info={this.expositores.expositores[expositor]}
                        borrarExpositor={this.props.borrarExpositor}
                        />
                ))}
            </React.Fragment>
        )
    }
    render() { 
        return ( 
            <table className="table">
                <tbody>
                    {this.mostrarExpositores()}
                </tbody>
            </table>
         );
    }
}
 
export default Listado;