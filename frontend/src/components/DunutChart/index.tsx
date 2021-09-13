import axios from 'axios';
import { type } from 'os';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData ={
    labels: string[];
    series: number[];
}

const DunutChart = () => {

    const [chartdata, setChartdata] = useState<ChartData>({labels: [], series: []});

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/sum-by-seller`)
        .then(Response => {
            const data = Response.data as SaleSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);
    
            setChartdata ({labels: myLabels, series: mySeries});
    
        });
    }, []);

    
    //const mockData = {
      //series: [477138, 499928, 444867, 220426, 473088],
        //labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //}
    

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart 
          options={{...options, labels: chartdata.labels}}
          series={chartdata.series}
          type="donut"
          height="240"
        />
    );
  }
  
  export default DunutChart;