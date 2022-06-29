import type { Component } from 'solid-js'
import Footer from './layout/footer'
import Header from './layout/header'
import { Table } from './table'

const App: Component = () => {
  return (
    <>
      <Header />
      <main class="container mx-auto px-16">
        <Table />
      </main>
      <Footer />
    </>
  )
}

export default App
