/**
 * CustomHook que maneja las request al backend con todo lo relacionado al CRUD de posteos
 * recibe por props la referencia del form y la url de el endpoint.
 */
import { useState } from 'react'
import requestApi from '../../api/requestApi'              //config de axios personalizada
import getInputsValues from '../../libs/getInputsValues'   //fn que extrae los values de los inputs o textarea
import { alertStore } from '../../store'
import { useNavigate } from "react-router-dom";

export default function usePostForm (form = {}, url = '') {
    const navigate = useNavigate()

    //Deshabilita el botón mientras se resuelve el request
    const [disableBtn, setDisableBtn] = useState(false)

    //Store global para manejo del componente <Alert /> 
    const { setAlert } = alertStore()

    const actionForm = async (e) => {
        e.preventDefault()
        //Fn que extrae los valors de los inputs
        const values = getInputsValues(form)  

        //Arma el post con los datos a enviar al endpoint
        const formatDescription = values.description.replace(/\n/g, '\n\n') //Formatea la description con doble salto de linea para que se vea mejor
    
        const post =  {
            title      : values.title,
            description: formatDescription,
            imageURL   : values.imageURL
        }       
    
        setDisableBtn(true) //Deshabilitamos el botón para que no se puedan enviar multiples solicitudes
        try{
            const response = await requestApi.post(url,post)
            //Cargamos el alert con un mensaje de éxito
            if (response.status === 201 ) {
                setAlert({
                    alert  : true,
                    message: 'Post creado exitosamente',
                    type   : 'success'
                })
                setDisableBtn(false)
                return navigate('/')
            }
        }catch(err){
            console.log(err)
            //Cargamos el alert con un mensaje de error
            setAlert({
                alert        : true,
                message      : 'Hubo un error al enviar el post',
                type         : 'error',
            })
            setDisableBtn(false)
        } 
    }

    return { actionForm, disableBtn }
}