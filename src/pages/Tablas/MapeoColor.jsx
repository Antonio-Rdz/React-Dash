import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, rangeColorSettingsDiective } from '@syncfusion/ej2-react-charts';

import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';
import { Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProviders';

const MapeoColor = () => {
  const { currentMode } = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Mapeo Color' title=' Clima por mes ' />
      <div className='w-full'>
        <ChartComponent
          id='graficas'
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: {width: 0}}}
          legendSettings={{ mode: 'Range', background: 'white'}}
          tooltip={{ enable: true }}
          background={ currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name='USA'
              xName='x'
              yName='y'
              type='Column'
              cornerRadius={{
                topLeft:10,
                topRight:10,
              }}
            />
          </SeriesCollectionDirective>
          <rangeColorSettingsDiective>
            {rangeColorMapping.map((item, index) => <rangeColorSettingsDiective key={index} {...item} />)}
          </rangeColorSettingsDiective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default MapeoColor