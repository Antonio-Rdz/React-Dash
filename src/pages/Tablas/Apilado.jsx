import React from 'react';

import { Header, Pilas as StackedChart } from '../../components';

const Apilado = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Apilado' title='Descgloce de ingresos' />
      <div className='w-full'>
        <StackedChart />
      </div>
    </div>
  )
}

export default Apilado