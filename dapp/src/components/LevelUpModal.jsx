import React from "react";
import { Modal } from 'react-bootstrap'

export default function LevelUpModal({ hero, handleClose }) {


    return (
        <>
            {
                hero.id
                && <Modal show={hero ? true : false} onHide={handleClose}>
                    <div class="modal-header">
                        <h5 class="modal-title">{hero.type} {hero.id}</h5>
                        <span onClick={handleClose} class="close">
                            <i class="fa fa-times"></i>
                        </span>
                    </div>
                    <div class="modal-body">
                        <div class='relative'>
                            <img src={`/img/${hero.img}`} style={{ maxWidth: '100%' }} />
                            <div class='modal-abs'>
                                <span>Level : {hero.level}</span>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-yellow">Level up</button>
                        <button onClick={handleClose} class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </Modal>
            }
        </>
    );
}

