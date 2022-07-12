import { QueryClient, QueryClientProvider } from "react-query";
import RoutesComp from "./routes";

const queryClinet = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClinet}>
        <RoutesComp/>
    </QueryClientProvider>
  );
}

export default App;
