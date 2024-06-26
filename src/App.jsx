import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataFromApi } from './utlies/Api';
import { getApiConfiguration, getGenres } from './features/homeSlice';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import SearchResult from './pages/searchResult/SearchResult'; // Correct the import path
import PageNotFound from './pages/404/PageNotFound';
import Details from './pages/details/Details';
import Explore from './pages/explore/Explore'; // Ensure you have an Explore component

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApi();
    genresCall(); // Ensure genres are fetched on component mount
  }, []);

  const fetchApi = async () => {
    const res = await fetchDataFromApi('/configuration');
    const url = {
      backdrop: res.images.secure_base_url + 'original',
      poster: res.images.secure_base_url + 'original',
      profile: res.images.secure_base_url + 'original',
    };
    dispatch(getApiConfiguration(url));
  };

  const genresCall = async () => {
    let promises = [];
    let endpoints = ['tv', 'movie'];
    let allGenres = {};

    endpoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data.forEach(({ genres }) => {
      genres.forEach((item) => {
        allGenres[item.id] = item;
      });
    });

    dispatch(getGenres(allGenres));
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;