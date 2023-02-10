import { Tab } from "@headlessui/react";
import Character from "../Organisme/Character";
import ListInformasi from "../Atom/ListInformasi";
import RelationSection from "./RelationSection";
import TailerVideo from "./TailerVideo";

export default function MyTab({ data }: any) {
  const array = ["details", "character", "rekomendasi"];
  return (
    <div className="w-full mx-1">
      <Tab.Group>
        <Tab.List className={"text-center mb-6 space-x-6"}>
          {array?.map((item: any, index: number) => (
            <Tab key={index} className={"outline-none focus:outline-none"}>
              {({ selected }) => (
                <div
                  className={`pb-2 font-bold transition-all ease-out duration-150 capitalize text-bold outline-none focus:outline-none ${
                    selected
                      ? "border-b-2 border-indigo-600 focus:outline-none text-black dark:text-white"
                      : " text-gray-400"
                  }`}
                >
                  {item}
                </div>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <ListInformasi data={data}></ListInformasi>
            <TailerVideo
              data={data}
              width={"100%"}
              height={"100%"}
            ></TailerVideo>
          </Tab.Panel>
          <Tab.Panel>
            <Character value={data}></Character>
          </Tab.Panel>
          <Tab.Panel>
            <RelationSection anime={data} value={"anime"}></RelationSection>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
