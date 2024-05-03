import { toast } from 'react-toastify';
import ReduxDispatchSingleton from './reduxDispatchSingleton';
import {
    openPopup,
    openConfirmationPopup,
    openErrorPopup
} from '../redux/slices/utilitiesSlice';

export default function showMessage(messageConfig) {
    const dispatch = ReduxDispatchSingleton.getDispatch();
    switch (messageConfig.type) {
        case 'openPopup':
        default:
            dispatch(
                openPopup(
                    messageConfig.payload.type,
                    messageConfig.payload.title,
                    messageConfig.payload.message,
                    messageConfig.payload.multiMessages ?? false,
                    messageConfig.payload.headers ?? [],
                    messageConfig.payload.buttonLabel
                )
            );
            break;
        case 'openConfirmationPopup':
            dispatch(
                openConfirmationPopup(
                    messageConfig.payload.actionName,
                    messageConfig.payload.actionMessage,
                    messageConfig.payload.confirmCallback,
                    messageConfig.payload.declineCallback,
                    messageConfig.payload.confirmationButtonText,
                    messageConfig.payload.cancelText,
                    messageConfig.payload.closable
                )
            );
            break;
        case 'errorPopup':
            dispatch(
                openErrorPopup(
                    messageConfig.payload.title,
                    messageConfig.payload.body
                )
            );
            break;
        case 'toast':
            toast.configure();
            toast[messageConfig.payload.type](messageConfig.payload.content, {
                autoClose: messageConfig.payload.autoClose ?? 2000,
                position:
                    messageConfig.payload.position ?? toast.POSITION.TOP_CENTER
            });
            break;
    }
}
