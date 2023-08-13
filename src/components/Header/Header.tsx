import Link from "next/link";
export const Header = () => {
  return (
    <div className="navbar bg-primary fixed top-0 z-10 py-[1.6rem] px-4 items-stretch">
      <div className="flex-1">
        <a href="/" className="before:content-[var(--logo-uri)]"></a>
      </div>
      <div className="flex-none dropdown dropdown-end">
        <label
          tabIndex={0}
          className="btn btn-square btn-ghost btn-sm w-10 h-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            className="inline-block w-5 h-5 stroke-current text-secondary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="mt-7 z-[1] p-2 shadow menu menu-sm dropdown-content bg-secondary rounded w-52"
        >
          <li>
            <Link
              href="/harness"
              className="text-primary hover:text-secondary hover:bg-primary"
            >
              Harness Bank
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-primary hover:text-secondary hover:bg-primary"
            >
              Everglades Credit Union
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
