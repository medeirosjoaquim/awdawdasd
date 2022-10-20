import type { GetServerSideProps, NextPage } from "next"
import { Task } from "../models/Task.model"
type Props = {
  tasks: Task[]
}
const Add: NextPage<Props> = ({ tasks }) => {
  return (
    <div>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
    </div>
  )
}

export default Add
