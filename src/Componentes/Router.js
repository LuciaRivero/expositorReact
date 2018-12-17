import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Crear from './Crear';
import Swal from 'sweetalert2';
import Expositores from './Expositores';

class Router extends Component {
    state = {
        expositores: []
    }
    componentDidMount () {
        this.obtenerExpositores();
    }

    obtenerExpositores = () => {
        axios.get (`./expositores.json`)
        .then(res => {
            this.setState({
                expositores: res.expositores
            })
        })
    }
    
    crearExpositor = (expositores) => {
        
        axios.post(``, {expositores})
        .then(res => {
            if(res.status === 201) {
                Swal(
                    'Expositor creado!',
                    'El expositor se ha creado correctamente!',
                    'success'
                  )
                let expositorId = {id: res.expositores.id};

                
                const nuevoExpositor = Object.assign( {}, res.expositores.expositores, expositorId);
                this.setState(prevState => ({
                    expositores: [...prevState.expositores, nuevoExpositor ]
                }))
                console.log(nuevoExpositor);
            }
        })
        .catch((err) => {
              console.log('hubo un error: ', err);
        })
    }

    render() { 
        return (
            <BrowserRouter> 
                <div>    
                    
                    <Switch>
                    <Route exact path='/' render={() =>{
                                return(
                                    <Expositores
                                        expositores={this.state.expositores} 
                                        borrarExpositor={this.borrarExpositor}
                                    />
                                )
                            }}/>
                    <Route exact path="/crear" render= { () => {
                                return (
                                    <Crear
                                        crearExpositor={this.crearExpositor} />
                                )
                            }}/>
                    </Switch>
                </div>       
        </BrowserRouter>
        );
    }
}
 
export default Router;
