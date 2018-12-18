import React, { Component } from 'react';
import Listado from './ListadoEpositores'
class Expositores extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2 className="text-center">Expositores</h2>
                <Listado 
                    expositores={this.props.expositores}
                    borrarExpositor={this.props.borrarExpositor}
                    />
            </div>
         );
    }
}
 
export default Expositores;

