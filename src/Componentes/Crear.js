import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class FormExpositores extends Component {
    state = {
        id:'',
        nombre:'',
        apellido:'',
        cargo:'',
        empresa:'',
        fileUpload:null,
        linkedin:'',
        twitter:''  
     }


    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    crearExpositor = (e) =>{
        e.preventDefault()
       console.log(this.state);
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
                            value={this.state.nombre}
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
                            value={this.state.apellido}
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
                            value={this.state.cargo}
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
                            value={this.state.empresa}
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
                            value={this.state.twitter}
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
                            value={this.state.linkedin}
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
                            value={this.state.fileUpload}
                            onChange={this.handleChange('fileUpload')} 
                        />
                        
                        <div>
                            <Button type="submit" variant="contained" color="primary">
                            Enviar
                            </Button>
                        </div>

                    </Grid>
                </form>
            </div>
          );
    }
}
 
export default FormExpositores;
