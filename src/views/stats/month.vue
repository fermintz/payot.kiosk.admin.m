<template>
  <div class="contents">
    <SubHeader />
    <div class="stats">
      <div class="yearSelector">
        
          <v-btn text @click="yearText -= 1">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
			 <span>{{yearText}}</span>
			  <v-btn text @click="yearText += 1">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        
      </div>

      <div class="total">
        <dl class="first">
          <dt>선택기간매출</dt>
          <dd>2,390,000 원</dd>
        </dl>
      </div>

      <div class="total-2-cols">
        <v-row>
          <v-col cols="6">
            <dl>
              <dt>이용이 가장 많은 달</dt>
              <dd>
                <label>1월</label>
                <span>매출 5,320,000원</span>
              </dd>
            </dl>
          </v-col>
          <v-col cols="6">
            <dl>
              <dt>이용이 가장 적은 달</dt>
              <dd>
                <label>5월</label>
                <span>매출 3,194,000원</span>
              </dd>
            </dl>
          </v-col>
        </v-row>
      </div>

      <div class="chart">
        <div class="inner">
          <BarChart :chartData="chart" />
        </div>
      </div>
      <!-- chart -->

       <div class="dataList">
        <dl class="tableTotal">
          <dt>2020년 합계</dt>
          <dd>
            <span class="first">
              <label>전체(2,194건)</label>
              <strong>32,244,000</strong>
            </span>
            <span>
              <label>세탁기(1,214건)</label>
              <strong>15,104,000</strong>
            </span>
            <span>
              <label>건조기(904건)</label>
              <strong>13,985,000</strong>
            </span>
            <span>
              <label>기타장비(214건)</label>
              <strong>3,245,000</strong>
            </span>
          </dd>
        </dl>
        <dl v-for="(item, index) in 12" :key="index">
          <dt>2020-0{{item}}</dt>
          <dd>
            <span class="first">
              <label>종합({{randomNumber(350,600).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}건)</label>
              <strong>{{randomNumber(3000000,5400000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</strong>
            </span>
            <span>
              <label>세탁기({{ randomNumber(150,200).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}건)</label>
              <strong>{{ randomNumber(1000000,2000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</strong>
            </span>
            <span>
              <label>건조기({{ randomNumber(150,200).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}건)</label>
              <strong>{{ randomNumber(1000000,2000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</strong>
            </span>
            <span>
              <label>기타장비({{ randomNumber(50,100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}건)</label>
              <strong>{{ randomNumber(100000,500000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</strong>
            </span>
          </dd>
        </dl>
        
      </div>

      <!-- <div class="dataTable">
        <table cellspacing="0" cellpadding="0">
          <tr>
            <th>날짜</th>
            <th>전체매출</th>
            <th>세탁기</th>
            <th>건조기</th>
            <th>기타장비</th>
          </tr>
          <tr v-for="item in chart.chartdata.labels" :key="item">
            <td>{{ item }}</td>
            <td>
              <span class="number">(5)</span>
              <span class="price">34,500</span>
            </td>
            <td>
              <span class="number">(3)</span>
              <span class="price">12,000</span>
            </td>
            <td>
              <span class="number">(12)</span>
              <span class="price">12,000</span>
            </td>
            <td>
              <span class="number">(12)</span>
              <span class="price">3,500</span>
            </td>
          </tr>
        </table>
      </div> -->
    </div>
  </div>
</template>

<script>
import BarChart from '@/components/chart-bar.vue';
import SubHeader from '@/components/subHeader.vue';
import faker from 'faker';

export default {
  components: {
    SubHeader,
    BarChart,
  },
  data() {
    return {
      yearText: 2020,
      modal: false,

      chart: {
        chartdata: {
          labels: [
            '1월',
            '2월',
            '3월',
            '4월',
            '5월',
            '6월',
            '7월',
          ],
          datasets: [
            {
              label: '세탁기',
              backgroundColor: 'rgba(0,150,255,1)',
              barPercentage: 0.3,
              data: [...this.randomValue(113000,2259000,12)],
            },
            {
              label: '건조기',
              backgroundColor: 'rgba(255,0,110,1)',
              barPercentage: 0.3,
              data: [...this.randomValue(113000,2259000,12)],
            },
            {
              label: '기타장비',
              backgroundColor: 'rgba(131,56,236,1)',
              barPercentage: 0.3,
              data: [...this.randomValue(513000,1259000,12)],
            },
          ],
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend:{
            align:'start',
          },
          scales: {
            yAxes: [
              {
                stacked: true,
              },
            ],
            xAxes: [
              {
                stacked: true,
              },
            ],
          },
        },
      },
    };
  },

  methods:{
    randomValue(min,max,count){
      return new Array(count).fill().map(()=> faker.random.number({min, max}));
    },
    randomNumber(min, max){
      return faker.random.number({min, max});
    }
  }
};
</script>

<style lang="scss" scoped>
.yearSelector {
  display:flex;
  justify-content: space-between;
  align-items: center;;
  background: #fff;
  margin-bottom: 10px;
  padding: 15px;
  
	span{
		font-size:18px;
		font-weight:500;
	}

  .v-btn {
    background: #f2f2f2;
	 width:34px;
	 height:34px;
	 min-width:34px;
    .v-icon {
      color: #292929;
    }
  }
}
.total {
  margin: 10px 0;
  background: #fff;

  dl {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    padding: 0 15px;

    dt {
      color: #888;
    }
    dd {
      font-weight: 500;
    }
  }
  dl.first {
    color: #ee2073;
    height: 40px;
    background: #fff3f3;
    dt {
      color: #292929;
    }
  }
  dl:last-child {
    margin-bottom: 0px;
  }
}

.total-2-cols {
  margin-bottom: 10px;

  .row {
    padding: 0;
    margin: 0;
  }
  .col {
    padding: 0;
    margin: 0;
  }

  dl {
    background: #fff;
    padding: 15px;
    border-right: 1px solid #e2e2e2;
    dd {
      display: flex;
      flex-direction: column;
      margin-top: 10px;

      label {
        color: #888;
      }
      span {
        font-weight: 500;
        margin-top: 3px;
      }
    }
  }
  .col:last-child dl {
    border-right: 0px;
  }
}

.chart {
  overflow-y: scroll;
  background: #fff;
  padding: 20px;
  .inner {
    width: 200%;
  }
}

.dataList{
  margin-top:10px;

  dl{
    background:#fff;
    padding:15px;
    margin-bottom:10px;

    dt{
      font-size:12px;
    }
    dd{
      margin-top:10px;
      span.first{

        margin-left:0px;
        label{font-size:13px;color:#292929;}
        strong{font-size:13px;font-weight:500;}
        label::before{
          display:none;
        }
      }
      span{
        margin-left:5px;
        display:flex;
        align-items: center;
        justify-content:space-between;
        margin-bottom:5px;
        label{
          color:#888;
          font-size:11px;
        }
        label::before{
          content:'ㄴ';
          margin-right:5px;
          color:#c2c2c2;
        }
        strong{
          font-weight:400;
          font-size:11px;
        }
      }
    }
  }

  dl.tableTotal{
    background:#fff3f3;
    dt{color:#ee2073}
  }

}

.dataTable {
  margin-top: 10px;
  background: #fff;
  table {
    border-top: 1px solid #e2e2e2;
    width: 100%;
    text-align: center;
    th {
      height: 40px;
      border-bottom: 1px solid #e2e2e2;
      font-size: 11px;
      font-weight: 500;
    }
    td {
      font-size: 11px;
      padding: 5px 0;
      border-right: 1px solid #e2e2e2;
      border-bottom: 1px solid #e2e2e2;
      span {
        display: block;
      }
    }
    td:nth-child(2) {
      background: #fff3f3;
    }
    td:last-child {
      border-right: 0px;
    }
  }
}
</style>
