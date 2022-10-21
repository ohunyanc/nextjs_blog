import Image from "next/image";
import Link from "next/link";

export default function Author({ name, img, designation }) {
  if (!name && !img) return <></>;
  return (
    <div className="author flex py-5">
      <Image
        src={img || "/"}
        className="rounded-full"
        alt="author"
        width={60}
        height={60}
      />
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"}>
          <a className="text-md font-bold text-gray-800 hover:text-gray-600">
            {name || "No Name"}
          </a>
        </Link>
        <span className="text-sm text-emerald-800">{designation || ""}</span>
      </div>
    </div>
  );
}
