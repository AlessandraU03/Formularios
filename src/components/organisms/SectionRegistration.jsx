import { useState } from 'react';
import Swal from 'sweetalert2'
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import { list } from '../../data/controllers/dependencies';
import './SectionRegistration.css'

function SectionResgitration() {
    const [nombre,     setNombre] = useState('')
    const [apellido,     setApellido] = useState('')
    const [curp, setCurp] = useState ('')
    const [edad,setEdad] = useState ('')
    const [tutor ,setTutor] = useState('')
    const [registros, setRegistros] = useState([]); 

    const handlerClick = (event) => {
        Swal.fire({
            title: "Registro",
            text: `Nombre: ${nombre}
                   Apellido: ${apellido}
                   CURP: ${curp}
                   Edad: ${edad}
                   Tutor: ${tutor}`,
        });

        const nuevoRegistro = { nombre, apellido, curp, edad, tutor };
        list.push(nuevoRegistro);
        setRegistros([...registros, nuevoRegistro]); 
    };

    const view = (event) => {
        let content = '<h3>Alumnos registrados:</h3>';
        if (list.isEmpty()) {
            content += '<p>No hay alumnos inscritos.</p>';
        } else {
            for (let i = 0; i < list.size(); i++) {
                const node = list.getElementAt(i);
                if (node) {
                    const registro = node.element;
                    content += `
                        <div>
                            <p><strong>Registro ${i + 1}:</strong></p>
                            <p>Nombre: ${registro.nombre}</p>
                            <p>Apellido: ${registro.apellido}</p>
                            <p>CURP: ${registro.curp}</p>
                            <p>Edad: ${registro.edad}</p>
                            <p>Tutor: ${registro.tutor}</p>
                        </div>
                        <hr>
                    `;
                }
            }
        }

        document.getElementById('registros').innerHTML = content;
    };



    
    
    return (
        <>
        <div id='section'>
        <div id="registration_section">
            <Field type="text" placeholder="Alessandra Guadalupe" text="Nombre/s" val={nombre} fnVal={setNombre}/>
            <Field type="text" placeholder="Ulloa Lopez" text="Apellido/s" val={apellido} fnVal={setApellido}/>
            <Field type="text" placeholder="051203MCSLPA9" text="CURP" val ={curp} fnVal={setCurp}/>
            <Field type="number" placeholder="18" text="Edad:" val ={edad} fnVal={setEdad}/>
            <Field type="text" placeholder="Nombre del tutor" text="Tutor:" val ={tutor} fnVal={setTutor}/>
            <Button title="REGISTRAR DATOS" onclick={handlerClick} />
            <Button id='view-transfer' title="MOSTRAR REGISTROS" onclick={view} />
            </div> 

            <div id='registros'></div>


        </div>
        
        </>
     )
}

export default SectionResgitration;
