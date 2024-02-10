import {useState} from 'react';
import { FaAngleRight } from "react-icons/fa6";
import DescriptionModal from '@/components/ModalComponents/DescriptionModal';
import Modal from 'react-modal';

const HotelDescription = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModalPrope=()=>{
    setModalIsOpen(false);
  }

  return (
    <div>
      <div className="Description border border-gray-300 rounded-lg my-8 bg-white">
        <div>
          <div className="m-8 mb-0 ">
            <div className="text-2xl mb-2 font-semibold">Description</div>
            <div>
              If you wish to experience the best student accommodation in
              London, Arbour House is the one for you! Arbour House is a
              well-known student accommodation in London that offers a wide
              range of en suite rooms and self-contained apartments for you to
              choose from. Popular universities and colleges like the City
              University of London, which is a 4-minute walk away and the
              University of the Arts, which is a 10-minute walk away, make it a
              perfect choice for your new home
            </div>

            <div className="py-4">
              <hr />
            </div>
          </div>

          <div className="Modal-button">
            {/* <!-- Modal toggle --> */}
            <button
              className=" text-blue-600 flex items-center gap-1  hover:bg-gray-200  font-medium hover:rounded-md text-sm py-2 px-4 mx-4 my-2 text-center "
              type="button"
              onClick={() => setModalIsOpen(true)}
            >
              View full description <FaAngleRight />
            </button>
            <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="custom-modal custom-modal-padding"
        overlayClassName="custom-overlay"
      >
       <DescriptionModal closeModal={closeModalPrope}/>
      </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelDescription
