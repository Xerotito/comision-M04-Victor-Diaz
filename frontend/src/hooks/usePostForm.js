/**
 * CustomHook que se encarga de la realizas las request al backend con todo lo relacionado al CRUD de posteos
 * recibe por props la referencia del form y la url de el endpoint
 */
import { useState } from 'react'
import requestApi from '../api/requestApi'              //config de axios personalizada
import getInputsValues from '../libs/getInputsValues'   //fn que extrae los values de los inputs o textarea
import useAlert from '../store/alertStore'

export default function usePostForm (form = {}, url = '') {

    //Store global para manejo del componente <Alert /> 
    const { setAlert } =  useAlert()

    const actionForm = async (e) => {
        e.preventDefault()
        //Fn que extrae los valors de los inputs
        const values = getInputsValues(form)  
        //Arma el post a enviar al endpoints
        const post =  {
            title      : values.title,
            description: values.description + '' +values.post,
            imageURL   : values.imageURL            
        }
        try{
            // const response = await requestApi.post(url,post)
            (response.status === 200 )
            // setAlert({message: 'El post se creo exitosamente', type: 'success'})
        }catch(err){
            console.log(err.Error)
            setAlert({
                alert  : true,
                message: 'Hubo un error al enviar el post',
                type   : 'error',
            })
        } 
    }

    return { actionForm }
}