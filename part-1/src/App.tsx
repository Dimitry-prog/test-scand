import Enterprise from "./components/Enterprise"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import NewsList from "./components/NewsList"

function App() {

  return (
    <div>
      <Header />

      <main>
        <Hero />
        <NewsList />
        <Enterprise />
      </main>

      <Footer />
    </div>
  )
}

export default App
