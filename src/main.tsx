// index.js or App.js
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import App from './App';
import ReactDOM from 'react-dom';

const queryClient = new QueryClient();

function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
