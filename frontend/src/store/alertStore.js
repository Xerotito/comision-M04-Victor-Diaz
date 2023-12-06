/**
 * Estado global para manejo del componente <Alert />, puede ser manejado desde cualquier lugar,
 * incluso responder a un componente desde otro , es el caso de mostrar un alerta desde la vista de los posteos
 * cuando se crea uno exitosamente desde la vista de crear post
 */

import { create } from 'zustand'

const useAlert = create((set) => ({
    alert   : false,
    message : '',
    type    : '',                                                              //error || success
    onClose : () => set(state => ({ alert: false, message: '', type: '' })),
    setAlert: (payload) => set(state => ({ ...state,...payload })),
}))

export default useAlert
