import { useAtom } from "jotai"
import type { GetServerSideProps, NextPage } from "next"
import { isUserLoggedAtom } from "../atoms/login.atom"
import Layout from "../components/Layout/Layout"
import { Task } from "../models/Task.model"
type Props = {
  tasks: Task[]
}
const Home: NextPage<Props> = ({ tasks }) => {
  const [_, setIsUserLogged] = useAtom(isUserLoggedAtom)
  return (
    <Layout>
      <div>
        <nav
          style={{
            backgroundColor: "#eee",
            height: 80,
          }}
        >
          <button onClick={() => setIsUserLogged(false)}>sign out</button>
        </nav>
        {tasks.map((task) => (
          <ul>
            <li>{task.id}</li>
            <li>{task.name}</li>
            <li>{task.title}</li>
            <li>
              <img
                src={task.image}
                alt={task.name}
              />
            </li>
          </ul>
        ))}
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const tasks = await fetch("http://localhost:3000/tasks").then((res) =>
  //   console.log(res)
  // )

  const tasks = await fetch("http://localhost:3000/tasks").then((res) =>
    res.json()
  )
  console.log(tasks)
  return {
    props: { tasks },
  }
}

export default Home
