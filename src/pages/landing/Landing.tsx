//components
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Manage from './components/Manage'
import AutomaticRun from './components/AutomaticRun'
import Footer from './components/Footer/Footer'

const Landing = () => {
  return (
    <main className='overflow-hidden bg-bgGray'>
      <Navbar />
      <Intro />
      <Manage />
      <AutomaticRun />
      <Footer />
    </main>
  )
}

export default Landing
