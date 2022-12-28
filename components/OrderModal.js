import React from "react";
import ContactForm from "../components/ContactForm";

const OrderModal = ({ id, name }) => (
	<div id="">
		<style jsx>{`
			.fab:hover {
				opacity: 0.5;
			}
		`}</style>

		<div className="modal fade" id={`exampleModal${id}`} tabIndex="-1" role="dialog" aria-labelledby={`ModalLabel${id}`} aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id={`ModalLabel${id}`}>
							Bestelling van product: {name}
						</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<ContactForm msg={name} />
					</div>
					{/*
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Send message
            </button>
          </div>
          */}
				</div>
			</div>
		</div>
	</div>
);
export default OrderModal;
