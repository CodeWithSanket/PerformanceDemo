import useModalDialog from './hooks/useModalDialog';

export default function ButtonWithModal() {
    const { isModalOpen, openModal, closeModal } = useModalDialog();
    return (
        <>
            <button onClick={openModal}>Show Modal</button>
            {isModalOpen && (
                <div>
                    This is a modal.<br />
                    <button onClick={closeModal}>Close</button>
                </div>
            )}
        </>
    )
}