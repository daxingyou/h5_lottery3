<template>

    <div v-if="showNavigation" :class="'so-left '+ (showNavigation?'active':'')">
    <div class="so-shade" @click="close"></div>
    <!--<div class="so-left-close" @click="close">
        <img src="/static/frist/images/left/left808.png">
    </div>-->
    <div class="so-left-con">
      <div class="so-l-c-top">
          <!--<div>
              <img src="/static/frist/images/left/user.png">
          </div>-->
           <div>
              <p class="user_name" v-if="haslogin"><span class="icon icon_user"></span>{{getCookie('username')}}</p>
              <!--<div class="purse"  v-if="haslogin">
                  <span class="icon icon_money"></span>
                  <div class="so-in-top-sum" >
                      {{ fortMoney(roundAmt(balanceData ? balanceData.balance : 0), 2)}}
                      {{ fortMoney(roundAmt($parent.balanceData ? $parent.balanceData.balance : getCookie('membalance') ), 2)}}
                  </div>
              </div>-->
          </div>
      </div>
      <div class="so-l-c-con">

          <div>
                <div class="back_home" >
                  <a href="/">
                    <!--<span><img src="/static/frist/images/left/icon_home.png"></span>-->
                        <span>返回竞彩大厅</span>
                  </a>
                </div>
                <ul class="all_lottery">
                  <li :class="$route.path =='/'+gameHref[lottery.cid] ?'active':''" v-for="lottery in allLottery"  >
                    <router-link :to="'/'+gameHref[lottery.cid]" >
                      <div class="badge">
                          <!-- <img :src="lottery.imgUrl" alt="">-->
                          <!--<img v-lazy="'../static/frist/images/lotteryicon/cp'+lottery.cid+'.png'">-->
                      </div>
                      <p>{{lottery.name}}</p>
                    </router-link>
                  </li>
              </ul>
          </div>
      </div>
    </div>
       <!-- <AutoCloseDialog ref="autoCloseDialog" text=" " type="" />-->
  </div>

</template>


<script>
import Mixin from '@/Mixin'

// import $ from "jquery";
//  import AutoCloseDialog from '@/components/publicTemplate/AutoCloseDialog'

export default {
  name: 'UserNavigation',
  mixins:[Mixin],
  props:['el'],
  components: {
     //  AutoCloseDialog,
    },
 data :function() {
        return {
          balanceData: '' ,
          haslogin :false ,
          showNavigation:false ,
          allLottery:{},
          gamelist:[] ,
          gameHref : {
            "2":"cqssc",
            "12":"cqssc/tianJinIndex",
            "14":"cqssc/xinJiangIndex",//新疆时时彩
            "102":"cqssc/SecondSscIndex", 

            "4":"jc11x5",     //江西11选5
            "18":"jc11x5/sd11x5Index",  //山东11选5
            "16":"jc11x5/gd11x5Index",  //广东11选5
             "104":"jc11x5/ms11x5Index",//秒速11选5
            
            "8":"pk10",
            "108":"pk10/SecondPk10",//赛车
            "24":"pk10/LuckyBoat",//飞艇
            
            "6":"k3/",  //江苏快3
            "20":"k3/anHuiK3Index",  
            "22":"k3/huBeiK3Index",
            "106":'k3/miaoSuK3Index',
            "10":"lhc" ,
            "110":"wflhc",    
                       
          }, // 对应彩种的id
        }
    },
  created:function () {

  } ,
  mounted:function() {
      this.haslogin = this.ifLogined() ;
      this.setCookie('haslogin', this.haslogin)      
     $(this.el).on('click', ()=>{
      this.showNavigation = true;
      $('html,body').css({'height':'100%','overflow-y':'hidden'}) ; 
    }) ;

  },
  methods:{
      // 关闭侧滑栏
    close:function(e){
      this.showNavigation = false;
      $('html,body').css({'height':'auto','overflow-y':'scroll'}) ;      
    },
      // 获取彩种
      getLotterys:function() {
         /* return new Promise((resolve)=>{*/
         var _self = this ;
         var resdata  ;
          _self.gamelist = sessionStorage.gamelist ;
          if(true){
                  $.ajax({
                      type: 'GET',
                      async:false,
                      url: _self.action.forseti + 'apid/lotterys',
                      data: { sideType :2 }, // sideType， 1官彩，2双面彩，为空默认为1，即官彩
                      dataType: 'json',
                      success:(res)=> {
                      _self.allLottery = res && res.data ;  // 全部彩种,通过 v.cid 跳转到每个彩种   

                  resdata = res.data ;
                 // console.log(res.data)
                 // console.log(res.data[5].cid)
                  sessionStorage.gamelist= JSON.stringify(res.data) ; // 把彩种放在session 里

              },
                  error: function () {

                  }

              });
          }else{
              _self.allLottery =  JSON.parse(_self.gamelist) ;
              resdata =  JSON.parse(_self.gamelist) ;
          }

        return resdata ;

         /* })*/
      },

  },

}
</script>
<style scoped>
  .so-shade { display: block; z-index: 0; }
  .so-con .so-left .so-left-con .so-l-c-con ul:after{
              content: "";
              display: block;
              clear: both;
              height: 2rem;
  }
</style>