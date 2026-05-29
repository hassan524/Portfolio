import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "react-hot-toast";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "hsl(var(--card))",
            color: "hsl(var(--foreground))",
            border: "1px solid rgba(var(--a1), 0.2)",
            backdropFilter: "blur(12px)",
            borderRadius: "12px",
            fontSize: "14px",
            fontFamily: "'Space Grotesk', sans-serif",
          },
        }}
      />
    </WouterRouter>
  );
}

export default App;
