import { useState } from "react";
import { QuoteResponseType } from "../types/response.type";
import "../index.css";
import QuoteOutputContainer from "./QuoteOutputContainer";
import ExplainationText from "./ExplainationText";
import Spinner from "./Spinner";

const QuoteGenerator = () => {
  const [quoteData, setQuoteData] = useState<QuoteResponseType>();
  const [isLoading, setIsLoading] = useState(false);

  const generateQuote = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        "https://go-quote.azurewebsites.net/random-quote?format=json",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setQuoteData(await res.json());
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      console.log("Quote generated");
    }
  };

  return (
    <>
      <div>
        <ExplainationText />
        <div className="flex justify-center items-center">
          <button
            className="bg-indigo-600 text-white rounded-xl px-4 py-2 mt-2 shadow-lg"
            onClick={generateQuote}
          >
            Generate
          </button>
        </div>
      </div>
      {isLoading ? (
        <Spinner loading={isLoading} />
      ) : (
        quoteData && <QuoteOutputContainer quoteData={quoteData} />
      )}
    </>
  );
};
export default QuoteGenerator;
