import './App.css';
import StarWarsTable from './StarWarsTable';
import { QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StarWarsTable/>
    </QueryClientProvider>
  );
}

export default App;
