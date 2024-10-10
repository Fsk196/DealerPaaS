import {
  Navbar,
  Home,
  Scroller,
  Demo,
  Services,
  About,
  Story,
  Contact,
  Faq,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <Home />
        <Scroller />
        <Demo />
        <Services />
        <About />
        <Scroller  />
        <Story />
        <Contact />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
