import React from 'react'
import { Router } from "@reach/router"; 
import MainPage from "../MainPage";
import SearchResults from "../SearchResults";
import NotFound from "../../components/NotFound";

const Routes = (props) => {
  const { searchText } = props;

  return (
    <Router>
      <MainPage path="/" searchText={searchText} />
      <SearchResults path="searchresults" />
      <NotFound default />
    </Router>
  )
}

export default Routes
