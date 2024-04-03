//components
import { Bottom } from './Bottom'
import { Header } from './Header'
import { Middle } from './Middle'

//animation
import { motion } from 'framer-motion'

export const Footer = () => {
  return (
    <motion.section
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1, delay: 1.2 }}
      id='information'
      className='w-screen rounded-t-[32px] bg-bgBlack px-8'
    >
      <Header />
      <Middle />
      <Bottom />
    </motion.section>
  )
}
