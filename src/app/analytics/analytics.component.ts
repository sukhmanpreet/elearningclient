import { Component, OnInit } from '@angular/core';
import { PostService } from '@app/post.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.less']
})
export class AnalyticsComponent implements OnInit {
  public pieChartLabels = [];
  public pieChartData = [];
  barchart:any; 
  data: any[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAnalytics(2).subscribe(x => {  
      x.forEach(x => {  
        this.pieChartLabels.push(x.name);  
        this.pieChartData.push(x.percentage);  
      });  
      this.barchart = new Chart('canvas', {  
        type: 'bar',  
        data: {  
          labels: this.pieChartLabels,  
  
          datasets: [  
            {  
              data: this.pieChartData,  
              borderColor: '#3cba9f',  
              backgroundColor: [  
                "#3cb371",  
                "#0000FF",  
                "#9966FF",  
                "#4C4CFF",
              ],  
              fill: true 
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true,
              ticks: {
                beginAtZero: true
            }  
            }],  
          }  
        }  
      });  
    });  
  }

}
