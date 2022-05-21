import { useState,useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import '../../Style/style.css'
import Lottie from "lottie-react";
import LoadingLottie from "../Lottie/lf30_editor_nl4fdwdj.json";

const ModalLottie = ({ loding }) => {

    useEffect(() => {
      
    console.log(loding )
    }, [loding])
    


    const [modalShow, setModalShow] = useState(false);
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdropClassName="backLotttie"
            >
                {/*  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <Lottie animationData={LoadingLottie} />
                </Modal.Body>

            </Modal>
        );
    }

    return (
        <>
            <MyVerticallyCenteredModal
                show={loding}
            />

        </>
    )
}
export default ModalLottie