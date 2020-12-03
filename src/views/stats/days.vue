<template>
  <div class="contents">
    <SubHeader />
    <div class="stats">
      <div class="search">
        <dl class="dateSelector">
          <dt>날짜선택</dt>
          <dd>
            <v-dialog
              ref="menu"
              v-model="modal"
              :close-on-content-click="false"
              :return-value.sync="dates"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <input
                  type="text"
                  v-model="dateRangeText"
                  label="Picker in menu"
                  prepend-icon="event"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <v-date-picker v-model="dates" scrollable range locale="ko">
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(dates)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </dd>
        </dl>
      </div>
			<div class="total">
				<!-- <dl class="first">
					<dt>전체매출</dt>
					<dd>2,390,000 원</dd>
				</dl> -->
				<dl class="first">
					<dt>일평균매출</dt>
					<dd>184,500원</dd>
				</dl>
				<dl>
					<dt>세탁기 일평균매출</dt>
					<dd>98,500원</dd>
				</dl>
				<dl>
					<dt>건조기 일평균매출</dt>
					<dd>86,000원</dd>
				</dl> 
				<dl>
					<dt>기타장비 일평균매출</dt>
					<dd>14,000원</dd>
				</dl>
			</div>

			<div class="total-2-cols">
				<v-row>
					<v-col cols="6">
						<dl>
							<dt>최소 매출일</dt>
							<dd>
								<label>2020-07-24</label>
								<span>24,000원</span>
							</dd>
						</dl>
					</v-col>
					<v-col cols="6">
						<dl>
							<dt>최대 매출일</dt>
							<dd>
								<label>2020-07-09</label>
								<span>134,000원</span>
							</dd>
						</dl>
					</v-col>
				</v-row>
			</div>

      <div class="chart">
        <div class="inner">
          <BarChart :chartData="chart" />
        </div>
      </div> <!-- chart -->

      <div class="dataList">
        <dl class="tableTotal">
          <dt>2020-10-01 ~ 2020-10-15 합계</dt>
          <dd>
            <span class="first">
              <label>전체(877건)</label>
              <strong>5,259,000</strong>
            </span>
            <span>
              <label>장비.현금(447건)</label>
              <strong>2,680,000</strong>
            </span>
            <span>
              <label>키오스크.현금(114건)</label>
              <strong>686,000</strong>
            </span>
            <span>
              <label>키오스크.카드(316건)</label>
              <strong>1,893,000</strong>
            </span>
          </dd>
        </dl>
        <dl v-for="(item, index) in this.dummys" :key="index">
          <dt>2020-07-{{index + 1}}</dt>
          <dd>
            <span class="first">
              <label>종합({{item.eqNumber + item.kioskCoinNum + item.kioskCardNum}}건)</label>
              <strong>{{item.eqSales + item.kioskCoinSales + item.kioskCardSales}}</strong>
            </span>
            <span>
              <label>장비(현금) {{item.eqNumber}}건</label>
              <strong>{{item.eqSales}}</strong>
            </span>
            <span>
              <label>키오스크(현금) {{item.kioskCoinNum}}건</label>
              <strong>{{item.kioskCoinSales}}</strong>
            </span>
            <span>
              <label>키오스크(카드) {{item.kioskCardNum}}건</label>
              <strong>{{item.kioskCardSales}}</strong>
            </span>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from '@/components/chart-bar.vue';
import SubHeader from '@/components/subHeader.vue';
import dummyData from '../stats/dummy.json';
import faker from 'faker';

export default {
  components: {
    SubHeader,
    BarChart,
  },
  data() {
    return {
      date1: new Date().toISOString().substr(0, 10),
      date2: new Date().toISOString().substr(0, 10),
      dates: [this.date1, this.date2],
      modal: false,

      chart: {
        chartdata: {
          labels: ['1일','2일','3일','5일','6일','7일','8일','9일','10일','11일','12일','13일','14일','15일'],
          datasets: [
            {
              label: '장비(현금)',
              backgroundColor:'rgba(0,150,255,1)',
              barPercentage:0.3,
              data: [...this.randomChartValue(7500, 204500, 31)],
            },
            {
              label: '키오스크(현금)',
              backgroundColor:'rgba(255,0,110,1)',
              barPercentage:0.3,
              data: [...this.randomChartValue(0, 75000, 31)],
            },
            {
              label: '키오스크(장비)',
              backgroundColor:'rgba(131,56,236,1)',
              barPercentage:0.3,
              data: [...this.randomChartValue(8500, 129000, 31)],
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
  computed: {
    dateRangeText() {
      return this.dates.join(' ~ ');
    },
    dummys(){
      return dummyData.data
    },
  },
  mounted(){

  },
  methods:{
    randomChartValue(min,max,count){
      return new Array(count).fill(0).map(() => faker.random.number({min, max}))
    },
  }
};
</script>

<style lang="scss" scoped>
.search {
  background: #fff;
  margin-bottom: 10px;
  padding: 15px;
  dl.dateSelector {
    border: 1px solid #d2d2d2;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    dt {
      padding: 0 10px;
    }
    dd {
      flex: 1;
      input {
        width: 100%;
        height: 40px;
        text-align: right;
        padding: 0 10px;
      }
    }
  }
}
.total{
	margin:10px 0;
	background: #fff;
	padding-bottom:15px;

	dl{
		display:flex;
		justify-content: space-between;
		align-items: center;
		height:30px;
		padding:0 15px;
		dt{color:#888}
		dd{
			font-weight:500;
		}
	}
	dl.first{
		color:#ee2073;
		height:40px;
		background: #fff3f3;
		dt{color:#292929;}
	}
	dl:last-child{margin-bottom:0px;}
}

.total-2-cols{
	margin-bottom:10px;

	.row{padding:0;margin:0}
	.col{padding:0;margin:0}

	dl{
		background:#fff;
		padding:15px;
		border-right:1px solid #e2e2e2;
		dd{
			display:flex;
			flex-direction: column;
			margin-top:10px;

			label{color:#888;}
			span{font-weight:500;margin-top:3px;}
		}
	}
	.col:last-child dl{
		border-right:0px;
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

.dataTable{
	margin-top:10px;
	background: #fff;
	table{
		border-top:1px solid #e2e2e2;
		width:100%;
		text-align:center;
		th{
			height:40px;
			border-bottom:1px solid #e2e2e2;
			font-size:11px;
			font-weight:500;
		}
		td{
			font-size:11px;
			padding:5px 0;
			border-right:1px solid #e2e2e2;
			border-bottom:1px solid #e2e2e2;
			span{display:block;}
		}
		td:nth-child(2){background:#fff3f3}
		td:last-child{border-right:0px;}
	}
}
</style>
