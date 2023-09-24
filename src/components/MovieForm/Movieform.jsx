import './StyleMovieForm.css';
import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export function MovieForm({ FuncAddMovie }) {
const [abierto, setAbierto] = useState(false);
const [movieData, setMovieData] = useState({
    nombre: '',
    calificacion: 0,
    duracion: ''
});

const [errorDuracion, setErrorDuracion] = useState('');
const [errorCalificacion, setErrorCalificacion] = useState('');

const abrirModal = () => {
    setAbierto(!abierto);
};

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });

    setErrorDuracion('');
    setErrorCalificacion('');
};

const handleAdd = () => {
    if (movieData.nombre && movieData.calificacion && movieData.duracion) {
    // Validar el formato de duración
    if (!validDurationFormat(movieData.duracion)) {
        setErrorDuracion('Por favor, especifique el tiempo en horas o minutos (por ejemplo, 2,5h o 150m)');
        return;
    }
    if (movieData.duracion.includes('m')) {
        movieData.duracion = parseFloat(movieData.duracion) / 60;
    }

    if(movieData.calificacion >= 1 && movieData.calificacion <= 100){

        FuncAddMovie(movieData);

    } else {setErrorCalificacion('Por favor introducir correctamente la calificacion (1-100)')
        return;
    }
    
    console.log(movieData)

    setMovieData({
        nombre: '',
        calificacion: '',
        duracion: '',
    });

    setAbierto(false);
    }
};

// Función para validar el formato de duración
const validDurationFormat = (duracion) => {
    const validduration = /^(\d+(\.\d+)?(h|m))$/;
    if(duracion)
    return validduration.test(duracion);
};


return (
    <div>
    <div className="bar">
        <Button className='button' onClick={abrirModal}>Agregar película</Button>
    </div>

    <Modal isOpen={abierto}>
        <ModalHeader>
        Agregar Película
        </ModalHeader>

        <ModalBody>
        <FormGroup>
            <Label for='name'>Nombre película</Label>
            <Input type="text" id='name' name="nombre" value={movieData.nombre} onChange={handleInputChange} />
        </FormGroup>
        <FormGroup>
            <Label for='rating'>Calificación</Label>
            <Input type="text" maxLength={3} min={1} max={100} id='rating' name="calificacion" value={movieData.calificacion} onChange={handleInputChange} />
        </FormGroup>
        {errorCalificacion && <p style={{ color: 'red' }}>{errorCalificacion}</p>}
        <FormGroup>
            <Label for='time'>Duración</Label>
            <Input type="text" id='time' name="duracion" value={movieData.duracion} onChange={handleInputChange} />
        </FormGroup>
        {errorDuracion && <p style={{ color: 'red' }}>{errorDuracion}</p>}
        </ModalBody>

        <ModalFooter>
        <Button color='success' className='button' onClick={handleAdd}>Agregar</Button>
        <Button color='danger' className='button' onClick={abrirModal}>Cerrar</Button>
        </ModalFooter>
    </Modal>
    </div>
);
}

export default MovieForm;
