import Dashboard from '@/components/Dashboard'
import Layout from '@/components/Layout'
import ContactUs from '@/components/ContactUs'
import Cards from '@/components/Repo/Cards'
import Articles from '@/components/Repo/Articles'


export default function Home() {
  return (
   
   <Layout>
    <Dashboard/>
    <Articles/>
    <ContactUs/>
   </Layout>
   
   
   
  )
}
