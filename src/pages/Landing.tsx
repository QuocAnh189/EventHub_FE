//components
import { Navbar, Intro, Manage, AutomaticRun, Footer } from '@components/landing'

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
