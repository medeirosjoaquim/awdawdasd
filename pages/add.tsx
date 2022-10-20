import type { GetServerSideProps, NextPage } from "next"
import { Task } from "../models/Task.model"
type Props = {
  tasks: Task[]
}
const Add: NextPage<Props> = ({ tasks }) => {
  return (
    <div>
      <h1>create user</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>
          title
          <input type="text" />
        </label>
        <label>
          name
          <input type="text" />
        </label>
      </form>
    </div>
  )
}

export default Add
