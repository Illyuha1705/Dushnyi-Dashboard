import {Options} from 'highcharts';


export const areaChartOptions = (usersString: string[], stuffyMarks: number[], imageUrl: string): Options => ({
  chart: {
    height: '60%',
    width: '1075'
  },

  title: {
    text: 'Stuffiness Dashboard'
  },

  subtitle: {
    text: new Date().toISOString().slice(0, 10)
  },

  xAxis: {
    categories: usersString,
    labels: {
      step: 0
    },
  },

  yAxis: {
    title: {
      text: 'Stuffiness'
    },
    labels: {
      step: 0.5
    },
    max: 10,

  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 0
    }
  },

  series: [{
    name: 'stuffiness',
    data: stuffyMarks,
    type: 'line',
    marker: {
      symbol: `url(${imageUrl})`,
      width: 20,
      height: 20
    }
  }]
})
