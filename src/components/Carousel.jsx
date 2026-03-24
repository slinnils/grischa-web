import { useEffect, useRef, useState } from "react";

export default function Carousel({ images }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dialog = useRef();

  useEffect(() => {
    if (modalIsOpen) {
      dialog.current.showModal();
      document.body.style.overflow = "hidden";
    } else if (dialog.current.open) {
      dialog.current.close();
      document.body.style.overflow = "";
    }
  }, [modalIsOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalIsOpen) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setModalIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [modalIsOpen, currentIndex]);

  function prev() {
    setCurrentIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  }

  function next() {
    setCurrentIndex((i) => (i < images.length - 1 ? i + 1 : 0));
  }

  return (
    <>
      <div className="carousel-wrapper">
        <button className="carousel-btn left" onClick={prev}>
          ❮
        </button>

        <div className="carousel-viewport">
          <img
            src={images[currentIndex].src}
            alt=""
            onClick={() => setModalIsOpen(true)}
          />
        </div>

        <button className="carousel-btn right" onClick={next}>
          ❯
        </button>
      </div>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>

      <dialog
        className="projects-modal"
        ref={dialog}
        onClick={(e) => {
          if (e.target === dialog.current) setModalIsOpen(false);
        }}
      >
        <button className="close-btn" onClick={() => setModalIsOpen(false)}>
          ✕
        </button>
        <div className="modal-content">
          <button className="modal-btn" onClick={prev}>
            ❮
          </button>
          <img src={images[currentIndex].src} alt="" />
          <button className="modal-btn" onClick={next}>
            ❯
          </button>
        </div>
      </dialog>
    </>
  );
}
