import { User } from 'lucide-react';
import React from 'react'

export interface TeamCardProps {
    imageSrc?: string;
    name: string;
    position: string;
}

const TeamCard = ({name, position}: TeamCardProps) => {
  return (
    <div className='w-full h-full rounded-lg shadow-xl bg-white flex flex-col items-center justify-center'>
        <div className='w-full h-[75%] bg-theme-blue rounded-t-lg flex items-center justify-center'>
            <User className='text-theme-yellow' size={72} />
        </div>
        <div className='w-full h-[25%] flex flex-col justify-center gap-2 p-4'>
            <h2 className='font-cormorant font-bold text-3xl'>{name}</h2>
            <p>{position}</p>
        </div>
    </div>
  )
}

export default TeamCard