import requestApi from '../api/requestApi'
import getInputsValues from '../libs/getInputsValues'

export default function usePostForm (form = {}, url = '') {

    const actionForm = async (e) => {
        e.preventDefault()
        //Fn que extrae los valors de los inputs
        const values = getInputsValues(form)   
        console.log(values)
        const post =  {
            title      : values.title,
            description: values.description + '' +values.post,
            imageURL   : values.imageURL
            
        }
        try{
            const {response} = await requestApi.post(url,post)
            console.log(response)
        }catch(err){
            console.log(err.Error)
   
        }
    }
    
    return {
        actionForm,
    }
}