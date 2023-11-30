/**
 * Componente que muestra un alerta dinámica, se maneja con el estado global, almacenado en alertStore
 * error: false || true => se usa para renderizar este componente, desde otro
 *  message: string     => El mensaje dinámico a mostrar
 * type: error || success => Tipo de alerta a renderizar
 */

import { alertStore } from '../../store'
import { AlertError,AlertSuccess } from './'


export default function Alert() {

    const {  message, type, onClose } = alertStore()

    return (
        <>
            {type === 'success' && <AlertSuccess message={message} onClose={onClose} />}
            {type === 'error' && <AlertError message={message} onClose={onClose} />}
            {/* Agregar mas alerts si se necesita ej info, warning */}
        </>
    )
}