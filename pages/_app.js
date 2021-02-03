import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    width: auto;
    height: 100vh;
    margin: 0;
    padding: 0 5px 0 5px;
    box-sizing: border-box;
    background-color: #F6F5F5;
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
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
