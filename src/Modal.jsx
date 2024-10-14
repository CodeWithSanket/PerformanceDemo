export default function Modal({ closeModal }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <h1>Modal</h1>
                <p>Modal content</p>
                <button onClick={closeModal}>Close Modal</button>
            </div>
        </div>
    )
}