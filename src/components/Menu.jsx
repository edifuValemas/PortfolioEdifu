export const Menu = (props) => {
    const { onSectionChange, menuOpened, setMenuOpened } = props;
  
    return (
      <>
        <button
          onClick={() => setMenuOpened(!menuOpened)}
          className="z-20 fixed top-12 right-12 p-3 shadow-xl bg-white w-11 h-11 rounded-md"
        >
          <div
            className={` h-0.5 rounded-md w-full transition-all ${
              menuOpened ? "rotate-45 bg-teal-400  translate-y-0.5" : "bg-fuchsia-400"
            }`}
          />
          <div
            className={` h-0.5 rounded-md w-full my-1 ${
              menuOpened ? "hidden" : " bg-fuchsia-400"
            }`}
          />
          <div
            className={`bg-fuchsia-400 h-0.5 rounded-md w-full transition-all ${
              menuOpened ? "-rotate-45 bg-teal-400" : ""
            }`}
          />
        </button>
        <div
          className={`z-10 drop-shadow-md fixed top-0 right-0 bottom-0 bg-teal-400 transition-all overflow-hidden flex flex-col
        ${menuOpened ? "w-80" : "w-0"}`}
        >
          <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
            <MenuButton label="About" onClick={() => onSectionChange(0)} />
            <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
            <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
            <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
          </div>
        </div>
      </>
    );
  };
  
  const MenuButton = (props) => {
    const { label, onClick } = props;
    return (
      <button
        onClick={onClick}
        className="text-2xl font-bold cursor-pointer hover:text-indigo-400 shadow-sm transition-colors"
      >
        {label}
      </button>
    );
  };
  