
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Dashboard from '@/components/Dashboard'
import QuizComponent from '@/components/QuizComponent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <Dashboard/>
    <QuizComponent/>
    </>
  )
}
