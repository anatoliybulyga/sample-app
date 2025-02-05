import { Outlet } from 'react-router-dom'
import Sidebar from '@/components/Sidebar'
import { SampleProvider } from '@/context'
import { HoveredItemProvider } from '@/context/HoveredItem'

const MainLayout = () => {
  return (
    <SampleProvider>
      <HoveredItemProvider>
        <main className="flex h-screen w-screen">
          <Sidebar />

          <section className='grow-0 overflow-hidden'>
            <Outlet />
          </section>
      </main>
      </HoveredItemProvider>
    </SampleProvider>
  )
}

export default MainLayout
