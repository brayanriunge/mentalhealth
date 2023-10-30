import Dashboard from '@/components/Dashboard'
import Layout from '@/components/Layout'
import ContactUs from '@/components/ContactUs'
import Cards from '@/components/Repo/Cards'
import Articles from '@/components/Repo/Articles'
import Community from '@/components/Community'
import Footer from '@/components/Footer'


export default function Home() {
  return (
   
   <Layout>
    <Dashboard/>
    <Articles/>
    <Community/>
    <ContactUs/>
    <Footer/>
   </Layout>
   
   
   
  )
}
