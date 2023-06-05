import { AxiosIntercepto } from "./components/AxiosInterceptor"
import { AuthProvider } from "./providers/AuthProvider"
import { RoutesMain } from "./routes"
import GlobalStyle from "./styles/GlobalStyle"


function App() {
  

  return (
    <>
      <GlobalStyle/>
      <AxiosIntercepto>
        <AuthProvider>
          <RoutesMain/>
        </AuthProvider>
      </AxiosIntercepto>
    </>
  )
}

export default App
