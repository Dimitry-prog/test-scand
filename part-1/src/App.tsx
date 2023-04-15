import Enterprise from "./components/Enterprise"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import NewsList from "./components/NewsList"

function App() {

  return (
    <div className="max-w-[1400px] mx-auto px-5 md:px-[50px] lg:px-[100px]">
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
