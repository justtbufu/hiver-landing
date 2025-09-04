import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Hiver
              </span>
            </Link>
          </div>
          <div className="flex justify-end w-full">
            <div className="text-right">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legale
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/termini" className="hover:underline">
                    Termini & Condizioni
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025 <Link href="/" className="hover:underline">Hiver</Link>. Tutti i diritti riservati.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 8 19">
                <path d="M6.135 3H8V0H6.135C4.27 0 3 1.292 3 3.429V6H0v3h3v10h3V9h2.461l.539-3H6V3.429C6 3.191 6.191 3 6.135 3z"/>
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337 3a9.864 9.864 0 0 1-3.127 1.196 4.916 4.916 0 0 0-8.385 4.482A13.949 13.949 0 0 1 1.671 3.149a4.917 4.917 0 0 0 1.523 6.556A4.903 4.903 0 0 1 .964 9.1v.062a4.917 4.917 0 0 0 3.946 4.818 4.897 4.897 0 0 1-2.212.084 4.918 4.918 0 0 0 4.588 3.417 9.867 9.867 0 0 1-6.102 2.105c-.396 0-.787-.023-1.175-.07A13.945 13.945 0 0 0 7.548 21c9.142 0 14.307-7.721 14.307-14.426 0-.22-.004-.439-.014-.657A10.257 10.257 0 0 0 24 4.557z"/>
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}