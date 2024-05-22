import React from 'react';
import { Box, IconButton, InputAdornment, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import { InputBase } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { MdErrorOutline } from 'react-icons/md';

interface Props {
  loading: Boolean;
  isPaused: Boolean;
  isError: Boolean;
  error: string;
}

const TopBar = ({ loading, isPaused, error, isError }: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <div className='flex flex-row w-full items-center justify-between p-4 px-12'>
      <div
        style={{ backgroundColor: colors.primary[700] }}
        className={`flex rounded `}
      >
        {' '}
        <InputBase className=' px-2' placeholder='search' />
        <IconButton>
          {' '}
          <SearchIcon> </SearchIcon>
        </IconButton>
      </div>
      {/* <button onClick={() => setPause(!isPaused)}> 
          {isPaused ? 'Resume' : 'Pause'}
        </button> */}

      {/* {isPaused && <h1> paused</h1>} */}

      <div className='flex flex-row items-center justify-center'>
        <h4 className='p-2'>status:</h4>
        <span>
          {!isError && loading && (
            <l-tail-chase
              size='20'
              speed='1.75'
              color={colors.colorPop}
            ></l-tail-chase>
          )}
          {isError && (
            <div className='flex flex-row items-center justify-center gap-1'>
              <MdErrorOutline color={'red'} />
              <h1 className=' text-sm'>check connection and try again</h1>
            </div>
          )}
          {!isPaused && !loading && (
            <div className='flex items-center align-center'>
              <l-ping size='45' speed='2' color={colors.colorPop}></l-ping>
            </div>
          )}
        </span>
      </div>

      <div className='flex'>
        <IconButton className='stroke-1' onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          {' '}
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          {' '}
          <SettingsOutlinedIcon />{' '}
        </IconButton>
        <IconButton>
          {' '}
          <PersonOutlinedIcon />{' '}
        </IconButton>
      </div>
    </div>
  );
};

export default TopBar;
