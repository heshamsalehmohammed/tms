import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ErrorPopup.scss';
import { useDispatch } from 'react-redux';
//import errorIcon from '../../../../../../assets/images/error-icon.png';
import { closeErrorPopup } from '../../../redux/slices/utilitiesSlice';

const ErrorPopup = (props) => {
    const { isErrorPopupShown, handleCloseErrorPopup, title, body } = props;

    const dispatch = useDispatch();

    console.log('ErrorPopup ');

    const handleClose =
        handleCloseErrorPopup ||
        (() => {
            dispatch(closeErrorPopup());
        });

    return (
        <>
            <Modal
                show={isErrorPopupShown}
                onHide={handleClose}
                dialogClassName='error-popup'
                backdrop='static'
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>
                        {/* <img src={errorIcon} /> */}
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{
                        background: '#fff',
                        padding: '20px 16px 30px'
                    }}
                >
                    {body}
                </Modal.Body>
                <Modal.Footer className='m-0'>
                    <div className='invalid-main-component-footer'>
                        <Button onClick={handleClose}>Got It</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ErrorPopup;
