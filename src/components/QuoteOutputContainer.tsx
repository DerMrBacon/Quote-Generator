import { QuoteResponseType } from "../types/response.type";
import Badge from "./Badge";

function QuoteOutputContainer({ quoteData }: { quoteData: QuoteResponseType }) {
  return (
    <div className="bg-indigo-600 p-4 mt-2 rounded-xl text-white shadow-lg">
      {quoteData && (
        <div className="grid grid-cols-1 gap-2">
          <p className="font-bold">{quoteData.author}</p>
          <p>{quoteData.text}</p>
          <div className="flex flex-wrap gap-1">
            {quoteData.tags.map((tag) => (
              <Badge key={tag} tag={tag} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuoteOutputContainer;
