import { useTheme } from '@/context/ThemeContext';
import { User } from 'lucide-react';
import React from 'react'

export interface TeamCardProps {
    imageSrc?: string;
    name: string;
    position: string;
}

const TeamCard = ({name, position}: TeamCardProps) => {
  const { currentTheme } = useTheme();
  return (
    <div style={{backgroundColor: currentTheme.colors.background}} className='w-full h-full rounded-lg shadow-xl flex flex-col items-center justify-center'>
        <div style={{backgroundColor: currentTheme.colors.primary}} className='w-full h-[75%] rounded-t-lg flex items-center justify-center'>
            <User color={currentTheme.colors.secondary} size={72} />
        </div>
        <div className='w-full h-[25%] flex flex-col justify-center gap-2 p-4'>
            <h2 style={{color: currentTheme.colors.foreground}} className='font-cormorant font-bold text-3xl'>{name}</h2>
            <p style={{color: currentTheme.colors.foreground}}>{position}</p>
        </div>
    </div>
  )
}

export default TeamCard