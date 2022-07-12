import React from 'react'
// import { Router } from "@reach/router"; 
import { Routes as AppRoutes, Route } from 'react-router-dom';
import MainPage from "../MainPage";
import SearchResults from "../SearchResults";
import NotFound from "../../components/NotFound";

const Routes = (props) => {
  const { beers, beersWithHighAcidity } = props;

  return (
    <AppRoutes>
      <Route exact path="/" element={<MainPage beers={beers} beersWithHighAcidity={beersWithHighAcidity} />} />
      <Route path="/searchresults" element={<SearchResults />} />
      <Route path="*" element={<NotFound />} />
    </AppRoutes>
  )
}

export default Routes
