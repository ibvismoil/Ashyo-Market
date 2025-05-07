import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import { useTranslations } from 'next-intl';

const Naushnik = () => {
  const t = useTranslations('AirBase');

  return (
    <div className="mb-[40px] mt-[20px] px-4">
      <div className="containers">
        <div className="relative flex flex-col items-center rounded-[10px] bg-[#282828] p-4 sm:flex-row sm:justify-between">
          <div className="mb-6 sm:mb-0 sm:ml-6">
            <Image className="max-w-[518px] h-auto sm:w-[518px] sm:h-[493px]" src="/images/airbase.png" alt="Naushnik img" width={518} height={493}/>
          </div>
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left sm:mr-6 sm:mt-16">
            <h3 className="w-full max-w-[438px] text-[20px] font-semibold leading-tight text-[#ffffff] sm:text-[32px] sm:leading-normal">
              {t('title')}
            </h3>
            <Button extrStyle="bg-[#ffffff] mt-4 font-medium !text-[#111111] text-[14px] px-6 py-2 sm:text-[16px] sm:mt-5"title={t('button')}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Naushnik;