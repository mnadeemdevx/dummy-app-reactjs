import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

const Modal = (props) => {
    const { children } = props;

    const navigate = useNavigate();

    const closeHandler = () => {
        navigate('/');
    };
    return (
        <>
            <div className={classes.backdrop} onClick={closeHandler} />
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    );
};

export default Modal;
