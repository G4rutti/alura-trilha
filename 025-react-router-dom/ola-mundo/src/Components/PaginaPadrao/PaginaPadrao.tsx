import { Outlet } from "react-router-dom"
import Banner from "../Banner/Banner"

const PaginaPadrao = () => {
  return (
    <>
        <Banner />
        <Outlet />
    </>
  )
}

export default PaginaPadrao