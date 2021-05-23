import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}  />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}