import { useTheme } from '@/context/ThemeContext';
import { LucideIcon, Scale } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface AboutCardProps {
  Icon: LucideIcon;
  description: string;
  imgSrc: string;
}

const AboutCard = ({Icon, description, imgSrc}: AboutCardProps) => {
  const { currentTheme } = useTheme();


  return (
    <div className='w-full flex flex-col items-center justify-center h-[300px] shadow-lg rounded-lg relative'>
      <div className='relative h-[75%] w-full rounded-lg'>
        <div className='absolute top-0 w-full h-full bg-theme-blue/50 z-10 rounded-t-lg'></div>

        <Image src={imgSrc} fill className='w-full h-full object-cover rounded-t-lg' alt='img' />
      </div>

      <div style={{backgroundColor: currentTheme.colors.backgroundMuted}} className=' h-[25%] w-full rounded-b-lg flex items-center px-4 gap-4'>
        <Icon style={{color: currentTheme.colors.secondary}} size={32} />
        <h2 style={{color: currentTheme.colors.foreground}} className='text-lg'>{description}</h2>
      </div>
    </div>
  )
}

export default AboutCard