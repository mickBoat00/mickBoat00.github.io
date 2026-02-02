import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Socialbar from './components/Socialbar'

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar/>
      <Socialbar/>

      <main className=''> 
        <Hero/>
        <About/>
      </main>
    </div>
  )
}

export default App
