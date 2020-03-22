import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  data: function () {
    return {
        datacollection: {
            labels: ['January', 'February','March','April'],
            datasets: [{
                label: "Sales",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: [400, 300,150,100]
              }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            layout:{
              padding:{
                  left: 5,
                  right: 0,
                  top: 0,
                  bottom: 5
              }
          },
          scales:{
              yAxes:[{
                  ticks:{
                      min:0
                  }

              }]
          }
        }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}