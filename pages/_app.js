import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #EEEEEE;
    
  }
`

const theme = {
  colors: {
    primary: '#F6F5F5',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;800&display=swap" rel="stylesheet"/>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
