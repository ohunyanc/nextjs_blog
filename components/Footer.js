import Link from "next/link";
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import Newsletter from "./_child/Newsletter";

export default function Footer() {
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  };

  return (
    <footer className="bg-gray-50" style={bg}>
      <Newsletter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
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
          <p className="py-5 text-gray-400">
            Copyright &copy;2022 Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </p>
          <p className="text-gray-400 text-center">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}
