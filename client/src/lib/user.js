import { toast } from "react-toastify"

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}


export const sendToast = (message, error=false) => {
    if(error) {
        return toast.error(message)
    } else {
        return toast.success(message)
    }
}