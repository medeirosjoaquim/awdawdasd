import type { GetServerSideProps, NextPage } from "next"
import { Task } from "../models/Task.model"
type Props = {
  tasks: Task[]
}
const Home: NextPage<Props> = ({ tasks }) => {
  return (
    <div>
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
