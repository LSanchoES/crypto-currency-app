
import React, { useState } from "react";
import { Button, Image, Modal, Row } from "react-bootstrap";
import { ChartComponent } from "./ChartComponent";
import graph from './../assets/graph.png'

export const ModalComponent = (items) => {

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			
			{/* <Image 	src={graph} alt='graphic'
					onClick={handleShow} className="infobtn"/> */}
			<Row onClick={handleShow} className="infobtn"></Row>


			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{items.items.name} Last 26 Days</Modal.Title>
				</Modal.Header>

				<Modal.Body className="graph-container"> 
					<ChartComponent items={items} />
				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
