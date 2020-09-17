<template>
  <div class="contents">
    <SubHeader />

    <div class="message-wrap">
      <div class="form">
        <h4>회원설정</h4>
        <dl class="memberNumber">
          <dt>
            대상회원수
          </dt>
          <dd><strong>0</strong> 명</dd>
        </dl>
        <dl class="selector">
          <dt>
            대상회원설정
          </dt>
          <dd>
            <select v-model="selected">
							<option value="" disabled>대상회원을 선택해주세요</option>
              <option value="1">전체가입자</option>
              <option value="2">회원 가입일 기준</option>
              <option value="3">회원 이용일 기준</option>
            </select>
          </dd>
        </dl>
        <dl class="dateSelector"
					v-if="selected > 1"
				>
          <dt>
            기준날짜선택
          </dt>
          <dd>
            <v-dialog
							ref="dialog"
							v-model="modal"
							:return-value.sync="date"
							persistent
							width="290px"
						>
							<template v-slot:activator="{ on, attrs }">
								<input
									type="text"
									v-model="date"
									v-bind="attrs"
									v-on="on"
								>
							</template>
							<v-date-picker v-model="date" scrollable locale="ko" :first-day-of-week="0" @input="$refs.dialog.save(date)">
								<v-spacer></v-spacer>
							</v-date-picker>
						</v-dialog>
            <select>
              <option>이전</option>
              <option>이후</option>
            </select>
          </dd>
        </dl>
        <dl class="inputBox">
          <dt>
            누적결제 금액
          </dt>
          <dd>
            <input type="number" placeholder="금액을 입력해주세요" />
            <span>원 (이상 이용자)</span>
          </dd>
        </dl>
        <div class="btns">
          <v-btn text>
            조회하기
          </v-btn>
        </div>
      </div>

      <div class="form">
        <h4>문자 내용입력</h4>
        <dl class="selector">
          <dt>
            이벤트선택
          </dt>
          <dd>
            <select v-model="selected2">
							<option disabled value="">이벤트를 선택해주세요</option>
              <option value="1">문자발송만</option>
              <option value="2">문자+포인트 발송</option>
            </select>
          </dd>
        </dl>
        <dl class="inputBox" v-if="selected2 > 1">
          <dt>
            적립금액
          </dt>
          <dd>
            <input type="number" placeholder="금액을 입력해주세요" />
            <span>원</span>
          </dd>
        </dl>
        <dl class="textarea">
          <dt>
            문자내용
          </dt>
          <dd>
            <textarea placeholder="문자로 발송할 내용을 입력해주세요"></textarea>
          </dd>
        </dl>
      </div>

      <div class="form detail">
        <dl>
          <dd>
            <span>
              <label>대상회원</label>
              <strong>0원</strong>
            </span>
            <span>
              <label>이벤트종류</label>
              <strong>문자+포인트적립</strong>
            </span>
            <span>
              <label>대상분류</label>
              <strong>모든회원</strong>
            </span>
          </dd>
        </dl>
        <div class="divider" />
        <dl>
          <dd>
            <span>
              <label>대상자x문자발송비용(건당 80원)</label>
              <strong>0원</strong>
            </span>
            <span>
              <label>부가가치세</label>
              <strong>0원</strong>
            </span>
          </dd>
        </dl>
        <div class="divider" />
        <dl class="lastPirce">
          <dd>
            <span>
              <label>최종금액</label>
              <strong><b>0</b>원</strong>
            </span>
          </dd>
        </dl>
        <v-btn text @click="$refs.payment.open(true)"> 이벤트 결제 진행하기</v-btn>
      </div>
    </div>

    <PaymentModal ref="payment"/>
  </div>
</template>

<script>
import SubHeader from '@/components/subHeader.vue';
import PaymentModal from '@/components/modal/payment.vue';

export default {
  components: {
    SubHeader,
    PaymentModal,
  },
  data: () => ({
		date: new Date().toISOString().substr(0, 10),
		modal: false,
		selected:'',
		selected2:''
	}),
	

};
</script>

<style lang="scss" scoped>
.message-wrap {
  .form {
    margin-bottom: 15px;
    background: #fff;
    padding: 20px;
    h4 {
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 15px;
      border-bottom: 1px solid #e2e2e2;
      padding-bottom: 15px;
    }
    .btns {
      text-align: center;
      .v-btn {
        width: 100%;
        height: 40px;
        background: #393939;
        color: #fff;
        border-radius: 4px;
      }
    }

    dl {
      margin-bottom: 20px;
      dt {
        color: #888;
      }
      dd {
        overflow: hidden;
        margin-top: 8px;
      }
    }
    dl:last-child {
      margin-bottom: 0px;
    }
    dl.memberNumber {
      display: flex;
      align-items: center;
      justify-content: space-between;

      dd {
        margin-top: 0px;
        strong {
          font-size: 24px;
          color: #ff6600;
        }
      }
    }
    dl.dateSelector {
      dd {
        display: flex;
        input {
          flex: 1;
          border: 1px solid #e2e2e2;
          height: 40px;
          background: #f8f8f8;
					padding:0 10px;
        }
        select {
          width: 80px;
          border: 1px solid #d2d2d2;
          height: 40px;
          margin-left: 10px;
          padding: 0 10px;
        }
      }
    }
    dl.selector {
      dd {
        select {
          width: 100%;
          border: 1px solid #e2e2e2;
          height: 40px;
          padding: 0 10px;
        }
      }
    }
    dl.inputBox {
      dd {
        display: flex;
        align-items: center;
        border: 1px solid #e2e2e2;
        height: 40px;

        input {
          flex: 1;
          height: 40px;
          border-right: 1px solid #e2e2e2;
          padding: 0 10px;
          background: #f8f8f8;
        }

        span {
          padding: 0 10px;
        }
      }
    }
    dl.textarea {
      textarea {
        border: 1px solid #e2e2e2;
        width: 100%;
        max-height: 200px;
        padding: 10px;
        min-height: 150px;
      }
    }
  }
  .detail {
    background: #fff3f3;
    .divider {
      height: 1px;
      background: #e2e2e2;
      margin: 20px 0;
    }
    dl {
      margin-bottom: 0px;

      dd {
        margin-top: 10px;
        span {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;

          label {
            color: #888;
          }
          strong {
            font-weight: 500;
          }
        }
      }
    }
    dl.lastPirce {
      dd {
        span {
          label {
            color: #292929;
          }
          strong {
            b {
              color: #ee2073;
              font-size: 24px;
              margin-right: 5px;
            }
          }
        }
      }
    }
    .v-btn {
      width: 100%;
      height: 40px;
      background: #ee2073;
      color: #fff;
      margin-top: 20px;
    }
  }
}
</style>
