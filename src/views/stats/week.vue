<template>
  <div class="contents">
    <SubHeader />
    <div class="stats">
      <div class="search">
        <dl class="dateSelector">
          <dt>기간선택</dt>
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
                  v-model="date"
                  label="Picker in menu"
                  prepend-icon="event"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <v-date-picker v-model="date" range scrollable locale="ko" type="month">
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </dd>
        </dl>
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
              <dt>이용이 가장 많은 요일</dt>
              <dd>
                <label>토요일</label>
                <span>평균매출 324,000원</span>
              </dd>
            </dl>
          </v-col>
          <v-col cols="6">
            <dl>
              <dt>이용이 가장 적은 요일</dt>
              <dd>
                <label>월요일</label>
                <span>평균매출 94,000원</span>
              </dd>
            </dl>
          </v-col>
        </v-row>
      </div>

      <div class="chart">
        <div class="inner">
          <LineChart :chartData="chart" />
        </div>
      </div>
      <!-- chart -->

      <div class="dataList">
        <dl v-for="item in chart.chartdata.labels" :key="item.index">
          <dt>{{item}}</dt>
          <dd>
            <span class="first">
              <label>종합 평균({{randomValue(100,120)}}건)</label>
              <strong>{{randomValue(100000,300000)}}</strong>
            </span>
            <span>
              <label>세탁기 평균({{randomValue(50,60)}}건)</label>
              <strong>{{randomValue(100000,300000)}}</strong>
            </span>
            <span>
              <label>건조기 평균({{randomValue(50,60)}}건)</label>
              <strong>{{randomValue(100000,300000)}}</strong>
            </span>
            <span>
              <label>기타장비 평균({{randomValue(10,20)}}건)</label>
              <strong>{{randomValue(100000,300000)}}</strong>
            </span>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/chart-line.vue';
import SubHeader from '@/components/subHeader.vue';
import faker from 'faker';

export default {
  components: {
    SubHeader,
    LineChart,
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 7),
      modal: false,

      chart: {
        chartdata: {
          labels: [
            '월요일',
            '화요일',
            '수요일',
            '목요일',
            '금요일',
            '토요일',
            '일요일',
          ],
          datasets: [
            {
              label: '전체',
              borderWidth: 1,
              borderColor: 'rgba(110,30,232,1)',
              backgroundColor: 'rgba(110,30,232,0)',
              data: [
                21,
                45,
                150,
                120,
                80,
                150,
              ],
              data2: [
                12000,
                13000,
                7500,
                3400,
                6000,
                0,
              ],
            },
            {
              label: '세탁기',
              borderWidth: 1,
              borderColor: 'rgba(1,161,221,1)',
              backgroundColor: 'rgba(1,161,221,0)',
              data: [
                2,
                15,
                50,
                54,
                44,
                30,
              ],
              data2: [
                12000,
                13000,
                7500,
                3400,
                6000,
                0,
              ],
            },
            {
              label: '건조기',
              borderWidth: 1,
              borderColor: 'rgba(210,10,10,1)',
              backgroundColor: 'rgba(210,10,10,0)',
              data: [
                3,
                12,
                54,
                64,
                54,
                32,
                12,
              ],
              data2: [
                7000,
                9000,
                1300,
                7500,
                3000,
                3500,
              ],
            },
            {
              label: '기타장비',
              borderWidth: 1,
              borderColor: 'rgba(255,119,0,1)',
              backgroundColor: 'rgba(255,119,0,0)',
              data: [8, 12, 5, 6, 10, 15, 1, 5, 3, 7, 12, 5, 6, 7, 12, 15, 11, 10, 9, 5, 1, 5],
              data2: [
                1000,
                0,
                0,
                5500,
                9000,
                5000,
                15000,
              ],
            },
          ],
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                stacked: false,
              },
            ],
          },
        },
      },
    };
  },
  methods:{
    randomValue(min, max){
      return faker.random.number({min, max})
    }
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
      color:#ee2073;
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


</style>
