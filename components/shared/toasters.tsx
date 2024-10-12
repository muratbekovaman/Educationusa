import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const toastError = (message: string ) =>
    toast(<p style={{ fontSize: 16 }}>{message}</p>, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      type: "error"
    });
  
    



    
