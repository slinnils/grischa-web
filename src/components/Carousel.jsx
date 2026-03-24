import { useEffect, useRef, useState } from "react";

export default function Carousel({ images }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState();

  const dialog = useRef();

  useEffect(() => {
    if (modalIsOpen) {
      dialog.current.showModal();
    } else if (dialog.current.open) {
        dialog.current.close();
    }
  }, [modalIsOpen]);
  return (
    <>
      <ul className="carousel">
        {images.map((img, i) => (
          <li key={i}>
            <img
              src={img.src}
              alt=""
              onClick={() => {
                setCurrentImg(img.src);
                setModalIsOpen(true);
              }}
            />
          </li>
        ))}
      </ul>

        <dialog className="projects-modal" ref={dialog}>
          <button className="close-btn" onClick={() => setModalIsOpen((prev) => !prev)}>
            X
          </button>
          <img id="modal-img" src={currentImg} alt="" />
        </dialog>
    </>
  );
}
