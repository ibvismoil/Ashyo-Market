"use client"
import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react'

const Modal: FC<{ children: ReactNode, open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }> = ({ children, open, setOpen }) => {
  if (!open) return null

  return (
    <div
      onClick={(e) => (e.target as HTMLDivElement).id === 'modal-wrapper' && setOpen(false)}
      id="modal-wrapper"
      className="fixed top-0 left-0 w-full h-screen z-[99999] bg-[#00000097] backdrop-blur flex items-center justify-center"
    >
      <div className="bg-white p-6 rounded-lg w-[450px] shadow-xl">
        {children}
      </div>
    </div>
  )
}

export default Modal
