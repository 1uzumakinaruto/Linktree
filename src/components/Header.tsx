
import { Button } from './ui/button';

export default function Header() {
    const openLink = (url: string | URL | undefined) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
  return (
    <div className='fixed top-0 left-0 w-full  flex items-center justify-center text-white h-16 p-4 sm:p-6 z-50'>
      <div className='flex items-center space-x-4'>
        <Button onClick={()=> openLink('https://www.linkedin.com/in/bhushan9473')} className='inline-flex px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold bg-transparent hover:bg-black rounded-lg transition-colors'>
          LinkedIn
        </Button>
        <Button onClick={()=> openLink('https://github.com/1uzumakinaruto')} className='inline-flex px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold bg-transparent hover:bg-black rounded-lg transition-colors'>
          GitHub
        </Button>
      </div>
    </div>
  );
}
