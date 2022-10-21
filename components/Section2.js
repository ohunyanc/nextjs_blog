import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
import getPost from "../library/helper";
import Fetcher from "../library/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function Section2() {
  const { data, isLoading, isError } = Fetcher("api/posts");
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      {/*Grid Columns*/}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data?.map((value, index) => (
          <Post data={value} key={index}></Post>
        ))}
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, category, img, published, author } = data;
  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img || "/"}
              width={500}
              height={350}
              alt="image"
              className="rounded"
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={`/posts/${id}`}>
            <a className="text-emerald-500 hover:text-emerald-800">
              {category || "Unknown"}
            </a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-800 hover:text-gray-600">
              {published || "Unknown"}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {title || "Title"}
            </a>
          </Link>
        </div>
        <p className="text-gray py-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
          doloremque vel cumque consequuntur dolore id tempora consequatur
          voluptas exercitationem quibusdam.
        </p>
        {author ? <Author {...author}></Author> : <></>}
      </div>
    </div>
  );
}
