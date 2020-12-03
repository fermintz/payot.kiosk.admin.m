import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/login.vue";

import SubLayout from "../components/subLayout.vue";
import ErrorView from "../views/404.vue";

import OrderList from '../views/shop/order.vue';
import SalesList from '../views/shop/sales.vue';
import Remote from '../views/shop/remote.vue';

import PointList from '../views/kiosk/point-list.vue';
import KioskMonthSales from '../views/kiosk/month-sales.vue';
import KioskControl from '../views/kiosk/kiosk-control.vue';
import KioskMember from '../views/kiosk/member.vue';
import MemberPointControl from '../views/kiosk/member-point-control.vue';
import MemberPointList from '../views/kiosk/member-point-list.vue';
import Message from '../views/kiosk/message.vue';
import UseTotal from '../views/kiosk/use-total.vue';

import PoinTodaySales from '../views/poin/today-sales.vue';
import PoinMonthSales from '../views/poin/month-sales.vue';
import PoinCalc from '../views/poin/calc.vue';

import DailyTodaySales from '../views/daily/today-sales.vue';
import DailyMonthSales from '../views/daily/month-sales.vue';
import DailyCalc from '../views/daily/calc.vue';

import DaysStats from '../views/stats/days.vue';
import TimeStats from '../views/stats/time.vue';
import MonthStats from '../views/stats/month.vue';
import WeekStats from '../views/stats/week.vue';
import Cost from '../views/stats/cost.vue'

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Home",
    meta: { groupTitle: '메인', icon: 'home', title: '메인' },
    component: Home,
  },
  {
    path:"/login",
    name:"Login",
    meta: { groupTitle: '로그인', icon: 'home', title: '로그인' },
    component: Login,
  },
  {
    path: "/shop",
    name: "shop",
    component:SubLayout,
    meta: { groupTitle: '장비(현금)관리', icon: 'home-city-outline' },
    redirect: '/shop/pay/list',
    children:[
      {
        path:"/shop/pay/list",
        name:'cash-pay-list',
        meta:{
          groupTitle: '장비(현금)관리',
          title:'결제내역'
        },
        component: OrderList
      },
      {
        path:"/shop/sales/total",
        name:'shop-sales-total',
        component: SalesList,
        meta:{
          groupTitle: '장비(현금)관리',
          title:'월별 매출현황'
        },
      },
      {
        path:"/shop/remote",
        name:'shop-remote',
        component: Remote,
        meta:{
          groupTitle: '장비(현금)관리',
          title: '원격 투입'
        },
      },
    ]
  },
  {
    path: '/kiosk',
    name: 'Kiosk',
    meta: { groupTitle: '키오스크', icon: 'monitor-dashboard' },
    component:SubLayout,
    children: [
      {
        path:"/kiosk/member",
        name:'kiosk-member',
        component: KioskMember,
        meta:{
          groupTitle: '키오스크',
          title: '회원 이용내역'
        },
      },

      {
        path:"/kiosk/use-total",
        name:'use-total',
        component: UseTotal,
        meta:{
          groupTitle: '키오스크',
          title: '키오스크 사용요약'
        },
      },

      {
        path:"/kiosk/month-sales",
        name:'kiosk-month-sales',
        component: KioskMonthSales,
        meta:{
          groupTitle: '키오스크',
          title: '키오스크 월 매출현황'
        },
      },
      
      {
        path:"/kiosk/control",
        name:'kiosk-control',
        component: KioskControl,
        meta:{
          groupTitle: '키오스크',
          title: '키오스크 제어'
        },
      },
      
      {
        path:"/kisok/point-list",
        name:'kisok-point-list',
        component: PointList,
        meta:{
          groupTitle: '키오스크',
          title: '회원 포인트 이용/충전 내역'
        },
      },
      {
        path:"/kiosk/member-point-control",
        name:'member-point-control',
        component: MemberPointControl,
        meta:{
          groupTitle: '키오스크',
          title: '회원 포인트 지급/차감'
        },
      },
      {
        path:"/kiosk/member-point-list",
        name:'member-point-list',
        component: MemberPointList,
        meta:{
          groupTitle: '키오스크',
          title: '회원 포인트 지급/차감 내역'
        },
      },
      {
        path:"/kiosk/message",
        name:'message',
        component: Message,
        meta:{
          groupTitle: '키오스크',
          title: '문자발송'
        },
      },
    ]
  },

  {
    path: '/poin',
    name: 'poin',
    meta: { groupTitle: '포인플러스', icon: 'cellphone-iphone' },
    component:SubLayout,
    children: [
      {
        path:"/poin/today-sales",
        name:'poin-today-sales',
        component: PoinTodaySales,
        meta:{
          groupTitle: '포인플러스',
          title: '결제내역'
        },
      },
      {
        path:"/poin/month-sales",
        name:'poin-month-sales',
        component: PoinMonthSales,
        meta:{
          groupTitle: '포인플러스',
          title: '월별 매출현황'
        },
      },
      {
        path:"/poin/calc",
        name:'poin-calc',
        component: PoinCalc,
        meta:{
          groupTitle: '포인플러스',
          title: '정산내역'
        },
      }, 
    ]
  },

  {
    path: '/daily',
    name: 'daily',
    meta: { groupTitle: '데일리세탁', icon: 'washing-machine' },
    component:SubLayout,
    children: [
      {
        path:"/daily/today-sales",
        name:'daily-today-sales',
        component: DailyTodaySales,
        meta:{
          groupTitle: '데일리세탁',
          title: '결제내역'
        },
      },
      {
        path:"/daily/month-sales",
        name:'daily-month-sales',
        component: DailyMonthSales,
        meta:{
          groupTitle: '데일리세탁',
          title: '월별 매출현황',
        },
      },
      {
        path:"/daily/calc",
        name:'daily-calc',
        component: DailyCalc,
        meta:{
          groupTitle: '데일리세탁',
          title: '정산내역'
        },
      },
    ]
  },
  {
    path: '/stats',
    name: 'stats',
    meta: { groupTitle: '매출통계', icon: 'chart-bar' },
    component:SubLayout,
    children: [
      {
        path:"/stats/days",
        name:'stats-days',
        component: DaysStats,
        meta:{
          groupTitle: '매출통계',
          title: '일자별 매출분석'
        },
      },
      {
        path:"/stats/month",
        name:'stats-month',
        component: MonthStats,
        meta:{
          groupTitle: '매출통계',
          title: '월별 매출분석'
        },
      },
      {
        path:"/stats/week",
        name:'stats-week',
        component: WeekStats,
        meta:{
          groupTitle: '매출통계',
          title: '요일별 매출분석'
        },
      },
      {
        path:"/stats/time",
        name:'stats-time',
        component: TimeStats,
        meta:{
          groupTitle: '매출통계',
          title: '시간대별 매출분석'
        },
      },
      {
        path:"/stats/cost",
        name:'stats-cost',
        component: Cost,
        meta:{
          groupTitle: '매출통계',
          title: '나의 매장 비용계산'
        },
      }, 
    ]
  },
  {
    path: '*',
    name: 'Error',
    component: ErrorView,
    meta: { title: '페이지를 찾을 수 없음' },
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
