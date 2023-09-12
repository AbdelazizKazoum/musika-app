import Image from "next/image";
import Header from "../components/Header";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import ListItem from "../components/ListItem";

export default function Home() {
  return (
    <main className="bg-neutral-800 h-full w-full overflow-hidden overflow-y-auto rounded ">
      <Header className="">
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Welcome back</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
          <ListItem href="liked" name="Liked songs" image="/images/liked.png" />
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="">
          <h1 className="text-white text-2xl font-bold"> Newest songs</h1>
        </div>
        <div>List of songs</div>
      </div>
    </main>
  );
}
