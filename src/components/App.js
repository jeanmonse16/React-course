import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Badges from "../pages/Badges";
import Badgenew from "../pages/Badgenew";
import Layout from "./Layout";
import Notfound  from "../pages/Notfound";
import Home from "../pages/Home";

function App (){
   return (

       <BrowserRouter>
         <Layout>
          <Switch>
              <Route exact path="/badges" component={Badges} />
              <Route exact path="/badges/new" component={Badgenew} />
              <Route exact path="/" component={Home} />
              <Route component={Notfound}></Route>
          </Switch>
         </Layout>
       </BrowserRouter>
   )
}

export default App;