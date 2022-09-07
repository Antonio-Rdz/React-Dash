import React from 'react';
import { Header, TablaLineal } from '../../components';

const Lineal = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header  category='Chart' title='Ratio de Inflación' />
      <div className='w-full'>
        <TablaLineal />
      </div>
    </div>
  )
}

export default Lineal