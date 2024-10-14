import { useState } from "react";

export default function useModalDialog() {
    const [isModalOpen, setModalOpen] = useState(false);

    return {
        isModalOpen,
        openModal: () => setModalOpen(true),
        closeModal: () => setModalOpen(false)
    }
}