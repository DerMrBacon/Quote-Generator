import QuoteGenerator from "./components/QuoteGenerator";

function App() {
  return (
    <>
      <section className="bg-indigo-50 min-h-screen content-center">
        <div className="container mx-auto grid grid-cols-1 gap-3">
          <h1 className="text-center font-extrabold text-2xl text-gray-800">
            Random Quote Generator
          </h1>
          <QuoteGenerator />
        </div>
      </section>
    </>
  );
}

export default App;
