import { Card } from "@radix-ui/themes"
import { Link } from "react-router"
export default function Project(){
  return (
    <Card asChild>
      <Link to='/project/1'>project 1</Link>
    </Card>
  )
}