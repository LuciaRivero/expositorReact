import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Crear from './Crear';
import Swal from 'sweetalert2';
import Expositores from './Expositores';
import infoExpositores from '../Datos/Expositores.json';
import Editar from './Editar';

class Router extends Component {
    state = {
        expositores: []
    }
    componentDidMount () {
        //this.obtenerExpositores();
        this.setState({
            expositores: infoExpositores
        })
    }


    obtenerExpositores = () => {
        axios.get (`./Expositores.json`)
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
                    
                
                const nuevoExpositor = Object.assign( {}, res.expositores.expositor, expositorId);
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
    editarPost = (expositorActualizado) =>{

        const {id} = expositorActualizado;

        axios.put(`${expositorActualizado.id}`, {})
        .then(res => {
            if(res.status ===  200) {
                this.obtenerExpositores();
            }
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
                    <Route exact path="/editar/:expositorId" render={(props) =>{
                        let idExpositor = props.location.pathname.replace('/editar/','');
                        const expositor = this.state.expositores; 
                        let filtro;
                        filtro = expositor.filter(expositores => (
                            expositores.id === Number(idExpositor)
                        ))
                        return (
                            <Editar
                                post={filtro[0]}
                                editarPost={this.editarPost}
                            />
                        )
                    }}/>
                    </Switch>
                </div>       
        </BrowserRouter>
        );
    }
}
 
export default Router;
