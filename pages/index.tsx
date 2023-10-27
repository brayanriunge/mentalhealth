
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Dashboard from '@/components/Dashboard'
import QuizComponent from '@/components/QuizComponent'
import Questionnaires from "@/components/Questioniares"

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
