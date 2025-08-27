import { Suspense, lazy } from "react";
import ExcitingLoader from "./globlecomponents/Loader";

// HomePage ko lazy load karna zaroori hai tabhi Suspense ka fallback chalega
const HomePage = lazy(() => import("./home/page"));

function App() {
  return (
    <Suspense fallback={<ExcitingLoader />}>
      <HomePage />
    </Suspense>
  );
}

export default App;
