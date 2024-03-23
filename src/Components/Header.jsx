import { Bars3Icon } from '@heroicons/react/24/solid'
const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src="./assets/Logo.svg" alt="Logo" />
        <button className='bg-gradient-to-r from-slate-400 to-slate-900 text-xs text-white rounded-full px-2.5 py-1.5'>Hosterr is Hiring!</button>
      </div>
      <ul className='hidden lg:flex justify-between items-center gap-6 text-gray-500'>
        <li><a href='#'>Plans</a></li>
        <li><a href='#'>Find Domains</a></li>
        <li><a href='#'>Why Hosterr?</a></li>
      </ul>
      <div className='hidden lg:flex justify-center items-center gap-6'>
        <a href='#'>Sign In</a>
        <button className="rounded-lg px-4 py-3 text-white bg-gray-500 hover:bg-gray-700">Join Waitlist</button>
      </div>
      <div className='lg:hidden'>
        <Bars3Icon height={30} width={30}/>
      </div>
    </div>
  );
};
export default Header;
