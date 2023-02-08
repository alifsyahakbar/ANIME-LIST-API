import React from "react";

export default function ListInformasi({ data }: any) {
  return (
    <div>
      <div className="flex mt-2 mb-4">
        <div className="">
          <table className="mx-2">
            <tbody>
              <tr>
                <td>Alternative Title</td>
                <td className="px-2">:</td>
                <td className="font-bold text-bold">{data.title}</td>
              </tr>
              <tr>
                <td>Type</td>
                <td className="px-2">:</td>
                <td className="font-bold text-bold">{data.type}</td>
              </tr>
              <tr>
                <td>Episodes</td>
                <td className="px-2">:</td>
                <td className="text-bold">{data.episodes} Episode</td>
              </tr>
              <tr>
                <td>Status</td>
                <td className="px-2">:</td>
                <td className="font-bold text-bold">{data.status}</td>
              </tr>
              <tr>
                <td>Aired</td>
                <td className="px-2">:</td>
                <td className="font-bold text-bold">{data.aired.string}</td>
              </tr>
              <tr>
                <td>Premiered</td>
                <td className="px-2">:</td>
                <td className="text-bold">
                  {data.season} {data.year}
                </td>
              </tr>
              <tr>
                <td>Broadcast</td>
                <td className="px-2">:</td>
                <td className="font-bold text-bold">{data.broadcast.string}</td>
              </tr>
              <tr>
                <td>Producers</td>
                <td className="px-2">:</td>
                <td className="text-bold">
                  {data?.producers?.map((a: any) => a.name + ", ")}
                </td>
              </tr>
              <tr>
                <td>Lisensors</td>
                <td className="px-2">:</td>
                <td className="text-bold">
                  {data?.licensors?.map((a: any) => a.name + ", ")}
                </td>
              </tr>
              <tr>
                <td>Studios</td>
                <td className="px-2">:</td>
                <td className="text-bold">
                  {data?.studios?.map((a: any) => a.name + ", ")}
                </td>
              </tr>
              <tr>
                <td>Sources</td>
                <td className="px-2">:</td>
                <td className="text-bold">{data.source}</td>
              </tr>
              <tr>
                <td>Genres</td>
                <td className="px-2">:</td>
                <td className="text-bold">
                  {data?.genres?.map((a: any) => a.name + ", ")}
                </td>
              </tr>
              <tr>
                <td>Themes</td>
                <td className="px-2">:</td>
                <td className="text-bold">
                  {data?.themes?.map((a: any) => a.name + ", ")}
                </td>
              </tr>
              <tr>
                <td>Duration</td>
                <td className="px-2">:</td>
                <td className="font-bold text-bold">{data.duration}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td className="px-2">:</td>
                <td className="font-bold text-bold">{data.rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
