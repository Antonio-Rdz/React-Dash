import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Ordenes, Calendario, Empleados, Apilado, Piramidal, Clientes, Kanban, Area, Bar, Pastel, Finanza, PaletaColor, MapeoColor, Editor, Lineal } from './pages'

import { useStateContext } from './contexts/ContextProviders';

import './App.css'

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();
  
  return (
    <div className={currentMode === 'Dark' ? 'dark': ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position='Top'>
              <button type='button'
                className='text-3xl p-3 hover:drop-shadow-x1 hover:bg-light-gray text-white'
                onClick={() => setThemeSettings(true)}
                style={{ backgroundColor: currentColor, borderRadius: '50%' }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
              </div>
          )}
          <div className={
            `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full
            ${activeMenu ? 'md:ml-72'
          : 'flex-2'}
          `}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          <div>

            {themeSettings && <ThemeSettings />}
            <Routes>
              { /* Dashboard */}
              <Route path='/' element={<Ecommerce  />} />
              <Route path='/ecommerce' element={<Ecommerce />} />

              { /* Paginas */}
              <Route path='/Ordenes' element={<Ordenes />}/>
              <Route path='/Empleados' element={<Empleados />}/>
              <Route path='/clientes' element={<Clientes />}/>

              { /* Apps */ }
              <Route path='/kanban' element={<Kanban />}/>
              <Route path='/editor' element={<Editor />}/>
              <Route path='/calendario' element={<Calendario />}/>
              <Route path='/paletaColor' element={<PaletaColor  /> }/>

              { /* tablas */}
              <Route path='/lineal' element={<Lineal />}/>
              <Route path='/area' element={<Area />}/>
              <Route path='/barras' element={<Bar />}/>
              <Route path='/pastel' element={<Pastel />}/>
              <Route path='/finanzas' element={<Finanza />}/>
              <Route path='/mapeo-color' element={<MapeoColor  /> }/>
              <Route path='/piramidal' element={<Piramidal />}/>
              <Route path='/apilado' element={<Apilado />}/>

            </Routes>
          </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App