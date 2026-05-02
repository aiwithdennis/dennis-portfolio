import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import AutonomousSystems from './components/AutonomousSystems'
import ClientProjects from './components/ClientProjects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <main className="space-y-0">
        <ClientProjects />
        <AutonomousSystems />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}