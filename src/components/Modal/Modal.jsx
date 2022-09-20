import { useEffect } from "react";

export const Modal = ({ modalImage, toggleModal }) => {
    useEffect(() => {
        const onESCclick = e => {
            if (e.key === 'Escape') {
                toggleModal();
            }
        };
        document.addEventListener('keydown', onESCclick);
        return () => {
            document.removeEventListener('keydown', this.onESCclick);
        }
    }, [toggleModal]);

    return (
        <div className="overlay" onClick={() => toggleModal()}>
            <div className="modal">
                <img src={modalImage} alt="" />
            </div>
        </div>
    );
};