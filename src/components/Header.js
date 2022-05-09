import Toggle from "./Toggle";

const Header = () => {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-800 sticky top-0 border-2 border-white border-b-gray-400 dark:border-gray-800 dark:border-b-slate-500">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Fun With GPT-3
          </span>
        </a>
        <div className="flex items-center md:order-2">
          <Toggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
