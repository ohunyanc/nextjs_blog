import Link from "next/link";
import Image from "next/image";
import Author from "./Author";
import Fetcher from "../../library/fetcher";
import Spinner from "./spinner";
import Error from "./error";

export default function Related() {
  const { data, isLoading, isError } = Fetcher("api/posts");
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related Posts</h1>
      <div className="flex flex-col gap-10">
        {data?.map((value, index) => (
          <Post key={index} data={value}></Post>
        ))}
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, category, img, published, author } = data;

  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img || "/"}
              width={300}
              height={200}
              alt="image"
              className="rounded"
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${id}`}>
            <a className="text-emerald-500 hover:text-emerald-800">
              {category || "No Category"}
            </a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-800 hover:text-gray-600">
              {published || ""}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {title || "No Title"}
            </a>
          </Link>
        </div>
        {author ? <Author {...author}></Author> : <></>}
      </div>
    </div>
  );
}
