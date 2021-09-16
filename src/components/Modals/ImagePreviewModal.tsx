import * as React from 'react'
import { ModalWrapper, Reoverlay } from 'reoverlay';
import { RiCloseLine } from 'react-icons/ri'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import 'reoverlay/lib/ModalWrapper.css';

interface image {
    src: string
}

interface PropsType {
    images: Array<image>
}

const ImagePreviewModal = ({ images }: PropsType) => {
    const showFlip = images.length > 0 ? true : false
    const [step, setStep] = React.useState(0)
    const [zoom, setZoom] = React.useState(false)
    const imageRef = React.useRef(null)
    const [imageScale, setImageScale] = React.useState(1)
    const [origin, setOrigin] = React.useState('center')
    const windowWidth = window.innerWidth

    const handleClick = (e: React.MouseEvent) => {
        const imageWidth = imageRef.current.clientWidth
        const clientY = e.clientY
        setOrigin(`center ${clientY}px`)
        const scale = Math.floor((windowWidth / 3 * 2) / imageWidth)
        if (scale > 2) {
            setImageScale(scale)
        } else {
            setImageScale(2)
        }
        setZoom(!zoom)
    }

    const handleSwitchPages = (num: number) => {
        setImageScale(1)
        setZoom(false)
        if (num > 0) {
            if (step === images.length - 1) {
                setStep(0)
            } else {
                setStep(step => step + num)

            }
        } else {
            if (step === 0) {
                setStep(images.length - 1)
            } else {
                setStep(step => step + num)
            }
        }
    }


    const handleNextPage = () => handleSwitchPages(1)

    const handlePrevPage = () => handleSwitchPages(-1)

    return (
        <ModalWrapper animation='zoom' contentContainerClassName='bg-transparent'>
            <div className={`relactive h-screen w-screen flex justify-center cursor-zoom-out ${zoom ? 'overflow-scroll' : 'overflow-hidden'}`}>
                <div className='absolute top-2.5 right-2.5 z-30 pointer-events-none'>
                    <RiCloseLine className='text-white text-3xl ml-2 cursor-pointer z-30 pointer-events-auto ' onClick={() => Reoverlay.hideAll()} />
                </div>
                {showFlip && (
                    <div className='absolute left-0 right-0 top-1/2 flex justify-between px-2.5 z-30 pointer-events-none'>
                        <HiOutlineChevronLeft className='text-white text-3xl cursor-pointer pointer-events-auto z-30' onClick={() => handlePrevPage()} />
                        <div className='flex-1 pointer-events-none' />
                        <HiOutlineChevronRight className='text-white text-3xl cursor-pointer pointer-events-auto z-30' onClick={() => handleNextPage()} />
                    </div>
                )}
                <div className='flex-1 z-0' onClick={() => Reoverlay.hideAll()} />
                <img ref={imageRef} src={images[step].src} onClick={(e: React.MouseEvent) => handleClick(e)} style={{ transform: `scale(${zoom ? imageScale : 1})`, transformOrigin: origin }} className={`ease-in-out duration-300 z-20 transition-all h-screen ${zoom ? 'cursor-zoom-out object-contain' : 'cursor-zoom-in  object-contain'}`} alt="" />
                <div className='flex-1 z-0' onClick={() => Reoverlay.hideAll()} />
            </div>
        </ModalWrapper>
    )
}

export default ImagePreviewModal