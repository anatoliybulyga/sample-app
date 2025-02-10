import { Outlet } from 'react-router-dom'
import Sidebar from '@/components/Sidebar'
import { SampleProvider } from '@/context'
import { HoveredItemProvider } from '@/context/HoveredItem'
import { FilteredImagesProvider } from '@/context/FilteredImagesContext'

const MainLayout = () => {
  return (
    <SampleProvider>
      <HoveredItemProvider>
      <FilteredImagesProvider>
        <main className="flex h-screen w-screen">
          <Sidebar />

          <section className='grow-0 overflow-hidden'>
            <Outlet />
          </section>
      </main>
      </FilteredImagesProvider>
      </HoveredItemProvider>
    </SampleProvider>
  )
}

export default MainLayout
