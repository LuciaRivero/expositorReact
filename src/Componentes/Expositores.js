import React, { Component } from 'react';
import Listado from './Listado'
class Expositores extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-12 col-md-8">
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

