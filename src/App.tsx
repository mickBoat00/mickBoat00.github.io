import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import FeatureProjects from './components/FeatureProjects'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Socialbar from './components/Socialbar'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar/>
      <Socialbar/>

      <main className=''> 
        <Hero/>
        <About/>
        <Education/>
        <Experience/>
        <FeatureProjects />
        <Contact />
      </main>
    </div>
  )
}

export default App
