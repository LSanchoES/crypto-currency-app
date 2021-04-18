import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const ModalComponent = (items) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{items.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{items.description}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
