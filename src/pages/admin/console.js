import Sidebar from '@/components/Sidebar'
import Breadcrumb from '@/components/Breadcrumb'
import ManageTable from '@/components/ManageTable'
import Head from 'next/head'
import Header from '@/parts/v3/header'
import Footer from '@/parts/footer'
import ManageUser from '@/components/ManageUser'
import { BASE_IMAGE_URL } from '../api/endpoint'

export default function Console() {
  return (
    <>
     <Head>
        <title>Incident Response | Ost Infinity - ViXa Identity First Platform</title>
         <link rel="icon" href={`${BASE_IMAGE_URL}/global/favicon.png`} />
        <meta name="viewport" content="width=1440" />
        <meta name="description" content="Ost Infinity - ViXa Identity First Platform" />
      </Head>
       <main>
         <Header/>
         <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-auto bg-white">
        <Breadcrumb />
        <ManageTable />
        <ManageUser />
      </main>
    </div>
         <Footer />
       </main>
    
    </>
  )
}
