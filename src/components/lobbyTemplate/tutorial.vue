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
        <div class="content" id="freshContent">
           <div class="tabset">
                <!-- Tab 1 -->
                <input type="radio" name="tabset" id="tab1" aria-controls="agent" checked @click="gotoTop('xsjc')">
                <label for="tab1" class="tab1">新手教程</label>
                <!-- Tab 2 -->
                <input type="radio" name="tabset" id="tab2" aria-controls="commission" @click="gotoTop('czjc')">
                <label for="tab2" class="tab2">充值教程</label>

                <div class="tab-panels">
                    <section id="fresh" class="tab-panel" v-html="copyContent">

                    </section>
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
            copyTitle:'',
            copyContent:'',
            freshEdu: {},
            depositEdu: {}
        }
    },
  mounted:function() {
      $('html,body').css('overflow-y','scroll' )  ;
      //scrollTo(0,0); // 回到顶部
      document.documentElement.scrollTop = document.body.scrollTop=0; // 回到顶部
      this.freshEdu = JSON.parse(localStorage.getItem('freshEducationBT01'))
      this.depositEdu = JSON.parse(localStorage.getItem('freshEducationBT05'))
      this.copyContent = this.freshEdu
  },
  methods: {
      gotoTop: function (name) {
          if (name == 'xsjc') {
              this.copyContent = this.freshEdu.copyContent
              console.log(this.freshEdu ,'c1' )
          }
          if (name == 'czjc') {
              this.copyContent = this.depositEdu.copyContent
              console.log(this.freshEdu ,'c2' )

          }
          document.documentElement.scrollTop = document.body.scrollTop = 0; // 回到顶部
      },

}

}
</script>
<style scoped>


    #freshContent {
        margin-top: 1.37rem;
    }

    #freshContent .tab-panels {
        padding: 10px 5%;
    }
    #freshContent .tab-panels p {
        line-height: 30px;
        margin: .5rem 0;
    }

    #freshContent .tab-panels p strong {
        display: block;
        color: #b41a17;
    }

    #freshContent .tab-panels p span {
        display: block;
        text-indent: 0.5em;
    }
</style>