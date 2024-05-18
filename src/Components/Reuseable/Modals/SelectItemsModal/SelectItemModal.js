import BiryaniDetails from "@/Components/Biryani/BiryaniDetails";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "react-modal";
// Modal
Modal.setAppElement("body");
//style
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
};
const SelectItemModal = ({ product, setModal, modal, closeModal }) => {
  return (
    <>
      <Modal
        isOpen={modal}
        style={modalStyles}
        onRequestClose={closeModal}
        contentLabel="Biryani Modal"
        className={
          "bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
        }
      >
        <div
          onClick={closeModal}
          className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer"
        >
          <IoCloseOutline className="text-4xl text-primary" />
        </div>
        {/* Inside the modal component is BiryaniDetails */}
        <BiryaniDetails product={product} setModal={setModal} />
      </Modal>
    </>
  );
};

export default SelectItemModal;
