import { useState } from "react"
import Modal from "./Gallery/Modal";



export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState<string | null>(null);

  function openModal(img: string) {
    return () => {
      setImg(img);
      setOpen(true);
    }
  }
  
  function closeModal() {
    setImg(null);
    setOpen(false);
  }

  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-2 lg:pb-20">
      <Modal isOpen={open} closeModal={closeModal} img={img} />
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <img
              onClick={openModal('/COWORKING_1.0007.png')}
              alt="gallery"
              className="block cursor-pointer h-full w-full rounded-lg object-cover object-center"
              src="/COWORKING_1.0007.png"
              loading="lazy"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              onClick={openModal('/GYM_1.0001.png')}
              alt="gallery"
              className="block cursor-pointer h-full w-full rounded-lg object-cover object-center"
              src="/GYM_1.0001.png"
              loading="lazy"
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              onClick={openModal('/SOCIAL_EXT_1.0001.png')}
              alt="gallery"
              className="block cursor-pointer h-full w-full rounded-lg object-cover object-center"
              src="/SOCIAL_EXT_1.0001.png"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              onClick={openModal('/LOBBY_1.0008.png')}
              className="block cursor-pointer h-full w-full rounded-lg object-cover object-center"
              src="/LOBBY_1.0008.png"
              loading="lazy"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              onClick={openModal('/TERRAZA_1.0000.png')}
              alt="gallery"
              className="block cursor-pointer h-full w-full rounded-lg object-cover object-center"
              src="/TERRAZA_1.0000.png"
              loading="lazy"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              onClick={openModal('/SOCIAL_1.0001.png')}
              alt="gallery"
              className="block cursor-pointer h-full w-full rounded-lg object-cover object-center"
              src="/SOCIAL_1.0001.png"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              onClick={openModal('/LOBBY_1.0007.png')}
              alt="gallery"
              className="block cursor-pointer h-full w-full rounded-lg object-cover object-center"
              src="/LOBBY_1.0007.png"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              onClick={openModal('/LOBBY_1.0001.png')}
              alt="gallery"
              className="block cursor-pointer h-full w-full rounded-lg object-cover object-center"
              src="/LOBBY_1.0001.png"
              loading="lazy"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              onClick={openModal('/SOCIAL_1.0000.png')}
              alt="gallery"
              className="block cursor-pointer h-full w-full rounded-lg object-cover object-center"
              src="/SOCIAL_1.0000.png"
              loading="lazy"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              onClick={openModal('/TERRAZA_1.0001.png')}
              alt="gallery"
              className="block cursor-pointer h-full w-full rounded-lg object-cover object-center"
              src="/TERRAZA_1.0001.png"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="w-full p-1 md:p-2">
          <img
            onClick={openModal('/PETPARK_1.0000.png')}
            alt="gallery"
            className="block cursor-pointer rounded-lg object-cover object-center"
            src="/PETPARK_1.0000.png"
            width={"100%"}
            loading="lazy"
          />
        </div>
      </div>
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2 max-h-full overflow-hidden">
            <img
              onClick={openModal('/Exterior2.0000.png')}
              alt="gallery"
              className="block cursor-pointer rounded-lg object-cover object-center max-h-[650px]"
              src="/Exterior2.0000.png"
              width={"100%"}
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2 h-full overflow-hidden">
            <img
              onClick={openModal('/Exterior3.0000.png')}
              alt="gallery"
              className="block cursor-pointer rounded-lg object-cover object-center max-h-[650px]"
              src="/Exterior3.0000.png"
              width={"100%"}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
