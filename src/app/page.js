import Abouts from "./components/Abouts";
import Footers from "./components/Footers";
import Jumbotron from "./components/Jumbotron";
import Menus from "./components/Menus";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 w-full min-h-screen">
      <Jumbotron />
      <Abouts/>
      <Menus/>
      <Footers/>
    </main>
  );
}
