import useSWR from "swr";
import Image from "next/image";
import Loading2 from "../Atom/skeleton/Loading2";
import { useRouter } from "next/router";

interface Props {
  search: string;
  value: any;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ResultSearch({ search, value }: Props) {
  const myLoader = ({ src }: any) => {
    return `${src}`;
  };

  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/${value}?q=${search}&limit=30`,
    fetcher
  );

  var loading2 = !data && !error;

  const router = useRouter();

  return (
    <>
      {search && (
        <h1 className="text-md lg:text-xl text-slate-800 text-left lg:ml-12 ml-4 lg:my-4 mt-6 font-bold dark:text-white">
          Hasil pencarian {value} : <span className="underline">{search}</span>
        </h1>
      )}
      <div className="w-full h-auto text-center lg:mt-4 mt-4">
        {loading2 && <Loading2 title={`Mohon tunggu...`}></Loading2>}
        {(data?.data || []).length ? (
          <div className="flex w-full h-auto flex-wrap justify-center lg:p-6 px-2 lg:gap-x-4 lg:gap-y-8 rounded-md">
            {data &&
              data?.data?.map((data: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="flex w-full items-center px-1 my-1 py-1 mx-1  shadow-md rounded-md"
                  >
                    <Image
                      onClick={() => router.push(`/${value}/${data.mal_id}`)}
                      loader={myLoader}
                      unoptimized={true}
                      src={data.images.jpg.image_url}
                      alt={data.title}
                      width={100}
                      height={100}
                      className="w-24 h-auto rounded-md"
                    ></Image>
                    <div className="flex w-full mx-2">
                      <div className="flex flex-col w-3/4 text-start">
                        <h1
                          onClick={() =>
                            router.push(`/${value}/${data.mal_id}`)
                          }
                          className="text-lg font-bold hover:underline cursor-pointer"
                        >
                          {data.title}
                        </h1>
                        <span className="font-sans">
                          {value === "anime" ? (
                            <small>
                              {data.type} ( {data.episodes} Eps )
                            </small>
                          ) : (
                            <small>
                              {data.type} ({" "}
                              {data.volumes === null ? " ?" : `${data.volumes}`}{" "}
                              Vol )
                            </small>
                          )}
                        </span>
                        <small>{data.members} Members</small>
                        {value === "anime" ? (
                          <small className="lg:flex font-sans font-semibold">
                            {data.aired?.string}
                          </small>
                        ) : (
                          <small className="lg:flex font-sans font-semibold">
                            {data.published?.string}
                          </small>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <Loading2 title={`${value} "${search}" tidak ditemukan`}></Loading2>
        )}
      </div>
    </>
  );
}
