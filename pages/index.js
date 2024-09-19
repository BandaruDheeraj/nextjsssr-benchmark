// pages/index.js
import React from 'react';

const Home = ({ time }) => {
  return (
    <div>
      <h1>Next.js SSR Benchmark</h1>
      <p>Current server time: {time}</p>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetching some data server-side
  const time = new Date().toISOString();

  return {
    props: {
      time
    }
  };
}

export default Home;