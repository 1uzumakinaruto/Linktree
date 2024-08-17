import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export function RightSidebar() {
  return (
    <div className='fixed right-0 w-25 h-full flex flex-col items-center justify-between pt-16 pb-16 sm:pt-20 sm:pb-20 p-4 sm:p-6 z-20 text-white'>
      <Link to={'/resume'} className='w-25'>
         <Button
        className='w-full py-2 sm:py-3 text-sm sm:text-lg font-semibold bg-transparent hover:bg-black rounded-lg transition-colors transform rotate-90'
      >
        Resume
         </Button>
      </Link>
     <Link to={'/experience'} className='w-25'>
     <Button
        className='w-full py-2 sm:py-3 text-sm sm:text-lg font-semibold bg-transparent hover:bg-black rounded-lg transition-colors transform rotate-90'
      >
        Certificates
      </Button>
     </Link>
    </div>
  );
}
