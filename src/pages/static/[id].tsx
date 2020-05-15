import * as React from 'react';

import { GetStaticProps, GetStaticPaths } from 'next'

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {}
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {params: {id: '1'}}
    ],
    fallback: true
  }
}

function Static() {
  return <div className="p-4 shadow rounded bg-white">
    <h1 className="text-purple-500 leading-normal">Next.js</h1>
    <p className="text-gray-500">with Tailwind CSS</p>
  </div>
}

export default Static;