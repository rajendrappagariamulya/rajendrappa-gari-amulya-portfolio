import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#ff2a2a] selection:text-white">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App
