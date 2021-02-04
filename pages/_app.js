import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    margin: 0;
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
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
