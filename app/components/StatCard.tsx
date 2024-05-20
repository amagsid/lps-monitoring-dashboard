import React from 'react';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { IoHardwareChipSharp } from 'react-icons/io5';
import { VscPulse } from 'react-icons/vsc';

interface Props {
  machine: any;
  cpu: any;
  memory: any;
}

const StatCard = ({ machine, cpu, memory }: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className=''>
      <div className='flex flex-row'>
        <div className='stats shadow'>
          <div className='stat w-52'>
            <div className='stat-figure text-secondary'>
              <VscPulse size={25} color={colors.colorPop} />
            </div>
            <div className='stat-title'>CPU</div>

            {cpu && (
              <div className='stat-value transition-all '>{cpu[3]?.usage}</div>
            )}

            <div className='stat-desc'>Jan 1st - Feb 1st</div>
          </div>

          <div className='stat w-56'>
            <div className='stat-figure text-secondary'>
              <IoHardwareChipSharp size={25} color={colors.colorPop} />
            </div>
            <div className='stat-title '>Used Memory</div>
            {memory && (
              <>
                <div className='stat-value text-[1.75rem]'>
                  {memory.used}/ <span className='text-lg'>{memory.total}</span>
                </div>
                <div className='stat-desc'>↗︎ ({memory.usedPercentage}%)</div>
              </>
            )}
          </div>

          <div className='stat w-56'>
            <div className='stat-figure text-secondary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='40px'
                viewBox='0 -960 960 960'
                width='40px'
                fill={colors.colorPop}
              >
                <path d='M400-400v-160h160v160H400Zm40-40h80v-80h-80v80Zm-60 261.54V-240h-75.38q-27.62 0-46.12-18.5Q240-277 240-304.62V-380h-61.54v-40H240v-120h-61.54v-40H240v-75.38q0-27.62 18.5-46.12Q277-720 304.62-720H380v-61.54h40V-720h120v-61.54h40V-720h75.38q27.62 0 46.12 18.5Q720-683 720-655.38V-580h61.54v40H720v120h61.54v40H720v75.38q0 27.62-18.5 46.12Q683-240 655.38-240H580v61.54h-40V-240H420v61.54h-40ZM655.38-280q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93v-350.76q0-9.24-7.69-16.93-7.69-7.69-16.93-7.69H304.62q-9.24 0-16.93 7.69-7.69 7.69-7.69 16.93v350.76q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69h350.76ZM480-480Z' />
              </svg>
            </div>
            <div className='stat-title'>Free Memory</div>
            {memory && (
              <>
                {' '}
                <div className='stat-value'>{memory.free}</div>{' '}
                <div className='stat-desc'>↘︎ ({memory.freePercentage}%)</div>{' '}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
