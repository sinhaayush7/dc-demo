import { toast } from "react-toastify";

const showToast = (message, type, option = {}) => {
  switch (message?.code) {
    case 406:
      message.message = 'This receiver is not available on the platform currently'
      break;
    default:
      break;
  }
  const options = {
    ...option,
    autoClose: 5000, // Close toast automatically after 5 seconds
    hideProgressBar: false, // Show progress bar
    closeOnClick: true, // Close toast on click
    pauseOnHover: true, // Pause animation on hover
    position: 'top-right',
  }
  return toast(message?.message ? message.message : message, type, options)
}

export default showToast