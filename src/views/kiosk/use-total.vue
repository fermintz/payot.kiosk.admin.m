<template>
  <div class="use-total">
    <SubHeader />
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

    <div class="member">
      <dl class="new">
        <dt>158</dt>
        <dd>신규가입자 수</dd>
      </dl>
      <dl class="total">
        <dt>4218</dt>
        <dd>총 회원수</dd>
      </dl>
    </div>

    <div class="data">
      <div class="items chage">
        <h4>충전</h4>
        <div class="item item-1">
          <dl class="number">
            <dt>986</dt>
            <dd>현금결제 횟수</dd>
          </dl>
          <dl class="price">
            <dt>7,981,000</dt>
            <dd>현금결제 금액</dd>
          </dl>
          <dl class="point">
            <dt>798,000</dt>
            <dd>추가포인트</dd>
          </dl>
        </div>
        <div class="item item-2">
          <dl class="number">
            <dt>1,846</dt>
            <dd>카드결제 횟수</dd>
          </dl>
          <dl class="price">
            <dt>9,878,890</dt>
            <dd>카드결제 금액</dd>
          </dl>
          <dl class="point">
            <dt>816,800</dt>
            <dd>추가포인트</dd>
          </dl>
        </div>
        <div class="item item-3">
          <dl class="number">
            <dt>12,816</dt>
            <dd>총 횟수</dd>
          </dl>
          <dl class="price">
            <dt>18,864,900</dt>
            <dd>총 금액</dd>
          </dl>
          <dl class="point">
            <dt>1,846,160</dt>
            <dd>총 추가포인트</dd>
          </dl>
        </div>
      </div>
      <div class="items use">
        <h4>사용</h4>
        <div class="item">
          <dl class="number">
            <dt>12,816</dt>
            <dd>총 횟수</dd>
          </dl>
          <dl class="price">
            <dt>18,864,900</dt>
            <dd>총 금액</dd>
          </dl>
          <dl class="point">
            <dt>1,846,160</dt>
            <dd>총 추가포인트</dd>
          </dl>
        </div>
      </div>

      <div class="items rest">
        <h4>잔여</h4>
        <div class="item">
          <dl class="number">
            <dd>남은금액</dd>
            <dt>87,156,000</dt>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeader from '@/components/subHeader.vue'

export default {
  components:{
    SubHeader,
  },
  data(){
    return{
      date1: new Date().toISOString().substr(0, 10),
      date2: new Date().toISOString().substr(0, 10),
      dates: [this.date1, this.date2],
      modal: false,
    }
  },
  computed:{
    dateRangeText() {
      return this.dates.join(' ~ ');
    },
  }
  
}
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

.use-total{
  .member{
    background:#fff;
    margin-top:10px;
    display:flex;
    padding:15px;
    border-bottom:1px solid #e2e2e2;

    dl{
      flex:1;
      text-align:center;
      border-right:1px solid #e2e2e2;
      dt{font-size:24px;}
    }
    dl.new{
      dt{
        color:#03A9FF
      }
    }
    dl.total{
      border-right:0px
    }
  }

  .data{
    margin-top:10px;
    
    .items{
      margin-bottom:10px;
      background:#fff;

      h4{
        border-bottom:1px solid #e2e2e2;
        font-size:14px;
        font-weight:400;
        padding:10px;
      }
      .item{
        border-bottom:1px solid #e2e2e2;
        padding:15px 0;
        display:flex;
        dl{
          flex:1;
          text-align:center;
          border-right:1px solid #e2e2e2;
          dt{font-size:13px}
          dd{font-size:11px;margin-top:5px;}
        }
        dl:last-child{
          border-right:0px;
        }
      }
      .item-3{
        background:#FBF5F8;
        dt{color:#EF1682}
      }
    }
  }

  .items.use{
    .item{
      background:#F4FAFE;
      dt{color:#03A9FF}
    }
  }

  .items.rest{
    .item{
      dl{
        display:flex;
        justify-content: space-between;
        align-items: flex-end;
        padding:0 15px;

        dt{color:#d22828;}
      }
    }
  }
}

</style>