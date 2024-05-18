import React from 'react';

interface Props {
  machine: any;
  cpu: any;
  memory: any;
}

const StatCard = ({ machine, cpu, memory }: Props) => {
  return (
    <div className=''>
      {/* <h6
        // style={{ writingMode: 'vertical-lr', textOrientation: 'upright' }}
        className='text-center font-bold text-secondary'
      >
        {machine}
      </h6> */}
      <div className='flex flex-row'>
        <div className='stats shadow'>
          <div className='stat w-52'>
            <div className='stat-figure text-secondary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-8 h-8 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                ></path>
              </svg>
            </div>
            <div className='stat-title'>CPU</div>

            {cpu && (
              <div className='stat-value transition-all '>{cpu[3]?.usage}</div>
            )}

            <div className='stat-desc'>Jan 1st - Feb 1st</div>
          </div>

          <div className='stat w-56'>
            <div className='stat-figure text-secondary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-8 h-8 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                ></path>
              </svg>
            </div>
            <div className='stat-title '>Used Memory</div>
            {memory && (
              <>
                <div className='stat-value text-[1.75rem]'>
                  {memory.used}/ <span className='text-lg'>{memory.total}</span>
                </div>
                <div className='stat-desc'>↗︎ {memory.usedPercentage}%)</div>
              </>
            )}
          </div>

          <div className='stat w-56'>
            <div className='stat-figure text-secondary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-8 h-8 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
                ></path>
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
