import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Filters from '../components/Filters';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <Header />
    <main className="pt-20">
      <Hero />
      <Filters />
      <MovieList />
    </main>
    <Footer />
  </div>
);

export default Home;