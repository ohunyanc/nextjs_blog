import {
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input type="text" className="input-text" placeholder="Search..." />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href="/">
            <a className="font-bold uppercase text-3xl">Design</a>
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <Link href="/">
              <a>
                <AiFillInstagram color="#065f46" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <AiFillTwitterSquare color="#065f46" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <AiFillYoutube color="#065f46" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
