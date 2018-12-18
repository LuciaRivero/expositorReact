import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';

class Editar extends Component {


    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    editarExpositores = (e) => {
        e.preventDefault();

    }

    cargarFormulario = () => {

        if(!this.props.expositor) return null;

        const {nombre, apellido, cargo,empresa,fileUpload,linkedinURL,twitterURL} = this.props.expositor;

        return (
            <div></div>
            
        )
    }
    
    render() { 
        
        return ( 
            <div>
                <form onSubmit={this.crearExpositor}>
                    <Grid item xs={12}>
                        
                        <TextField
                            id="outlined-full-width"
                            label="Nombre"
                            style={{ margin: 8 }}
                            fullWidth
                            multiline
                            margin="normal"
                            variant="outlined"
                            value={this.props.nombre}
                            onChange={this.handleChange('nombre')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="outlined-full-width"
                            label="Apellido"
                            style={{ margin: 8 }}
                            fullWidth
                            multiline
                            margin="normal"
                            variant="outlined"
                            value={this.props.apellido}
                            onChange={this.handleChange('apellido')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="outlined-full-width"
                            label="Cargo"
                            style={{ margin: 8 }}
                            helperText="Ej: CEO"
                            fullWidth
                            multiline
                            margin="normal"
                            variant="outlined"
                            value={this.props.cargo}
                            onChange={this.handleChange('cargo')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="outlined-full-width"
                            label="Empresa"
                            style={{ margin: 8 }}
                            helperText="Ej: Snoop Consulting"
                            fullWidth
                            multiline
                            margin="normal"
                            variant="outlined"
                            value={this.props.empresa}
                            onChange={this.handleChange('empresa')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="time"
                            label="Twitter"
                            style={{ margin: 8, width:300 }}
                            helperText="Ej: @SnoopConsulting"
                            multiline
                            margin="normal"
                            variant="outlined"
                            value={this.props.twitter}
                            onChange={this.handleChange('twitter')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="time"
                            label="Linkedin"
                            style={{ margin: 8, width:300  }}
                            helperText="Ej: /SnoopConsulting"
                            multiline
                            margin="normal"
                            variant="outlined"
                            value={this.props.linkedin}
                            onChange={this.handleChange('linkedin')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <input
                            accept="image/*"
                            id="contained-button-file"
                            multiple
                            type="file"
                            style={{ width:110 , marginBottom:10}}
                            value={this.props.fileUpload}
                            onChange={this.handleChange('fileUpload')} 
                        />
                        <div>
                            <Link to={`/`} className="btn btn-warning">Actualizar</Link> 
                        </div>
                
                </Grid>
                </form>
            </div>
         );
    }
}
 
export default Editar;
/*
<React.Fragment>
                {this.cargarFormulario()}
            </React.Fragment>

            */