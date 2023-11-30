/**
* Función complemento de useCustomHook, recibe los inputs, extrae su value y lo almacena en el objeto inputsValue
*Recibe por parámetro el formulario a tratar
 */

const inputValues = {}

export default function getInputsValues(form) {

        // Accede a los elementos del formulario a través de la referencia
        const formElements = form.current.elements;
        // Recorremos el array que creamos en base a la referencia y solo toma los elementos inputs
        Array.from(formElements).forEach( element => {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                // Almacena el valor del input en el objeto inputValues
                inputValues[element.name] = element.value;
            }
        })
        return inputValues
}