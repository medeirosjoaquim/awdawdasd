import { useAtom } from "jotai"
import { isUserLoggedAtom } from "../../atoms/login.atom"
import Login from "../Login/Login"
type Props = {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  const [isUserLogged] = useAtom(isUserLoggedAtom)

  if (isUserLogged) {
    return <div>{children}</div>
  } else {
    return <Login />
  }
}

export default Layout
