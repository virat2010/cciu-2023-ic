import "./globals.css";
import Link from "next/link";
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="buisness">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <progress />
        <div
          id="navbar"
          className="navbar bg-base-100 border-b border-neutral-500"
        >
          <div className="center text-2xl">
            <Link href="/">
              <span className="font-quicksand font-extrabold transition-colors">
                <span className="text-lime-500 font-extrabold">S</span>
                <span className="text-black dark:text-white">enior</span>
                <span className="text-white bg-lime-500 pl-1.5 pr-2">SAFE</span>
              </span>
            </Link>
          </div>
          <div className="ml-auto">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">1</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">1 Items</span>
                  <span className="text-info">Subtotal: $12.57</span>
                  <div className="card-actions">
                    <Link href="/cart">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://avatars.githubusercontent.com/u/59180983?v=4" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
