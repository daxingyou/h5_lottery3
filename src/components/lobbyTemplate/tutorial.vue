<template>
    <div id="pa_con" class="so-con warp ">
        <header id="pa_head" class="new_header">
            <div class="left">
                <a href="javascript:;" onclick="history.go(-1)" >
                    <span class="icon icon_back"></span>
                </a>
            </div>
            <h2 class="center title_name">{{copyTitle}}</h2>
            <div class="right"></div>
        </header>
        <div class="pa_content" id="freshContent">
            <div class="tutorial_area page_box">
           <div class="tabset">
                <!-- Tab 1 -->
                <input type="radio" name="tabset" id="tab1" aria-controls="agent" checked @click="gotoTop('xsjc')">
                <label for="tab1" class="tab1">新手教程</label>
                <!-- Tab 2 -->
                <input type="radio" name="tabset" id="tab2" aria-controls="commission" @click="gotoTop('czjc')">
                <label for="tab2" class="tab2">充值教程</label>

                <div class="tab-box">
                    <section  class="tab-pone" v-html="copyContent" v-if= 'tabShow'>

                    </section>
                </div>
            </div>
            </div>
        </div>

        <FooterNav />

    </div>
</template>

<script>
// import $ from "jquery";
import Mixin from '@/Mixin'
// import AutoCloseDialog from '@/components/publicTemplate/AutoCloseDialog'
import FooterNav from '@/components/Footer'

export default {
  name: 'about',
  mixins:[Mixin],
  components: {
   // AutoCloseDialog,
      FooterNav ,
  },
    data: function() {
        return {
            copyTitle:'新手教程',
            copyContent:'',
            freshEdu: {},
            depositEdu: {},
            tabShow:true
        }
    },
  mounted:function() {
      // $('html,body').css('overflow-y','scroll' )  ;
      // //scrollTo(0,0); // 回到顶部
      // document.documentElement.scrollTop = document.body.scrollTop=0; // 回到顶部
      // this.freshEdu = JSON.parse(localStorage.getItem('freshEducationBT01'))
      // this.depositEdu = JSON.parse(localStorage.getItem('freshEducationBT05'))
      // this.copyContent = this.freshEdu

      $('html,body').css('overflow-y', 'scroll');
      this.getCopyright('1', 'BT01')
  },
  methods: {
      // gotoTop: function (name) {
      //     if (name == 'xsjc') {
      //         this.copyContent = this.freshEdu.copyContent
      //         console.log(this.freshEdu ,'c1' )
      //     }
      //     if (name == 'czjc') {
      //         this.copyContent = this.depositEdu.copyContent
      //         console.log(this.freshEdu ,'c2' )

      //     }
      //     document.documentElement.scrollTop = document.body.scrollTop = 0; // 回到顶部
      // },

       gotoTop: function (name) {
          //scrollTo(0,0);
          if (name == 'xsjc') {
              this.getCopyright('1', 'BT01')
          }
          if (name == 'czjc') {
              this.getCopyright('1', 'BT05')

          }
      },

}

}
</script>
<style scoped>


    /*#freshContent {
        margin-top: 1.37rem;
    }*/

    #freshContent .tab-pone {
        padding: 0.3rem;
    }
    #freshContent .tab-pone p {
        margin: .3rem 0;
        text-align: left;

    }

    #freshContent .tab-pone p strong {
        display: block;
        color: #b41a17;
        text-align: left;

    }

    #freshContent .tab-pone p span {
        display: block;
        text-indent: 0.5em;
        text-align: left;
        text-indent: 30px;
    }
</style>