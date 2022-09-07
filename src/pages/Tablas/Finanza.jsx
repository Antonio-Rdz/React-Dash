import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Tooltip, HiloSeries, Zoom, Logarithmic, Crosshair, DateTime } from '@syncfusion/ej2-react-charts';

import { Header } from '../../components';
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProviders';

const date1 = new Date('2017, 1, 1');

function filterValue(value){
  if(value.x >= date1){
    return value.x, value.high, value.low;
  }
}

const returnValue = financialChartData.filter(filterValue);

const Finanza = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header  category='Finanzas' title='Grafica de finanzas' />
      <div className='w-full'>
        <ChartComponent
          id='Finanza'
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: {width: 0}}}
          tooltip={{ enable: true, shared: true}}
          crosshair={{ enable: true, lineType: 'Vertical', line: {width: 0}}}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[ HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={returnValue}
            xName='x'
            yName='low'
            name='Apple Inc'
            type='Hilo'
            low='low'
            high='high' />
            </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Finanza