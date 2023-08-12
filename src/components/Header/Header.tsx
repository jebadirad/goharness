export const Header = () => {
  return (
    <div className="navbar bg-white fixed top-0 z-10 py-[1.6rem] px-4 items-stretch">
      <div className="flex-1">
        <a className="">daisyUI</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost btn-sm w-10 h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
