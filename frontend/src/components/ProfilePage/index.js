import { useSelector } from "react-redux";

export default function (){
  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
      <h1>Hello {sessionUser.name}</h1>
    </>
  )
}