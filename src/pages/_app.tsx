import * as React from 'react';
import App, { AppProps } from 'next/app';

import '../styles/index.css';

class Application extends App {

  constructor(props: AppProps) {
    super(props);
  }

  render(): JSX.Element {
    return <this.props.Component {...this.props.pageProps} />;
  }
}

export default Application;