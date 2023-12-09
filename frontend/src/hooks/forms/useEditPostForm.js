/**
 * CustomHook que realiza la request para editar un post, recibe por props la referencia del form y la url de el endpoint.
 */
import { useState } from 'react'
import requestApi from '../../api/requestApi'              //config de axios personalizada
import getInputsValues from '../../libs/getInputsValues'   //fn que extrae los values de los inputs o textarea
import { alertStore } from '../../store'
import { useNavigate } from "react-router-dom";

export default function useEditPostForm (form = {}, url = '') {
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
        const post =  {
            title      : values.title,
            description: values.description,
            imageURL   : values.imageURL
        }       
    
        setDisableBtn(true) //Deshabilitamos el botón para que no se puedan enviar multiples solicitudes
        try{
            const response = await requestApi.put(url,post)
            //Cargamos el alert con un mensaje de éxito
            if (response.status === 200 ) {
                setAlert({
                    alert  : true,
                    message: 'Se edito el post',
                    type   : 'success'
                })
                setDisableBtn(false)
                return navigate('/')
            }
        }catch(err){
            let message = ''
            /**
             * El siguiente mensaje es la validación del back en caso de que se pueda acceder a un post del que no se es el autor
             * (fallo de validación front), en este caso no dejara enviar el formulario.
             */
            if(err.response.data?.message) message = err.response.data.message //'Debe ser el autor del post para editarlo'
            else message = 'Hubo un error al intentar editar el post'

            //Cargamos el alert con un mensaje de error
            setAlert({
                alert  : true,
                message: message,
                type   : 'error',
            })
            setDisableBtn(false)
        } 
    }

    return { actionForm, disableBtn }
}