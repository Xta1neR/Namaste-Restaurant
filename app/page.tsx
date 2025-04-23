import Header from "./components/header";
import Hero from "./components/hero";
import HeroMenu from "./components/hero-menu";
import Quality from "./components/quality";
import Quote from "./components/quote";
import Quote2 from "./components/quote2";
import Story from "./components/story";
import MenuSelection from "./components/menuSelection";


export default function Home() {
  return (
    <div className="bg-[#130f0c]">
      <Header />
      <Hero />
      <Quote />
      <Story />
      <HeroMenu />
      <Quality />
      <Quote2 />
      <MenuSelection />
    </div>
  );
}
