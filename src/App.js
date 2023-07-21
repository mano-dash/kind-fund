import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";
import Product from "pages/products";


const App = () => {
  return (
    <BrowserRouter>      
      <Switch>
        {routes.map((routeProps) => {
          return <Route {...routeProps} />;
        })}
        <Redirect to="404" />        
      </Switch> 
      {/* <Route path="/Product" exact component={Product} />  */}
    </BrowserRouter>
  );
};

export default App;
