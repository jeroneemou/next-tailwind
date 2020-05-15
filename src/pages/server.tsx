import * as React from 'react';

import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {}
  }
}

function Index() {
  return <div className="p-4 shadow rounded bg-white">
    <h1 className="text-purple-500 leading-normal">Next.js</h1>
    <p className="text-gray-500">with Tailwind CSS</p>
  </div>
}

export default Index;