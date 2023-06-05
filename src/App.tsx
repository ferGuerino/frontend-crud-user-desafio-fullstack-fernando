import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { AxiosIntercepto } from "./components/AxiosInterceptor"
import { AuthProvider } from "./providers/AuthProvider"
import { RoutesMain } from "./routes"
import GlobalStyle from "./styles/GlobalStyle"


function App() {
  

  return (
    <>
      <GlobalStyle/>
      <AxiosIntercepto>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <AuthProvider>
          <RoutesMain/>
        </AuthProvider>
      </AxiosIntercepto>
    </>
  )
}

export default App
