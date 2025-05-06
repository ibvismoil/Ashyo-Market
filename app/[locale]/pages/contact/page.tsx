"use client"
import Button from '@/components/Button'
import HeaderInput from '@/components/AboutUsInput'
import { Link } from '@/i18n/navigation'
import React, { useState } from 'react'

function ContactsPage() {
  const [user, setUser] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    fikr: '',
  })

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='containers'>
        <div className='flex gap-3 text-[#B6BABF] text-[14px] max-[600px]:text-[12px] max-[600px]:mb-[8px] font-normal mt-[20px] mb-[22px]'>
          <Link href={'/'}>Home</Link> <span>/</span> <p>Contact</p> <span>/</span>
        </div>
        <h2 className='text-[#0A1729] font-bold text-[32px] max-[700px]:text-2xl max-[500px]:text-xl'>Contact Us</h2>
        <p className='text-[#00000099] text-base leading-[130%] max-w-[771px] max-[700px]:text-sm max-[500px]:text-xs'>
          Feel free to contact us using the form below.
        </p>

        <form className='max-w-[690px]'>
          <div className='flex gap-[10px] mt-[35px] max-[500px]:mt-[10px]'>
            <label className="relative w-full">
            <span className='text-[#848B93] text-[12px] ml-[12px]'>Ismoil</span>
              <HeaderInput name="name" type="text" extraStyle="w-full max-[600px]:!text-[12px] max-[600px]:!py-[8px] mt-[4px] max-[350px]:py-1 max-[350px]:text-[15px] max-[350px]:rounded-[3px]" value={user.name} onChange={handleChangeValue}/>
            </label>
            <label className="relative w-full">
            <span className='text-[#848B93] text-[12px] ml-[12px]'>Familiya</span>
              <HeaderInput name="surname" type="text" extraStyle="w-full max-[600px]:!text-[12px] max-[600px]:!py-[8px] mt-[4px] max-[350px]:py-1 max-[350px]:text-[15px] max-[350px]:rounded-[3px]" value={user.surname} onChange={handleChangeValue}/>
            </label>
          </div>

          <div className='flex gap-[10px] mt-[30px] max-[500px]:mt-[10px] max-[500px]:flex-col'>
            <label className="relative w-full">
            <span className='text-[#848B93] text-[12px] ml-[12px]'>Telfon raqam</span>
              <HeaderInput name="phone" type="text" extraStyle="w-full max-[600px]:!text-[12px] max-[600px]:!py-[8px] mt-[4px] max-[350px]:py-1 max-[350px]:text-[15px] max-[350px]:rounded-[3px]" value={user.phone} onChange={handleChangeValue}/>
            </label>
            <label className="relative w-full">
            <span className='text-[#848B93] text-[12px] ml-[12px]'>Elktronpochta</span>
              <HeaderInput name="email" type="text" extraStyle="w-full max-[600px]:!text-[12px] max-[600px]:!py-[8px] mt-[4px] max-[350px]:py-1 max-[350px]:text-[15px] max-[350px]:rounded-[3px]" value={user.email} onChange={handleChangeValue}/>
            </label>
          </div>

          <label className="relative w-full mt-[30px] block max-[500px]:mt-[10px]">
          <span className='text-[#848B93] text-[12px] ml-[12px]'></span>
            <textarea name="aql" className="w-full max-[500px]:h-[60px] h-[130px] mt-[4px] px-3 py-2 rounded-md border border-[#EBEFF3] bg-[#EBEFF3] text-[16px] resize-none max-[350px]:py-1 max-[350px]:text-[15px] max-[350px]:rounded-[3px]"
              value={user.fikr}
              onChange={(e) => setUser({ ...user, fikr: e.target.value })}/>
          </label>

          <Button title="Submit" extrStyle="w-full mt-[30px] max-[600px]:text-[12px] max-[500px]:mt-[10px] max-[500px]:py-[10px]"/>
        </form>
      </div>

      <div className="w-full h-[400px] max-[600px]:mt-[60px] max-[600px]:h-[200px] mt-[115px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11985.080658903998!2d69.22955243393349!3d41.32473827171448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b722d3227a5%3A0x92eae4f5ce0cbe00!2z0KXQsNC00YDQsCwg0KLQsNGI0LrQtdC90YIsINCi0LDRiNC60LXQvdGC0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1746379212056!5m2!1sru!2s"
          className="w-full h-full border-0 rounded-md"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  )
}

export default ContactsPage
