import React from 'react';

import { pieChartData } from '../../data/dummy';
import { Header, Pastel as PieChart } from '../../components';

const Pastel = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header  category='Pastel' title='Grafica de pastel' />
      <div className='w-full'>
        <PieChart 
          id='chart-pie' 
          data={pieChartData} 
          legendVisibility 
          height='full'
        />
      </div>
    </div>
  )
}

export default Pastel;