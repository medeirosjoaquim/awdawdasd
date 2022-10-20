import { useAtom } from "jotai"
import { isUserLoggedAtom } from "../../atoms/login.atom"

const Login = () => {
  const [isUserLogged, setIsUserLogged] = useAtom(isUserLoggedAtom)
  // if user === .... & password === ''
  //  setIsLogged (true)...
  //
  //

  return (
    <div
      style={{
        height: 300,
        width: 300,
        backgroundColor: "#666",
      }}
    >
      <h1>meu login</h1>
      <button onClick={() => setIsUserLogged(true)}> login </button>
    </div>
  )
}

export default Login
