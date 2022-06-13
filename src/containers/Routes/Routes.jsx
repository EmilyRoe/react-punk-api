import React from 'react'
import { Router } from "@reach/router"; 
import MainPage from "../MainPage";
import SearchResults from "../SearchResults";
import NotFound from "../../components/NotFound";

const Routes = (props) => {
  const { beers, beersWithHighAcidity } = props;

  return (
    <Router>
      <MainPage path="/" beers={beers} beersWithHighAcidity={beersWithHighAcidity} />
      <SearchResults path="searchresults" />
      <NotFound default />
    </Router>
  )
}

export default Routes
