import React from "react"
import { Generated } from "../src/components/Apollo"
interface Props {}

const Index: React.FC<Props> = props => {
  console.log("query:", Generated.useTestFieldQuery())
  const [mutate] = Generated.useTestMutationMutation()
  console.log("subscription:", Generated.useSubTestSubscription())
  React.useEffect(() => {
    mutate().then(response => {
      console.log("response:", response)
    })
  }, [])
  return <>see the console</>
}
export default Index
