
import { Button } from './ui/button';

export default function Footer() {
    const openLink = (url: string | URL | undefined) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
  return (
    <div className='fixed bottom-0 left-0 w-full  text-white z-20 p-4 sm:p-6'>
      <div className='flex items-center justify-center space-x-4'>
        <Button onClick={()=> openLink('https://linktr.ee/Bharat_29_11')} className='inline-flex px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold bg-transparent hover:bg-black rounded-lg transition-colors'>
          Linktree
        </Button>
        <Button onClick={()=> openLink('https://ibharatbhushan.netlify.app/')} className='inline-flex px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold bg-transparent hover:bg-black rounded-lg transition-colors'>
          Portfolio
        </Button> 
      </div>
    </div>
  );
}
