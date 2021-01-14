import React from "react"

import { SearchContainer } from "../../components/Search"
import { Header } from "../../components/Header"

const SearchScreen: React.FC = () => {
  return (
    <>
      <Header />
      <SearchContainer />
    </>
  )
}

export { SearchScreen }
