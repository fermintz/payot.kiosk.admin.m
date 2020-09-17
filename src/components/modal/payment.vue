<template>
  <v-dialog
    v-model="visible"
    max-width="900"
  >
    <div class="dialog-wrap">
      <div class="payment">
        <h4>결제정보입력</h4>
        <dl class="card-number">
          <dt>카드번호</dt>
          <dd>
            <input type="number">
            <input type="number">
            <input type="number">
            <input type="number">
          </dd>
        </dl>
        <dl class="card-date">
          <dt>유효기간</dt>
          <dd>
            <span>
              <input type="number">
              <label>월</label>
            </span>
            <span>
              <input type="number">
              <label>년</label>
            </span>
          </dd>
        </dl>
        <dl class="user-date">
          <dt>생년월일(6자리)</dt>
          <dd>
            <input type="number">
          </dd>
        </dl>
        <dl class="password">
          <dt>비밀번호(앞 2자리)</dt>
          <dd>
            <input type="password">
          </dd>
        </dl>

        <v-btn text>
          결제완료
        </v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
    }
  },
  methods:{
    open(value){
      this.visible = value;
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-wrap{

}
.payment{
  background:#fff;
  padding:20px;

  h4{
    margin-bottom:20px;
    font-size:16px;
    font-weight:500;
  }

  dl{
    margin-bottom:15px;
    dt{
      margin-bottom:5px;
      font-size:11px;
    }
    dd{
      input{
        width:100%;
        border:1px solid #c2c2c2;
        height:26px;
        border-radius:4px;
        background:#f8f8f8;
        padding:0 5px;
      }
      input:focus{
        background:#fff;
      }
    }
  }
  dl.card-number{
    dd{
      display:flex;
      input{
        flex:1;
        margin-right:5px;
        
      }
      input:last-child{margin-right:0px;}
    }
  }
  dl.card-date{
    dd{
      display:flex;
      span{
        display:flex;
        align-items: center;
        label{margin-left:5px;font-size:11px;}
        input{width:50px;}
      }
      span:first-child{margin-right:20px;}
    }
  }
  .v-btn{
    margin-top:10px;
    height:40px;
    background:#ee2073;
    color:#fff;
    width:100%;
  }
}
</style>