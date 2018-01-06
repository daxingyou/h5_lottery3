<template>
<div class="so-con" id="sixlot">
    <!--用户导航 so-left -->
    <UserNavigation el=".so-menu" ref="navone"/>
    <!--right menu  
        属性
            el 要绑定到哪个节点上，即点击哪个节点触发
        事件
            play 当用户点击完法说明时触发
    -->
    <UserMenu el=".so-top-zoushi" @play="$refs.playDialog.open()" :payoff="balanceData.payoff" />

    <div class="so-index">
        <div class="so-top-all">
            <div class="new_header so-in-top">
                <MenuBar :moduleName="moduleName || '香港六合彩'" :balance="balancePublic" />
            </div>
            <div class="so-in-main">
                <div>
                    <div class="so-main-top">
                        <div class="so-m-t-left">
                            <div>
                                第 <span class="last-date">20170914067</span> 期 <!-- 上期 -->
                            </div>
                            <div>
                                <router-link to="/publicTemplate/pastView">
                                    <p>
                                        查看往期
                                    </p>
                                </router-link>
                            </div>
                        </div>
                        <div class="so-m-t-right">
                            <div class="last-open-num">
                                <ul class="sixlot_top_number">
                                    <li class="active sixlot_ball num_11">11</li>
                                    <li class="active sixlot_ball num_04">04</li>
                                    <li class="active sixlot_ball num_09">05</li>
                                    <li class="active sixlot_ball num_10">10</li>
                                    <li class="active sixlot_ball num_09">09</li>
                                    <li class="active sixlot_ball num_15">15</li>
                                    <li>+</li>
                                    <li class="active sixlot_ball num_49">49</li>
                                </ul>
                            </div>
                            <!--<div class="last-open-dou">
                                <ul>
                                    <li>31</li>
                                    <li>大</li>
                                    <li>单</li>
                                    <li>龙</li>
                                </ul>
                            </div>-->
                        </div>
                    </div>
                    <div class="so-main-down">
                        <ul>
                            <li>
                                <p>
                                    第 <span class="now-date">20170914068</span> 期
                                </p>
                            </li>
                            <li>
                                <i></i>
                                <span>封盘</span>
                                <a class="close-time">00:00:33</a>
                            </li>
                            <li class="kjdjs-timer">
                                <i></i>
                                <span>开奖</span>
                                <a class="open-time">00:00:33</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="so-in-con">
            <div class="so-con-left" id="nav-wrapper">
                <ul >
                    <li :class="(index == 0 && 'active')"  v-for="(kind,index) in kinds" @click="switchTab">
                        <!-- <a :href="'#so-item'+index">{{kind}}</a>-->
                        <a>{{kind}}</a>
                    </li>
                    <!--<li class="active"><a>特码</a></li>
                    <li><a>两面</a></li>
                    <li><a>正码</a></li>
                    <li><a>正码1-6</a></li>
                    <li><a>正特</a></li>
                    <li><a>连码</a></li>
                    <li><a>色波</a></li>
                    <li><a>特码头尾</a></li>
                    <li><a>总肖</a></li>
                    <li><a>平特肖尾</a></li>
                    <li><a>特肖</a></li>
                    <li><a>连肖</a></li>
                    <li><a>合肖</a></li>
                    <li><a>连尾</a></li>
                    <li><a>正肖</a></li>
                    <li><a>特码五行</a></li>
                    <li><a>自选不中</a></li>-->
                </ul>
            </div>
            <!--特码(index:0) 选项卡按钮(fixed)-->
            <div class="hd jx11_tab bet_tab" id="bet_tab_0" style="display:block">
                <ul class="tab tab_mid">
                    <li class="on" style="width:49%;"><a href="javascript:;">特码B</a></li>
                    <li style="width:50%;"><a href="javascript:;">特码A</a></li>
                </ul>
            </div>
            <!-- 正特(index:4) 选项卡按钮(fixed) -->
            <div class="hd jx11_tab bet_tab" id="bet_tab_4">
                <ul class="tab tab_mid">
                    <li class="on"><a href="javascript:;">正1特</a></li>
                    <li><a href="javascript:;">正2特</a></li>
                    <li><a href="javascript:;">正3特</a></li>
                    <li><a href="javascript:;">正4特</a></li>
                    <li><a href="javascript:;">正5特</a></li>
                    <li><a href="javascript:;">正6特</a></li>
                </ul>
            </div>
            <!-- 连码(index:5) 选项卡按钮(fixed) -->
            <div class="hd jx11_tab bet_tab" id="bet_tab_5">
                <ul class="tab tab_mid">
                    <li class="on"><a href="javascript:;">三全中</a></li>
                    <li><a href="javascript:;">三中二</a></li>
                    <li><a href="javascript:;">二全中</a></li>
                    <li><a href="javascript:;">二中特</a></li>
                    <li><a href="javascript:;">特串</a></li>
                    <li><a href="javascript:;">四全中</a></li>
                </ul>
            </div>
            <!-- 连肖(index:11) 选项卡按钮(fixed) -->
            <div class="hd jx11_tab bet_tab" id="bet_tab_11">
                <ul class="tab tab_mid">
                    <li class="on"><a href="javascript:;">二连肖</a></li>
                    <li><a href="javascript:;">三连肖</a></li>
                    <li><a href="javascript:;">四连肖</a></li>
                    <li><a href="javascript:;">五连肖</a></li>
                </ul>
            </div>
            <!-- 连尾(index:13) 选项卡按钮(fixed) -->
            <div class="hd jx11_tab bet_tab" id="bet_tab_13">
                <ul class="tab tab_mid">
                    <li class="on"><a href="javascript:;">二连尾</a></li>
                    <li><a href="javascript:;">三连尾</a></li>
                    <li><a href="javascript:;">四连尾</a></li>
                    <li><a href="javascript:;">五连尾</a></li>
                </ul>
            </div>

            <div id="content-wrapper">
                <div class="so-con-right">
                    <div id="scroller" >
                        <!--以下为盘面不同样式，根据ID+class区分-->
                        <!-- 特码(index:0) -->
                        <div class="content-right tab_container tabBox item_one">
                            <div class="bd">
                                <ul class="tab_content">
                                    <li class="select-li">
                                        <div class="bet_panel">
                                            <h2>
                                                特码B
                                                <div class="bet_filter">
                                                    <span @click="betFilter">快选 <span class="icon icon_arrow_down"></span></span>
                                                    <ul>
                                                        <li class="active">鼠</li><li>牛</li><li>虎</li><li>兔</li><li>龙</li><li>蛇</li>
                                                        <li>马</li><li>羊</li><li>猴</li><li>鸡</li><li>狗</li><li>猪</li>
                                                    </ul>
                                                </div>
                                            </h2>
                                            <div class="bet_ball">
                                                <p class="active">
                                                    <span class="sixlot_ball num_01">01</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_02">02</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p class="active">
                                                    <span class="sixlot_ball num_03">03</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_04">04</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_05">05</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p class="active">
                                                    <span class="sixlot_ball num_06">06</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_07">07</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_08">08</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_09">09</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_10">10</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_11">11</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_12">12</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_13">13</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_14">14</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_15">15</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_16">16</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_17">17</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_18">18</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_19">19</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_20">20</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_21">21</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_22">22</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_23">23</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_24">24</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_25">25</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_26">26</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_27">27</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_28">28</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_29">29</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_30">30</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_31">31</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_32">32</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_33">33</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_34">34</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_35">35</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_36">36</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_37">37</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_38">38</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_39">39</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_40">40</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_41">41</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_42">42</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_43">43</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_44">44</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_45">45</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_46">46</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_47">47</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_48">48</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_49">49</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="select-li">
                                        <div class="bet_panel">
                                            <h2>
                                                两面
                                            </h2>
                                            <div class="bet_box">
                                                <p>
                                                    <span>大</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p class="active">
                                                    <span>小</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>单</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>双</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p class="active">
                                                    <span>红波</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>蓝波</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>绿波</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="tab_content" style="display:none;">
                                    <li class="select-li">
                                        <div class="bet_panel">
                                            <h2>
                                                特码A
                                            </h2>
                                            <div class="bet_ball">
                                                <p class="active">
                                                    <span class="sixlot_ball num_01">01</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_02">02</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p class="active">
                                                    <span class="sixlot_ball num_03">03</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_04">04</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_05">05</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p class="active">
                                                    <span class="sixlot_ball num_06">06</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_07">07</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_08">08</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_09">09</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_10">10</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_11">11</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_12">12</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_13">13</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_14">14</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_15">15</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_16">16</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_17">17</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_18">18</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_19">19</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_20">20</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_21">21</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_22">22</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_23">23</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_24">24</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_25">25</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_26">26</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_27">27</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_28">28</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_29">29</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_30">30</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_31">31</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_32">32</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_33">33</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_34">34</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_35">35</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_36">36</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_37">37</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_38">38</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_39">39</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_40">40</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_41">41</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_42">42</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_43">43</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_44">44</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_45">45</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_46">46</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_47">47</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_48">48</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_49">49</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="select-li">
                                        <div class="bet_panel">
                                            <h2>
                                                两面
                                            </h2>
                                            <div class="bet_box">
                                                <p>
                                                    <span>大</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p class="active">
                                                    <span>小</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>单</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>双</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p class="active">
                                                    <span>红波</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>蓝波</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>绿波</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- 两面(index:1) -->
                        <div class="content-right item_one" style="display:none">
                            <ul>
                                <li class="select-li">
                                    <div class="bet_panel">
                                        <h2>
                                            特码两面
                                        </h2>
                                        <div class="bet_box">
                                            <p class="active">
                                                <span>特大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>特小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>特单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>特双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>特合大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>特合小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>特合单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p class="active">
                                                <span>特合双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>特天肖</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>特地肖</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>特前肖</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>特后肖</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>特家肖</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>特野肖</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>特尾大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>特尾小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>特大单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>特大双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>特小单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>特小双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- 正码(index:2) -->
                        <div class="content-right item_one" style="display:none">
                            <ul>
                                <li class="select-li">
                                    <div class="bet_panel">
                                        <h2>
                                            正码
                                        </h2>
                                        <div class="bet_ball">
                                            <p class="active">
                                                <span class="sixlot_ball num_01">01</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_02">02</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p class="active">
                                                <span class="sixlot_ball num_03">03</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_04">04</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_05">05</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p class="active">
                                                <span class="sixlot_ball num_06">06</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_07">07</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_08">08</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_09">09</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_10">10</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_11">11</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_12">12</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_13">13</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_14">14</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_15">15</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_16">16</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_17">17</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_18">18</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_19">19</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_20">20</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_21">21</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_22">22</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_23">23</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_24">24</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_25">25</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_26">26</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_27">27</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_28">28</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_29">29</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_30">30</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_31">31</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_32">32</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_33">33</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_34">34</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_35">35</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_36">36</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_37">37</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_38">38</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_39">39</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_40">40</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_41">41</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_42">42</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_43">43</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_44">44</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_45">45</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_46">46</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_47">47</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_48">48</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_49">49</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="select-li">
                                    <div class="bet_panel">
                                        <h2>
                                            总和
                                        </h2>
                                        <div class="bet_box">
                                            <p>
                                                <span>总大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p class="active">
                                                <span>总小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>总单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>总双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- 正码1-6(index:3) -->
                        <div class="content-right item_one" style="display:none">
                            <ul>
                                <li class="select-li">
                                    <div class="bet_panel">
                                        <h2>
                                            正码一
                                        </h2>
                                        <div class="bet_box">
                                            <p class="active">
                                                <span>大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p class="active">
                                                <span>合双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>尾大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>尾小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p class="active">
                                                <span>红波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>蓝波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>绿波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="select-li">
                                    <div class="bet_panel">
                                        <h2>
                                            正码二
                                        </h2>
                                        <div class="bet_box">
                                            <p>
                                                <span>大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>尾大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>尾小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>红波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>蓝波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>绿波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="select-li">
                                    <div class="bet_panel">
                                        <h2>
                                            正码三
                                        </h2>
                                        <div class="bet_box">
                                            <p>
                                                <span>大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>尾大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>尾小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>红波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>蓝波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>绿波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="select-li">
                                    <div class="bet_panel">
                                        <h2>
                                            正码四
                                        </h2>
                                        <div class="bet_box">
                                            <p>
                                                <span>大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>尾大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>尾小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>红波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>蓝波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>绿波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="select-li">
                                    <div class="bet_panel">
                                        <h2>
                                            正码五
                                        </h2>
                                        <div class="bet_box">
                                            <p>
                                                <span>大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>尾大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>尾小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>红波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>蓝波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>绿波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="select-li">
                                    <div class="bet_panel">
                                        <h2>
                                            正码六
                                        </h2>
                                        <div class="bet_box">
                                            <p>
                                                <span>大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>合双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>尾大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>尾小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>红波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>蓝波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>绿波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- 正特(index:4) -->
                        <div class="content-right tab_container tabBox item_one" style="display:none">
                            <div class="bd">
                                <ul class="tab_content">
                                    <li class="select-li">
                                        <div class="bet_panel">
                                            <h2>
                                                特码B
                                            </h2>
                                            <div class="bet_ball">
                                                <p class="active">
                                                    <span class="sixlot_ball num_01">01</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_02">02</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p class="active">
                                                    <span class="sixlot_ball num_03">03</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_04">04</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_05">05</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p class="active">
                                                    <span class="sixlot_ball num_06">06</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_07">07</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_08">08</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_09">09</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_10">10</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_11">11</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_12">12</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_13">13</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_14">14</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_15">15</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_16">16</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_17">17</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_18">18</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_19">19</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_20">20</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_21">21</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_22">22</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_23">23</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_24">24</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_25">25</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_26">26</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_27">27</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_28">28</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_29">29</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_30">30</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_31">31</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_32">32</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_33">33</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_34">34</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_35">35</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_36">36</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_37">37</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_38">38</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_39">39</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_40">40</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_41">41</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_42">42</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_43">43</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_44">44</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_45">45</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_46">46</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_47">47</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_48">48</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_49">49</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="select-li">
                                        <div class="bet_panel">
                                            <h2>
                                                两面
                                            </h2>
                                            <div class="bet_box">
                                                <p>
                                                    <span>大</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>小</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>单</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>双</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>合大</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>合小</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>合单</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>合双</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>尾大</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>尾小</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>红波</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>蓝波</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>绿波</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="tab_content" style="display:none;">
                                    <li class="select-li">
                                        <div class="bet_panel">
                                            <h2>
                                                特码A
                                            </h2>
                                            <div class="bet_ball">
                                                <p class="active">
                                                    <span class="sixlot_ball num_01">01</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_02">02</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p class="active">
                                                    <span class="sixlot_ball num_03">03</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_04">04</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_05">05</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p class="active">
                                                    <span class="sixlot_ball num_06">06</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_07">07</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_08">08</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_09">09</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_10">10</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_11">11</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_12">12</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_13">13</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_14">14</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_15">15</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_16">16</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_17">17</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_18">18</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_19">19</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_20">20</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_21">21</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_22">22</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_23">23</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_24">24</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_25">25</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_26">26</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_27">27</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_28">28</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_29">29</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_30">30</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_31">31</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_32">32</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_33">33</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_34">34</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_35">35</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_36">36</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_37">37</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_38">38</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_39">39</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_40">40</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_41">41</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_42">42</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_43">43</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_44">44</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_45">45</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_46">46</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_47">47</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_48">48</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_49">49</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="select-li">
                                        <div class="bet_panel">
                                            <h2>
                                                两面
                                            </h2>
                                            <div class="bet_box">
                                                <p>
                                                    <span>大</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p class="active">
                                                    <span>小</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>单</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>双</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p class="active">
                                                    <span>红波</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>蓝波</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span>绿波</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- 连码(index:5) -->
                        <div class="content-right tab_container tabBox item_one" style="display:none">
                            <div class="bd">
                                <ul class="tab_content">
                                    <li class="select-li">
                                        <div class="bet_panel">
                                            <h2>
                                                三全中
                                            </h2>
                                            <div class="bet_ball">
                                                <p class="active">
                                                    <span class="sixlot_ball num_01">01</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_02">02</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p class="active">
                                                    <span class="sixlot_ball num_03">03</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_04">04</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_05">05</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p class="active">
                                                    <span class="sixlot_ball num_06">06</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_07">07</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_08">08</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_09">09</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_10">10</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_11">11</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_12">12</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_13">13</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_14">14</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_15">15</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_16">16</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_17">17</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_18">18</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_19">19</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_20">20</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_21">21</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_22">22</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_23">23</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_24">24</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_25">25</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_26">26</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_27">27</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_28">28</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_29">29</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_30">30</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_31">31</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_32">32</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_33">33</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_34">34</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_35">35</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_36">36</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_37">37</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_38">38</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_39">39</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_40">40</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_41">41</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_42">42</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_43">43</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_44">44</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_45">45</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_46">46</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_47">47</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_48">48</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_49">49</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="tab_content" style="display:none;">
                                    <li class="select-li">
                                        <div class="bet_panel">
                                            <h2>
                                                三中二
                                            </h2>
                                            <div class="bet_ball">
                                                <p class="active">
                                                    <span class="sixlot_ball num_01">01</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_02">02</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p class="active">
                                                    <span class="sixlot_ball num_03">03</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_04">04</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_05">05</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p class="active">
                                                    <span class="sixlot_ball num_06">06</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_07">07</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_08">08</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_09">09</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_10">10</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_11">11</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_12">12</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_13">13</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_14">14</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_15">15</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_16">16</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_17">17</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_18">18</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_19">19</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_20">20</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_21">21</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_22">22</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_23">23</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_24">24</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_25">25</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_26">26</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_27">27</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_28">28</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_29">29</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_30">30</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_31">31</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_32">32</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_33">33</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_34">34</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_35">35</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_36">36</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_37">37</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_38">38</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_39">39</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_40">40</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_41">41</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_42">42</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_43">43</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_44">44</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_45">45</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_46">46</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_47">47</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_48">48</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                                <p>
                                                    <span class="sixlot_ball num_49">49</span>
                                                    <span class="bet-times">1.935</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- 色波(index:6) -->
                        <div class="content-right item_one" style="display:none">
                            <ul>
                                <li class="select-li">
                                    <div class="bet_panel">
                                        <h2>
                                            特码色波
                                        </h2>
                                        <div class="bet_box">
                                            <p class="active">
                                                <span>红波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>蓝波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>绿波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="select-li">
                                    <div class="bet_panel">
                                        <h2>
                                            7色波
                                        </h2>
                                        <div class="bet_box">
                                            <p>
                                                <span>红波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>蓝波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>绿波</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>和局</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="select-li">
                                    <div class="bet_panel">
                                        <h2>
                                            红球
                                        </h2>
                                        <div class="bet_box">
                                            <p>
                                                <span>红大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>红小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>红单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>红双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>红大单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>红大双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>红小单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>红小双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="select-li">
                                    <div class="bet_panel">
                                        <h2>
                                            蓝球
                                        </h2>
                                        <div class="bet_box">
                                            <p>
                                                <span>蓝大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>蓝小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>蓝单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>蓝双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>蓝大单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>蓝大双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>蓝小单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>蓝小双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="select-li">
                                    <div class="bet_panel">
                                        <h2>
                                            绿球
                                        </h2>
                                        <div class="bet_box">
                                            <p>
                                                <span>绿大</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>绿小</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>绿单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>绿双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>绿大单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>绿大双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>绿小单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>绿小双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- 特码头尾(index:7) -->
                        <div class="content-right item_one" style="display:none">
                            <ul>
                                <li class="select-li">
                                    <div class="bet_panel">
                                        <h2>
                                            头数
                                        </h2>
                                        <div class="bet_box">
                                            <p class="active">
                                                <span>0头</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>1头</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>2头</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>3头</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>4头</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="select-li item_full">
                                    <div class="bet_panel">
                                        <h2>
                                            尾数
                                        </h2>
                                        <div class="bet_box">
                                            <p>
                                                <span>0尾</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_10">10</span>
                                                    <span class="sixlot_ball num_20">20</span>
                                                    <span class="sixlot_ball num_30">30</span>
                                                    <span class="sixlot_ball num_40">40</span>
                                                </span>
                                            </p>
                                            <p class="active">
                                                <span>1尾</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_01">01</span>
                                                    <span class="sixlot_ball num_11">11</span>
                                                    <span class="sixlot_ball num_21">21</span>
                                                    <span class="sixlot_ball num_31">31</span>
                                                    <span class="sixlot_ball num_41">41</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>2尾</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_02">02</span>
                                                    <span class="sixlot_ball num_12">12</span>
                                                    <span class="sixlot_ball num_22">22</span>
                                                    <span class="sixlot_ball num_32">32</span>
                                                    <span class="sixlot_ball num_42">42</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>3尾</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_03">03</span>
                                                    <span class="sixlot_ball num_13">13</span>
                                                    <span class="sixlot_ball num_23">23</span>
                                                    <span class="sixlot_ball num_33">33</span>
                                                    <span class="sixlot_ball num_43">43</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>4尾</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_04">04</span>
                                                    <span class="sixlot_ball num_14">14</span>
                                                    <span class="sixlot_ball num_24">24</span>
                                                    <span class="sixlot_ball num_34">34</span>
                                                    <span class="sixlot_ball num_44">44</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>5尾</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_05">05</span>
                                                    <span class="sixlot_ball num_15">15</span>
                                                    <span class="sixlot_ball num_25">25</span>
                                                    <span class="sixlot_ball num_35">35</span>
                                                    <span class="sixlot_ball num_45">45</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>6尾</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_06">06</span>
                                                    <span class="sixlot_ball num_16">16</span>
                                                    <span class="sixlot_ball num_26">26</span>
                                                    <span class="sixlot_ball num_36">36</span>
                                                    <span class="sixlot_ball num_46">46</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>7尾</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_07">07</span>
                                                    <span class="sixlot_ball num_17">17</span>
                                                    <span class="sixlot_ball num_27">27</span>
                                                    <span class="sixlot_ball num_37">37</span>
                                                    <span class="sixlot_ball num_47">47</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>8尾</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_08">08</span>
                                                    <span class="sixlot_ball num_18">18</span>
                                                    <span class="sixlot_ball num_28">28</span>
                                                    <span class="sixlot_ball num_38">38</span>
                                                    <span class="sixlot_ball num_48">48</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>9尾</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_09">09</span>
                                                    <span class="sixlot_ball num_19">19</span>
                                                    <span class="sixlot_ball num_29">29</span>
                                                    <span class="sixlot_ball num_39">39</span>
                                                    <span class="sixlot_ball num_49">49</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- 总肖(index:8) -->
                        <div class="content-right item_one" style="display:none">
                            <ul>
                                <li class="select-li">
                                    <div class="bet_panel">
                                        <h2>
                                            总肖
                                        </h2>
                                        <div class="bet_box">
                                            <p>
                                                <span>2肖</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p class="active">
                                                <span>3肖</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>4肖</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>5肖</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>6肖</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>7肖</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>总肖单</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>总肖双</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- 平特肖尾(index:9) -->
                        <div class="content-right item_one" style="display:none">
                            <ul>
                                <li class="select-li item_full">
                                    <div class="bet_panel">
                                        <h2>
                                            一肖
                                        </h2>
                                        <div class="bet_box">
                                            <p>
                                                <span>鼠</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_11">11</span>
                                                    <span class="sixlot_ball num_23">23</span>
                                                    <span class="sixlot_ball num_35">35</span>
                                                    <span class="sixlot_ball num_47">47</span>
                                                </span>
                                            </p>
                                            <p class="active">
                                                <span>牛</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_10">10</span>
                                                    <span class="sixlot_ball num_22">22</span>
                                                    <span class="sixlot_ball num_34">34</span>
                                                    <span class="sixlot_ball num_46">46</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>虎</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_09">09</span>
                                                    <span class="sixlot_ball num_21">21</span>
                                                    <span class="sixlot_ball num_33">33</span>
                                                    <span class="sixlot_ball num_45">45</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>兔</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_08">08</span>
                                                    <span class="sixlot_ball num_20">20</span>
                                                    <span class="sixlot_ball num_32">32</span>
                                                    <span class="sixlot_ball num_44">44</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>龙</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_07">07</span>
                                                    <span class="sixlot_ball num_19">19</span>
                                                    <span class="sixlot_ball num_31">31</span>
                                                    <span class="sixlot_ball num_43">43</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>蛇</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_06">06</span>
                                                    <span class="sixlot_ball num_18">18</span>
                                                    <span class="sixlot_ball num_30">30</span>
                                                    <span class="sixlot_ball num_42">42</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>马</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_05">05</span>
                                                    <span class="sixlot_ball num_17">17</span>
                                                    <span class="sixlot_ball num_29">29</span>
                                                    <span class="sixlot_ball num_41">41</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>羊</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_04">04</span>
                                                    <span class="sixlot_ball num_16">16</span>
                                                    <span class="sixlot_ball num_28">28</span>
                                                    <span class="sixlot_ball num_40">40</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>猴</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_03">03</span>
                                                    <span class="sixlot_ball num_15">15</span>
                                                    <span class="sixlot_ball num_27">27</span>
                                                    <span class="sixlot_ball num_39">39</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>鸡</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_02">02</span>
                                                    <span class="sixlot_ball num_14">14</span>
                                                    <span class="sixlot_ball num_26">26</span>
                                                    <span class="sixlot_ball num_38">38</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>狗</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_01">01</span>
                                                    <span class="sixlot_ball num_13">13</span>
                                                    <span class="sixlot_ball num_25">25</span>
                                                    <span class="sixlot_ball num_37">37</span>
                                                    <span class="sixlot_ball num_49">49</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>猪</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_12">12</span>
                                                    <span class="sixlot_ball num_24">24</span>
                                                    <span class="sixlot_ball num_36">36</span>
                                                    <span class="sixlot_ball num_48">48</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="select-li item_full">
                                    <div class="bet_panel">
                                        <h2>
                                            尾数
                                        </h2>
                                        <div class="bet_box">
                                            <p>
                                                <span>0尾</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_10">10</span>
                                                    <span class="sixlot_ball num_20">20</span>
                                                    <span class="sixlot_ball num_30">30</span>
                                                    <span class="sixlot_ball num_40">40</span>
                                                </span>
                                            </p>
                                            <p class="active">
                                                <span>1尾</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_01">01</span>
                                                    <span class="sixlot_ball num_11">11</span>
                                                    <span class="sixlot_ball num_21">21</span>
                                                    <span class="sixlot_ball num_31">31</span>
                                                    <span class="sixlot_ball num_41">41</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>2尾</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_02">02</span>
                                                    <span class="sixlot_ball num_12">12</span>
                                                    <span class="sixlot_ball num_22">22</span>
                                                    <span class="sixlot_ball num_32">32</span>
                                                    <span class="sixlot_ball num_42">42</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>3尾</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_03">03</span>
                                                    <span class="sixlot_ball num_13">13</span>
                                                    <span class="sixlot_ball num_23">23</span>
                                                    <span class="sixlot_ball num_33">33</span>
                                                    <span class="sixlot_ball num_43">43</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>4尾</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_04">04</span>
                                                    <span class="sixlot_ball num_14">14</span>
                                                    <span class="sixlot_ball num_24">24</span>
                                                    <span class="sixlot_ball num_34">34</span>
                                                    <span class="sixlot_ball num_44">44</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>5尾</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_05">05</span>
                                                    <span class="sixlot_ball num_15">15</span>
                                                    <span class="sixlot_ball num_25">25</span>
                                                    <span class="sixlot_ball num_35">35</span>
                                                    <span class="sixlot_ball num_45">45</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>6尾</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_06">06</span>
                                                    <span class="sixlot_ball num_16">16</span>
                                                    <span class="sixlot_ball num_26">26</span>
                                                    <span class="sixlot_ball num_36">36</span>
                                                    <span class="sixlot_ball num_46">46</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>7尾</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_07">07</span>
                                                    <span class="sixlot_ball num_17">17</span>
                                                    <span class="sixlot_ball num_27">27</span>
                                                    <span class="sixlot_ball num_37">37</span>
                                                    <span class="sixlot_ball num_47">47</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>8尾</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_08">08</span>
                                                    <span class="sixlot_ball num_18">18</span>
                                                    <span class="sixlot_ball num_28">28</span>
                                                    <span class="sixlot_ball num_38">38</span>
                                                    <span class="sixlot_ball num_48">48</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>9尾</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_09">09</span>
                                                    <span class="sixlot_ball num_19">19</span>
                                                    <span class="sixlot_ball num_29">29</span>
                                                    <span class="sixlot_ball num_39">39</span>
                                                    <span class="sixlot_ball num_49">49</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- 特肖(index:10) -->
                        <div class="content-right item_one" style="display:none">
                            <ul>
                                <li class="select-li item_full">
                                    <div class="bet_panel">
                                        <h2>
                                            特肖
                                        </h2>
                                        <div class="bet_box">
                                            <p>
                                                <span>鼠</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_11">11</span>
                                                    <span class="sixlot_ball num_23">23</span>
                                                    <span class="sixlot_ball num_35">35</span>
                                                    <span class="sixlot_ball num_47">47</span>
                                                </span>
                                            </p>
                                            <p class="active">
                                                <span>牛</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_10">10</span>
                                                    <span class="sixlot_ball num_22">22</span>
                                                    <span class="sixlot_ball num_34">34</span>
                                                    <span class="sixlot_ball num_46">46</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>虎</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_09">09</span>
                                                    <span class="sixlot_ball num_21">21</span>
                                                    <span class="sixlot_ball num_33">33</span>
                                                    <span class="sixlot_ball num_45">45</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>兔</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_08">08</span>
                                                    <span class="sixlot_ball num_20">20</span>
                                                    <span class="sixlot_ball num_32">32</span>
                                                    <span class="sixlot_ball num_44">44</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>龙</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_07">07</span>
                                                    <span class="sixlot_ball num_19">19</span>
                                                    <span class="sixlot_ball num_31">31</span>
                                                    <span class="sixlot_ball num_43">43</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>蛇</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_06">06</span>
                                                    <span class="sixlot_ball num_18">18</span>
                                                    <span class="sixlot_ball num_30">30</span>
                                                    <span class="sixlot_ball num_42">42</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>马</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_05">05</span>
                                                    <span class="sixlot_ball num_17">17</span>
                                                    <span class="sixlot_ball num_29">29</span>
                                                    <span class="sixlot_ball num_41">41</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>羊</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_04">04</span>
                                                    <span class="sixlot_ball num_16">16</span>
                                                    <span class="sixlot_ball num_28">28</span>
                                                    <span class="sixlot_ball num_40">40</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>猴</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_03">03</span>
                                                    <span class="sixlot_ball num_15">15</span>
                                                    <span class="sixlot_ball num_27">27</span>
                                                    <span class="sixlot_ball num_39">39</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>鸡</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_02">02</span>
                                                    <span class="sixlot_ball num_14">14</span>
                                                    <span class="sixlot_ball num_26">26</span>
                                                    <span class="sixlot_ball num_38">38</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>狗</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_01">01</span>
                                                    <span class="sixlot_ball num_13">13</span>
                                                    <span class="sixlot_ball num_25">25</span>
                                                    <span class="sixlot_ball num_37">37</span>
                                                    <span class="sixlot_ball num_49">49</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>猪</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_12">12</span>
                                                    <span class="sixlot_ball num_24">24</span>
                                                    <span class="sixlot_ball num_36">36</span>
                                                    <span class="sixlot_ball num_48">48</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- 连肖(index:11) -->
                        <div class="content-right tab_container tabBox item_one" style="display:none">
                            <div class="bd">
                                <ul class="tab_content">
                                    <li class="select-li item_full">
                                        <div class="bet_panel">
                                            <h2>
                                                二连肖
                                            </h2>
                                            <div class="bet_box">
                                                <p>
                                                    <span>鼠</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_11">11</span>
                                                        <span class="sixlot_ball num_23">23</span>
                                                        <span class="sixlot_ball num_35">35</span>
                                                        <span class="sixlot_ball num_47">47</span>
                                                    </span>
                                                </p>
                                                <p class="active">
                                                    <span>牛</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_10">10</span>
                                                        <span class="sixlot_ball num_22">22</span>
                                                        <span class="sixlot_ball num_34">34</span>
                                                        <span class="sixlot_ball num_46">46</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>虎</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_09">09</span>
                                                        <span class="sixlot_ball num_21">21</span>
                                                        <span class="sixlot_ball num_33">33</span>
                                                        <span class="sixlot_ball num_45">45</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>兔</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_08">08</span>
                                                        <span class="sixlot_ball num_20">20</span>
                                                        <span class="sixlot_ball num_32">32</span>
                                                        <span class="sixlot_ball num_44">44</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>龙</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_07">07</span>
                                                        <span class="sixlot_ball num_19">19</span>
                                                        <span class="sixlot_ball num_31">31</span>
                                                        <span class="sixlot_ball num_43">43</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>蛇</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_06">06</span>
                                                        <span class="sixlot_ball num_18">18</span>
                                                        <span class="sixlot_ball num_30">30</span>
                                                        <span class="sixlot_ball num_42">42</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>马</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_05">05</span>
                                                        <span class="sixlot_ball num_17">17</span>
                                                        <span class="sixlot_ball num_29">29</span>
                                                        <span class="sixlot_ball num_41">41</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>羊</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_04">04</span>
                                                        <span class="sixlot_ball num_16">16</span>
                                                        <span class="sixlot_ball num_28">28</span>
                                                        <span class="sixlot_ball num_40">40</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>猴</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_03">03</span>
                                                        <span class="sixlot_ball num_15">15</span>
                                                        <span class="sixlot_ball num_27">27</span>
                                                        <span class="sixlot_ball num_39">39</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>鸡</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_02">02</span>
                                                        <span class="sixlot_ball num_14">14</span>
                                                        <span class="sixlot_ball num_26">26</span>
                                                        <span class="sixlot_ball num_38">38</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>狗</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_01">01</span>
                                                        <span class="sixlot_ball num_13">13</span>
                                                        <span class="sixlot_ball num_25">25</span>
                                                        <span class="sixlot_ball num_37">37</span>
                                                        <span class="sixlot_ball num_49">49</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>猪</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_12">12</span>
                                                        <span class="sixlot_ball num_24">24</span>
                                                        <span class="sixlot_ball num_36">36</span>
                                                        <span class="sixlot_ball num_48">48</span>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="tab_content" style="display:none;">
                                    <li class="select-li item_full">
                                        <div class="bet_panel">
                                            <h2>
                                                三连肖
                                            </h2>
                                            <div class="bet_box">
                                                <p>
                                                    <span>鼠</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_11">11</span>
                                                        <span class="sixlot_ball num_23">23</span>
                                                        <span class="sixlot_ball num_35">35</span>
                                                        <span class="sixlot_ball num_47">47</span>
                                                    </span>
                                                </p>
                                                <p class="active">
                                                    <span>牛</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_10">10</span>
                                                        <span class="sixlot_ball num_22">22</span>
                                                        <span class="sixlot_ball num_34">34</span>
                                                        <span class="sixlot_ball num_46">46</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>虎</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_09">09</span>
                                                        <span class="sixlot_ball num_21">21</span>
                                                        <span class="sixlot_ball num_33">33</span>
                                                        <span class="sixlot_ball num_45">45</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>兔</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_08">08</span>
                                                        <span class="sixlot_ball num_20">20</span>
                                                        <span class="sixlot_ball num_32">32</span>
                                                        <span class="sixlot_ball num_44">44</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>龙</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_07">07</span>
                                                        <span class="sixlot_ball num_19">19</span>
                                                        <span class="sixlot_ball num_31">31</span>
                                                        <span class="sixlot_ball num_43">43</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>蛇</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_06">06</span>
                                                        <span class="sixlot_ball num_18">18</span>
                                                        <span class="sixlot_ball num_30">30</span>
                                                        <span class="sixlot_ball num_42">42</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>马</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_05">05</span>
                                                        <span class="sixlot_ball num_17">17</span>
                                                        <span class="sixlot_ball num_29">29</span>
                                                        <span class="sixlot_ball num_41">41</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>羊</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_04">04</span>
                                                        <span class="sixlot_ball num_16">16</span>
                                                        <span class="sixlot_ball num_28">28</span>
                                                        <span class="sixlot_ball num_40">40</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>猴</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_03">03</span>
                                                        <span class="sixlot_ball num_15">15</span>
                                                        <span class="sixlot_ball num_27">27</span>
                                                        <span class="sixlot_ball num_39">39</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>鸡</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_02">02</span>
                                                        <span class="sixlot_ball num_14">14</span>
                                                        <span class="sixlot_ball num_26">26</span>
                                                        <span class="sixlot_ball num_38">38</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>狗</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_01">01</span>
                                                        <span class="sixlot_ball num_13">13</span>
                                                        <span class="sixlot_ball num_25">25</span>
                                                        <span class="sixlot_ball num_37">37</span>
                                                        <span class="sixlot_ball num_49">49</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>猪</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_12">12</span>
                                                        <span class="sixlot_ball num_24">24</span>
                                                        <span class="sixlot_ball num_36">36</span>
                                                        <span class="sixlot_ball num_48">48</span>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="tab_content" style="display:none;">
                                    <li class="select-li item_full">
                                        <div class="bet_panel">
                                            <h2>
                                                四连肖
                                            </h2>
                                            <div class="bet_box">
                                                <p>
                                                    <span>鼠</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_11">11</span>
                                                        <span class="sixlot_ball num_23">23</span>
                                                        <span class="sixlot_ball num_35">35</span>
                                                        <span class="sixlot_ball num_47">47</span>
                                                    </span>
                                                </p>
                                                <p class="active">
                                                    <span>牛</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_10">10</span>
                                                        <span class="sixlot_ball num_22">22</span>
                                                        <span class="sixlot_ball num_34">34</span>
                                                        <span class="sixlot_ball num_46">46</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>虎</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_09">09</span>
                                                        <span class="sixlot_ball num_21">21</span>
                                                        <span class="sixlot_ball num_33">33</span>
                                                        <span class="sixlot_ball num_45">45</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>兔</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_08">08</span>
                                                        <span class="sixlot_ball num_20">20</span>
                                                        <span class="sixlot_ball num_32">32</span>
                                                        <span class="sixlot_ball num_44">44</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>龙</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_07">07</span>
                                                        <span class="sixlot_ball num_19">19</span>
                                                        <span class="sixlot_ball num_31">31</span>
                                                        <span class="sixlot_ball num_43">43</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>蛇</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_06">06</span>
                                                        <span class="sixlot_ball num_18">18</span>
                                                        <span class="sixlot_ball num_30">30</span>
                                                        <span class="sixlot_ball num_42">42</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>马</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_05">05</span>
                                                        <span class="sixlot_ball num_17">17</span>
                                                        <span class="sixlot_ball num_29">29</span>
                                                        <span class="sixlot_ball num_41">41</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>羊</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_04">04</span>
                                                        <span class="sixlot_ball num_16">16</span>
                                                        <span class="sixlot_ball num_28">28</span>
                                                        <span class="sixlot_ball num_40">40</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>猴</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_03">03</span>
                                                        <span class="sixlot_ball num_15">15</span>
                                                        <span class="sixlot_ball num_27">27</span>
                                                        <span class="sixlot_ball num_39">39</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>鸡</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_02">02</span>
                                                        <span class="sixlot_ball num_14">14</span>
                                                        <span class="sixlot_ball num_26">26</span>
                                                        <span class="sixlot_ball num_38">38</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>狗</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_01">01</span>
                                                        <span class="sixlot_ball num_13">13</span>
                                                        <span class="sixlot_ball num_25">25</span>
                                                        <span class="sixlot_ball num_37">37</span>
                                                        <span class="sixlot_ball num_49">49</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>猪</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_12">12</span>
                                                        <span class="sixlot_ball num_24">24</span>
                                                        <span class="sixlot_ball num_36">36</span>
                                                        <span class="sixlot_ball num_48">48</span>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="tab_content" style="display:none;">
                                    <li class="select-li item_full">
                                        <div class="bet_panel">
                                            <h2>
                                                五连肖
                                            </h2>
                                            <div class="bet_box">
                                                <p>
                                                    <span>鼠</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_11">11</span>
                                                        <span class="sixlot_ball num_23">23</span>
                                                        <span class="sixlot_ball num_35">35</span>
                                                        <span class="sixlot_ball num_47">47</span>
                                                    </span>
                                                </p>
                                                <p class="active">
                                                    <span>牛</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_10">10</span>
                                                        <span class="sixlot_ball num_22">22</span>
                                                        <span class="sixlot_ball num_34">34</span>
                                                        <span class="sixlot_ball num_46">46</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>虎</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_09">09</span>
                                                        <span class="sixlot_ball num_21">21</span>
                                                        <span class="sixlot_ball num_33">33</span>
                                                        <span class="sixlot_ball num_45">45</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>兔</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_08">08</span>
                                                        <span class="sixlot_ball num_20">20</span>
                                                        <span class="sixlot_ball num_32">32</span>
                                                        <span class="sixlot_ball num_44">44</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>龙</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_07">07</span>
                                                        <span class="sixlot_ball num_19">19</span>
                                                        <span class="sixlot_ball num_31">31</span>
                                                        <span class="sixlot_ball num_43">43</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>蛇</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_06">06</span>
                                                        <span class="sixlot_ball num_18">18</span>
                                                        <span class="sixlot_ball num_30">30</span>
                                                        <span class="sixlot_ball num_42">42</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>马</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_05">05</span>
                                                        <span class="sixlot_ball num_17">17</span>
                                                        <span class="sixlot_ball num_29">29</span>
                                                        <span class="sixlot_ball num_41">41</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>羊</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_04">04</span>
                                                        <span class="sixlot_ball num_16">16</span>
                                                        <span class="sixlot_ball num_28">28</span>
                                                        <span class="sixlot_ball num_40">40</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>猴</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_03">03</span>
                                                        <span class="sixlot_ball num_15">15</span>
                                                        <span class="sixlot_ball num_27">27</span>
                                                        <span class="sixlot_ball num_39">39</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>鸡</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_02">02</span>
                                                        <span class="sixlot_ball num_14">14</span>
                                                        <span class="sixlot_ball num_26">26</span>
                                                        <span class="sixlot_ball num_38">38</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>狗</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_01">01</span>
                                                        <span class="sixlot_ball num_13">13</span>
                                                        <span class="sixlot_ball num_25">25</span>
                                                        <span class="sixlot_ball num_37">37</span>
                                                        <span class="sixlot_ball num_49">49</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>猪</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_12">12</span>
                                                        <span class="sixlot_ball num_24">24</span>
                                                        <span class="sixlot_ball num_36">36</span>
                                                        <span class="sixlot_ball num_48">48</span>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- 合肖(index:12) -->
                        <div class="content-right item_one" style="display:none">
                            <ul>
                                <li class="select-li item_full">
                                    <div class="bet_panel">
                                        <h2>
                                            合肖 <span class="text-red">赔率：12.33</span>
                                        </h2>
                                        <div class="bet_box">
                                            <p>
                                                <span>鼠</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_11">11</span>
                                                    <span class="sixlot_ball num_23">23</span>
                                                    <span class="sixlot_ball num_35">35</span>
                                                    <span class="sixlot_ball num_47">47</span>
                                                </span>
                                            </p>
                                            <p class="active">
                                                <span>牛</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_10">10</span>
                                                    <span class="sixlot_ball num_22">22</span>
                                                    <span class="sixlot_ball num_34">34</span>
                                                    <span class="sixlot_ball num_46">46</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>虎</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_09">09</span>
                                                    <span class="sixlot_ball num_21">21</span>
                                                    <span class="sixlot_ball num_33">33</span>
                                                    <span class="sixlot_ball num_45">45</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>兔</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_08">08</span>
                                                    <span class="sixlot_ball num_20">20</span>
                                                    <span class="sixlot_ball num_32">32</span>
                                                    <span class="sixlot_ball num_44">44</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>龙</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_07">07</span>
                                                    <span class="sixlot_ball num_19">19</span>
                                                    <span class="sixlot_ball num_31">31</span>
                                                    <span class="sixlot_ball num_43">43</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>蛇</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_06">06</span>
                                                    <span class="sixlot_ball num_18">18</span>
                                                    <span class="sixlot_ball num_30">30</span>
                                                    <span class="sixlot_ball num_42">42</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>马</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_05">05</span>
                                                    <span class="sixlot_ball num_17">17</span>
                                                    <span class="sixlot_ball num_29">29</span>
                                                    <span class="sixlot_ball num_41">41</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>羊</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_04">04</span>
                                                    <span class="sixlot_ball num_16">16</span>
                                                    <span class="sixlot_ball num_28">28</span>
                                                    <span class="sixlot_ball num_40">40</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>猴</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_03">03</span>
                                                    <span class="sixlot_ball num_15">15</span>
                                                    <span class="sixlot_ball num_27">27</span>
                                                    <span class="sixlot_ball num_39">39</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>鸡</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_02">02</span>
                                                    <span class="sixlot_ball num_14">14</span>
                                                    <span class="sixlot_ball num_26">26</span>
                                                    <span class="sixlot_ball num_38">38</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>狗</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_01">01</span>
                                                    <span class="sixlot_ball num_13">13</span>
                                                    <span class="sixlot_ball num_25">25</span>
                                                    <span class="sixlot_ball num_37">37</span>
                                                    <span class="sixlot_ball num_49">49</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>猪</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_12">12</span>
                                                    <span class="sixlot_ball num_24">24</span>
                                                    <span class="sixlot_ball num_36">36</span>
                                                    <span class="sixlot_ball num_48">48</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- 连尾(index:13) -->
                        <div class="content-right tab_container tabBox item_one" style="display:none">
                            <div class="bd">
                                <ul class="tab_content">
                                    <li class="select-li item_full">
                                        <div class="bet_panel">
                                            <h2>
                                                二连尾
                                            </h2>
                                            <div class="bet_box">
                                                <p>
                                                    <span>0尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_10">10</span>
                                                        <span class="sixlot_ball num_20">20</span>
                                                        <span class="sixlot_ball num_30">30</span>
                                                        <span class="sixlot_ball num_40">40</span>
                                                    </span>
                                                </p>
                                                <p class="active">
                                                    <span>1尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_01">01</span>
                                                        <span class="sixlot_ball num_11">11</span>
                                                        <span class="sixlot_ball num_21">21</span>
                                                        <span class="sixlot_ball num_31">31</span>
                                                        <span class="sixlot_ball num_41">41</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>2尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_02">02</span>
                                                        <span class="sixlot_ball num_12">12</span>
                                                        <span class="sixlot_ball num_22">22</span>
                                                        <span class="sixlot_ball num_32">32</span>
                                                        <span class="sixlot_ball num_42">42</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>3尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_03">03</span>
                                                        <span class="sixlot_ball num_13">13</span>
                                                        <span class="sixlot_ball num_23">23</span>
                                                        <span class="sixlot_ball num_33">33</span>
                                                        <span class="sixlot_ball num_43">43</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>4尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_04">04</span>
                                                        <span class="sixlot_ball num_14">14</span>
                                                        <span class="sixlot_ball num_24">24</span>
                                                        <span class="sixlot_ball num_34">34</span>
                                                        <span class="sixlot_ball num_44">44</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>5尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_05">05</span>
                                                        <span class="sixlot_ball num_15">15</span>
                                                        <span class="sixlot_ball num_25">25</span>
                                                        <span class="sixlot_ball num_35">35</span>
                                                        <span class="sixlot_ball num_45">45</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>6尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_06">06</span>
                                                        <span class="sixlot_ball num_16">16</span>
                                                        <span class="sixlot_ball num_26">26</span>
                                                        <span class="sixlot_ball num_36">36</span>
                                                        <span class="sixlot_ball num_46">46</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>7尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_07">07</span>
                                                        <span class="sixlot_ball num_17">17</span>
                                                        <span class="sixlot_ball num_27">27</span>
                                                        <span class="sixlot_ball num_37">37</span>
                                                        <span class="sixlot_ball num_47">47</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>8尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_08">08</span>
                                                        <span class="sixlot_ball num_18">18</span>
                                                        <span class="sixlot_ball num_28">28</span>
                                                        <span class="sixlot_ball num_38">38</span>
                                                        <span class="sixlot_ball num_48">48</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>9尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_09">09</span>
                                                        <span class="sixlot_ball num_19">19</span>
                                                        <span class="sixlot_ball num_29">29</span>
                                                        <span class="sixlot_ball num_39">39</span>
                                                        <span class="sixlot_ball num_49">49</span>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="tab_content" style="display:none;">
                                    <li class="select-li item_full">
                                        <div class="bet_panel">
                                            <h2>
                                                三连尾
                                            </h2>
                                            <div class="bet_box">
                                                <p>
                                                    <span>0尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_10">10</span>
                                                        <span class="sixlot_ball num_20">20</span>
                                                        <span class="sixlot_ball num_30">30</span>
                                                        <span class="sixlot_ball num_40">40</span>
                                                    </span>
                                                </p>
                                                <p class="active">
                                                    <span>1尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_01">01</span>
                                                        <span class="sixlot_ball num_11">11</span>
                                                        <span class="sixlot_ball num_21">21</span>
                                                        <span class="sixlot_ball num_31">31</span>
                                                        <span class="sixlot_ball num_41">41</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>2尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_02">02</span>
                                                        <span class="sixlot_ball num_12">12</span>
                                                        <span class="sixlot_ball num_22">22</span>
                                                        <span class="sixlot_ball num_32">32</span>
                                                        <span class="sixlot_ball num_42">42</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>3尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_03">03</span>
                                                        <span class="sixlot_ball num_13">13</span>
                                                        <span class="sixlot_ball num_23">23</span>
                                                        <span class="sixlot_ball num_33">33</span>
                                                        <span class="sixlot_ball num_43">43</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>4尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_04">04</span>
                                                        <span class="sixlot_ball num_14">14</span>
                                                        <span class="sixlot_ball num_24">24</span>
                                                        <span class="sixlot_ball num_34">34</span>
                                                        <span class="sixlot_ball num_44">44</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>5尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_05">05</span>
                                                        <span class="sixlot_ball num_15">15</span>
                                                        <span class="sixlot_ball num_25">25</span>
                                                        <span class="sixlot_ball num_35">35</span>
                                                        <span class="sixlot_ball num_45">45</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>6尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_06">06</span>
                                                        <span class="sixlot_ball num_16">16</span>
                                                        <span class="sixlot_ball num_26">26</span>
                                                        <span class="sixlot_ball num_36">36</span>
                                                        <span class="sixlot_ball num_46">46</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>7尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_07">07</span>
                                                        <span class="sixlot_ball num_17">17</span>
                                                        <span class="sixlot_ball num_27">27</span>
                                                        <span class="sixlot_ball num_37">37</span>
                                                        <span class="sixlot_ball num_47">47</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>8尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_08">08</span>
                                                        <span class="sixlot_ball num_18">18</span>
                                                        <span class="sixlot_ball num_28">28</span>
                                                        <span class="sixlot_ball num_38">38</span>
                                                        <span class="sixlot_ball num_48">48</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>9尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_09">09</span>
                                                        <span class="sixlot_ball num_19">19</span>
                                                        <span class="sixlot_ball num_29">29</span>
                                                        <span class="sixlot_ball num_39">39</span>
                                                        <span class="sixlot_ball num_49">49</span>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="tab_content" style="display:none;">
                                    <li class="select-li item_full">
                                        <div class="bet_panel">
                                            <h2>
                                                四连尾
                                            </h2>
                                            <div class="bet_box">
                                                <p>
                                                    <span>0尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_10">10</span>
                                                        <span class="sixlot_ball num_20">20</span>
                                                        <span class="sixlot_ball num_30">30</span>
                                                        <span class="sixlot_ball num_40">40</span>
                                                    </span>
                                                </p>
                                                <p class="active">
                                                    <span>1尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_01">01</span>
                                                        <span class="sixlot_ball num_11">11</span>
                                                        <span class="sixlot_ball num_21">21</span>
                                                        <span class="sixlot_ball num_31">31</span>
                                                        <span class="sixlot_ball num_41">41</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>2尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_02">02</span>
                                                        <span class="sixlot_ball num_12">12</span>
                                                        <span class="sixlot_ball num_22">22</span>
                                                        <span class="sixlot_ball num_32">32</span>
                                                        <span class="sixlot_ball num_42">42</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>3尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_03">03</span>
                                                        <span class="sixlot_ball num_13">13</span>
                                                        <span class="sixlot_ball num_23">23</span>
                                                        <span class="sixlot_ball num_33">33</span>
                                                        <span class="sixlot_ball num_43">43</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>4尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_04">04</span>
                                                        <span class="sixlot_ball num_14">14</span>
                                                        <span class="sixlot_ball num_24">24</span>
                                                        <span class="sixlot_ball num_34">34</span>
                                                        <span class="sixlot_ball num_44">44</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>5尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_05">05</span>
                                                        <span class="sixlot_ball num_15">15</span>
                                                        <span class="sixlot_ball num_25">25</span>
                                                        <span class="sixlot_ball num_35">35</span>
                                                        <span class="sixlot_ball num_45">45</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>6尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_06">06</span>
                                                        <span class="sixlot_ball num_16">16</span>
                                                        <span class="sixlot_ball num_26">26</span>
                                                        <span class="sixlot_ball num_36">36</span>
                                                        <span class="sixlot_ball num_46">46</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>7尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_07">07</span>
                                                        <span class="sixlot_ball num_17">17</span>
                                                        <span class="sixlot_ball num_27">27</span>
                                                        <span class="sixlot_ball num_37">37</span>
                                                        <span class="sixlot_ball num_47">47</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>8尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_08">08</span>
                                                        <span class="sixlot_ball num_18">18</span>
                                                        <span class="sixlot_ball num_28">28</span>
                                                        <span class="sixlot_ball num_38">38</span>
                                                        <span class="sixlot_ball num_48">48</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>9尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_09">09</span>
                                                        <span class="sixlot_ball num_19">19</span>
                                                        <span class="sixlot_ball num_29">29</span>
                                                        <span class="sixlot_ball num_39">39</span>
                                                        <span class="sixlot_ball num_49">49</span>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="tab_content" style="display:none;">
                                    <li class="select-li item_full">
                                        <div class="bet_panel">
                                            <h2>
                                                五连尾
                                            </h2>
                                            <div class="bet_box">
                                                <p>
                                                    <span>0尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_10">10</span>
                                                        <span class="sixlot_ball num_20">20</span>
                                                        <span class="sixlot_ball num_30">30</span>
                                                        <span class="sixlot_ball num_40">40</span>
                                                    </span>
                                                </p>
                                                <p class="active">
                                                    <span>1尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_01">01</span>
                                                        <span class="sixlot_ball num_11">11</span>
                                                        <span class="sixlot_ball num_21">21</span>
                                                        <span class="sixlot_ball num_31">31</span>
                                                        <span class="sixlot_ball num_41">41</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>2尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_02">02</span>
                                                        <span class="sixlot_ball num_12">12</span>
                                                        <span class="sixlot_ball num_22">22</span>
                                                        <span class="sixlot_ball num_32">32</span>
                                                        <span class="sixlot_ball num_42">42</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>3尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_03">03</span>
                                                        <span class="sixlot_ball num_13">13</span>
                                                        <span class="sixlot_ball num_23">23</span>
                                                        <span class="sixlot_ball num_33">33</span>
                                                        <span class="sixlot_ball num_43">43</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>4尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_04">04</span>
                                                        <span class="sixlot_ball num_14">14</span>
                                                        <span class="sixlot_ball num_24">24</span>
                                                        <span class="sixlot_ball num_34">34</span>
                                                        <span class="sixlot_ball num_44">44</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>5尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_05">05</span>
                                                        <span class="sixlot_ball num_15">15</span>
                                                        <span class="sixlot_ball num_25">25</span>
                                                        <span class="sixlot_ball num_35">35</span>
                                                        <span class="sixlot_ball num_45">45</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>6尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_06">06</span>
                                                        <span class="sixlot_ball num_16">16</span>
                                                        <span class="sixlot_ball num_26">26</span>
                                                        <span class="sixlot_ball num_36">36</span>
                                                        <span class="sixlot_ball num_46">46</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>7尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_07">07</span>
                                                        <span class="sixlot_ball num_17">17</span>
                                                        <span class="sixlot_ball num_27">27</span>
                                                        <span class="sixlot_ball num_37">37</span>
                                                        <span class="sixlot_ball num_47">47</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>8尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_08">08</span>
                                                        <span class="sixlot_ball num_18">18</span>
                                                        <span class="sixlot_ball num_28">28</span>
                                                        <span class="sixlot_ball num_38">38</span>
                                                        <span class="sixlot_ball num_48">48</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>9尾</span>
                                                    <span class="bet-times">1.935</span>
                                                    <span class="bet_right_ball">
                                                        <span class="sixlot_ball num_09">09</span>
                                                        <span class="sixlot_ball num_19">19</span>
                                                        <span class="sixlot_ball num_29">29</span>
                                                        <span class="sixlot_ball num_39">39</span>
                                                        <span class="sixlot_ball num_49">49</span>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- 正肖(index:14) -->
                        <div class="content-right item_one" style="display:none">
                            <ul>
                                <li class="select-li item_full">
                                    <div class="bet_panel">
                                        <h2>
                                            正肖
                                        </h2>
                                        <div class="bet_box">
                                            <p>
                                                <span>鼠</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_11">11</span>
                                                    <span class="sixlot_ball num_23">23</span>
                                                    <span class="sixlot_ball num_35">35</span>
                                                    <span class="sixlot_ball num_47">47</span>
                                                </span>
                                            </p>
                                            <p class="active">
                                                <span>牛</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_10">10</span>
                                                    <span class="sixlot_ball num_22">22</span>
                                                    <span class="sixlot_ball num_34">34</span>
                                                    <span class="sixlot_ball num_46">46</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>虎</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_09">09</span>
                                                    <span class="sixlot_ball num_21">21</span>
                                                    <span class="sixlot_ball num_33">33</span>
                                                    <span class="sixlot_ball num_45">45</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>兔</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_08">08</span>
                                                    <span class="sixlot_ball num_20">20</span>
                                                    <span class="sixlot_ball num_32">32</span>
                                                    <span class="sixlot_ball num_44">44</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>龙</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_07">07</span>
                                                    <span class="sixlot_ball num_19">19</span>
                                                    <span class="sixlot_ball num_31">31</span>
                                                    <span class="sixlot_ball num_43">43</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>蛇</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_06">06</span>
                                                    <span class="sixlot_ball num_18">18</span>
                                                    <span class="sixlot_ball num_30">30</span>
                                                    <span class="sixlot_ball num_42">42</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>马</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_05">05</span>
                                                    <span class="sixlot_ball num_17">17</span>
                                                    <span class="sixlot_ball num_29">29</span>
                                                    <span class="sixlot_ball num_41">41</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>羊</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_04">04</span>
                                                    <span class="sixlot_ball num_16">16</span>
                                                    <span class="sixlot_ball num_28">28</span>
                                                    <span class="sixlot_ball num_40">40</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>猴</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_03">03</span>
                                                    <span class="sixlot_ball num_15">15</span>
                                                    <span class="sixlot_ball num_27">27</span>
                                                    <span class="sixlot_ball num_39">39</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>鸡</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_02">02</span>
                                                    <span class="sixlot_ball num_14">14</span>
                                                    <span class="sixlot_ball num_26">26</span>
                                                    <span class="sixlot_ball num_38">38</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>狗</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_01">01</span>
                                                    <span class="sixlot_ball num_13">13</span>
                                                    <span class="sixlot_ball num_25">25</span>
                                                    <span class="sixlot_ball num_37">37</span>
                                                    <span class="sixlot_ball num_49">49</span>
                                                </span>
                                            </p>
                                            <p>
                                                <span>猪</span>
                                                <span class="bet-times">1.935</span>
                                                <span class="bet_right_ball">
                                                    <span class="sixlot_ball num_12">12</span>
                                                    <span class="sixlot_ball num_24">24</span>
                                                    <span class="sixlot_ball num_36">36</span>
                                                    <span class="sixlot_ball num_48">48</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- 特码五行(index:15) -->
                        <div class="content-right item_one" style="display:none">
                            <ul>
                                <li class="select-li">
                                    <div class="bet_panel">
                                        <h2>
                                            五行
                                        </h2>
                                        <div class="bet_box">
                                            <p>
                                                <span>金</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p class="active">
                                                <span>木</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>水</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>火</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                            <p>
                                                <span>土</span>
                                                <span class="bet-times">1.935</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- 自选不中(index:16) -->
                        <div class="content-right item_one" style="display:none">
                            <ul>
                                <li class="select-li">
                                    <div class="bet_panel">
                                        <h2>
                                            自选不中 <span class="text-red">赔率：12.33</span>
                                        </h2>
                                        <div class="bet_ball">
                                            <p class="active">
                                                <span class="sixlot_ball num_01">01</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_02">02</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p class="active">
                                                <span class="sixlot_ball num_03">03</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_04">04</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_05">05</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p class="active">
                                                <span class="sixlot_ball num_06">06</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_07">07</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_08">08</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_09">09</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_10">10</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_11">11</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_12">12</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_13">13</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_14">14</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_15">15</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_16">16</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_17">17</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_18">18</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_19">19</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_20">20</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_21">21</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_22">22</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_23">23</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_24">24</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_25">25</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_26">26</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_27">27</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_28">28</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_29">29</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_30">30</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_31">31</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_32">32</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_33">33</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_34">34</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_35">35</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_36">36</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_37">37</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_38">38</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_39">39</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_40">40</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_41">41</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_42">42</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_43">43</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_44">44</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_45">45</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_46">46</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_47">47</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_48">48</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                            <p>
                                                <span class="sixlot_ball num_49">49</span>
                                                <!--<span class="bet-times">1.935</span>-->
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="so-clear"></div>
        </div>
    </div>
    <!--封盘时给foot加上class:close-->
    <!--<div class="so-foot close">-->
    <div class="so-foot">
        <div class="bet_selected">
            <p>已选中<span class="bet-select-num">0</span>注</p>
        </div>
        <div class="bet_count">
            <form>
                <input placeholder="输入金额" type="tel" class="bet-amount">
                <a href="javascript:;" class="submit">重置</a>
            </form>
        </div>
        <div class="bet_btn">
            <div class="so-add">

                <p>下注</p>
            </div>
        </div>
    </div>
    <div class="so-shade"></div>
    <!--<div class="so-pop">
        <h2>下注清单<a></a></h2>
        <p class="grey_text">请核对您的下注信息</p>
        <div>
            <div>
                <p>【第一球-单】 @ 1.995 x 10</p>
                <p>【第一球-单】 @ 1.995 x 10</p>
                <p>【第一球-单】 @ 1.995 x 10</p>
            </div>
        </div>
        <p class="so-pop-sum">【总计】总注数：<span>3</span> 总金额：<span>30</span></p>
        <a class="cancle">取消</a>
        <a class="btn-submit ok">确定</a>
    </div>-->
    <!--封盘底部遮挡-->
    <!--玩法说明-->
    <!--<div class="so-pop-wanfa">
        <div>
            <h2>江西11选5游戏玩法<a></a></h2>
            <div>
                <div>
                    <h3>一、两面玩法</h3>
                    <p>总和大小: 所有开奖号码数字加总值大于等于31为和大；总和值小于等于29为和小；若总和值等于30为和 (不计算输赢)。</p>
                    <p>总和单双: 所有开奖号码数字加总值为单数叫和单，如11、31；加总值为双数叫和双，如42、30。</p>
                    <p>总和尾数大小: 所有开奖号码数字加总值的尾数，大于或等于5为尾大，小于或等于4为尾小。</p>
                    <p>龙：第一球开奖号码大于第五球开奖号码，如第一球开出10，第五球开出07。</p>
                    <p>虎：第一球开奖号码小于第五球开奖号码，如第一球开出03，第五球开出07。</p>
                    <p></p>
                    <h3>二、第一球～第五球玩法</h3>
                    <p>第一球～第五球：如现场滚球第一个开奖号码为10号，投注第一球为10号则视为中奖，其它号码视为不中奖</p>
                    <h3>三、连码玩法</h3>
                    <p>一中一: 投注1个号码与当期开奖的5个号码中任1个号码相同，视为中奖。</p>
                    <p>二中二: 投注2个号码与当期开奖的5个号码中任2个号码相同(顺序不限)，视为中奖。</p>
                    <p>三中三: 投注3个号码与当期开奖的5个号码中任3个号码相同(顺序不限)，视为中奖。</p>
                    <p>四中四: 投注4个号码与当期开奖的5个号码中任4个号码相同(顺序不限)，视为中奖。</p>
                    <p>五中五: 投注5个号码与当期开奖的5个号码中5个号码相同(顺序不限)，视为中奖。</p>
                    <p>六中五: 投注6个号码中任5个号码与当期开奖的5个号码相同(顺序不限)，视为中奖。</p>
                    <p>七中五: 投注7个号码中任5个号码与当期开奖的5个号码相同(顺序不限)，视为中奖。</p>
                    <p>八中五: 投注8个号码中任5个号码与当期开奖的5个号码相同(顺序不限)，视为中奖。</p>
                    <p>前二组选: 投注的2个号码与当期开出的5个号码中的前2个号码相同(顺序不限)，视为中奖。</p>
                    <p>前三组选: 投注的3个号码与当期开出的5个号码中的前3个号码相同(顺序不限)，视为中奖。</p>
                </div>
            </div>
            <a>确定</a>
        </div>
    </div>-->
</div>

  
</template>



<script>
import UserNavigation from '@/components/publicTemplate/UserNavigation'
import UserMenu from '@/components/publicTemplate/UserMenu'
import InfoDialog from '@/components/publicTemplate/InfoDialog'
import AutoCloseDialog from '@/components/publicTemplate/AutoCloseDialog'
import BetSuccessfulDialog from '@/components/publicTemplate/BetSuccessfulDialog'
import CountdownTimer from '@/components/publicTemplate/CountdownTimer'
import HistoryTerm from '@/components/publicTemplate/HistoryTerm'
import MenuBar from '@/components/publicTemplate/MenuBar'
import Bet from '@/components/publicTemplate/Bet'
import PlayDialog from '@/components/cqssc/PlayDialog'
import Mixin from '@/Mixin'

export default {
  name: 'Index',
  mixins:[Mixin],
  components: {
    HistoryTerm,
    MenuBar, 
    CountdownTimer,
    BetSuccessfulDialog,
    Bet,
    UserNavigation,
    UserMenu,
    InfoDialog, 
    AutoCloseDialog,
    PlayDialog
  }, 
  props:['moduleName', 'moduleLotteryID','moduleplay'],
  data:function () {
    return {
        now_time:'',  // 当前期数销售截止时间
        nowover_time:'',  // 当前期数封盘时间
        next_pcode:'',  // 下一期数
        now_pcode:'',  // 当前期数
        previous_pcode:'',//上一期期数
        winNumber:'',    //上期开奖号
        lastTermStatic:'',  //上期开奖数据统计
        sys_time :'',  // 当前系统时间
        now_day:'',  // 当前日期
        balanceData:{},
        entertainStatus:false,
        notopen:false,
        ishwowpriod:false,
        betSelectedList:[],   //用户选中的注数
        // playTreeList:[], //玩法树
        lotteryID: 2 ,
        allLottery:{} ,
        gameHref:{} ,
        kinds:['特码', '两面', '正码', '正码1-6', '正特', '连码', '色波', '特码头尾', '总肖', '平特肖尾', '特肖', '连肖', '合肖', '连尾', '正肖', '特码五行', '自选不中'],
        balancePublic:'',
    }
  },
  created:function(){

      if (this.moduleLotteryID) {
          this.lotteryID = this.moduleLotteryID;
      }
      this.getMemberBalance(this.lotteryID).then(()=>{
        this.loadPlayTree(this.lotteryID).catch(function () {
             console.log("Promise Rejected in method of create 2");
        });  // 玩法树，彩种id 为2

    }).catch(function () {
        console.log("Promise Rejected in method of create 1");
    });

  },
  mounted:function() {
      var _self = this ;
    var lotteryid = this.lotteryID ; // 彩种id
    var lotteryname = this.moduleName || '重庆时时彩' ; // 彩种名称
    this.setCookie('lt_lotteryid',lotteryid) ; // 彩种id
    this.setCookie('lottery_name',lotteryname) ; // 彩种名称
    this.allLottery = this.$refs.navone.getLotterys() ;
    this.gameHref = this.$refs.navone.gameHref ; // 拿子组件的值
    this.initViewHeight() ;
    setTimeout(() => {
        this.timerBegin();

    }, 500) ;
      _self.setScroll() ; // 下拉回弹
  },
  computed:{
    doubleSideList:function(){
        return this.getListByParentID(21000); 
    },
    oneToFiveList:function(){
        return this.getListByParentID(22000); 
    },
    frontCenterBackList:function(){
        return this.getListByParentID(23000);
    },
    // balancePublic:function(){
    //     alert()
    //     this.refreshBalance()
    // },
  },
  watch:{
    /* balancePublic:function(){
        // alert()
        // this.refreshBalance()
    },*/
  },

  methods:{
    refreshBalance:function(){
        var afterBetCookie = this.getCookie( 'balancePublic' )
        this.balancePublic = afterBetCookie
        // console.log(afterBetCookie)      
    },
    switchTab:function(e){
        var _self = this ;
        const $src = $(e.currentTarget);
        const index = $src.index();
        const $tabs = $('.so-con-right .content-right');
        $tabs.hide();
        $tabs.eq(index).show();
        if(index=='0' || index=='4' || index=='5' || index=='11' || index=='13'){
            $('.bet_tab').hide();
            $('#bet_tab_'+index).show() ;
            $('.bet_tab').find('li:first-child').click() ; // 切换时初始化为第一个
        }else {
            $('.bet_tab').hide();
        }
        $src.addClass('active').siblings().removeClass('active') ;

        var conth = $tabs.eq(index).height();
        _self.setClickHeight(conth) ;
        _self.conScroll.refresh() ; _self.conScroll.scrollTo(0, 300) ;
    },
    getListByParentID:function(parentID){
        return this.playTreeList.filter((item,i)=>{
            return item.parentId == parentID;
        });
    },
    //开奖倒计时结束后处理
    playLottery:function(){
      //  this.$refs.infoDialog.open('请至下期继续投注', 'title_end')
        this.timerBegin();
    },
    //封盘倒计时结束后处理
    entertain:function(){
        // this.$refs.infoDialog.open('请至下期继续投注', 'title_end')
        this.$refs.infoDialog.open('请至下期继续投注', '本期投注已结束')
        this.entertainStatus = true;
        this.resetAction();
    },
    //获取开奖更据 needIn 是否需要再次调用倒计时定时器
    lotteryDataFetch:function(needIn){
        const that = this;
        return new Promise((resolve)=>{
            
            that.getSystemTime().then(sys_time=>{
                that.sys_time = that.formatTimeUnlix(sys_time) ;
                that.priodDataNewly(that.lotteryID, sys_time).then(res=>{
                        // console.log(res)
                        // console.log(res.msg)
                        that.balancePublic = res.msg;
                        // console.log( that.rootBalance )
                        // console.log( res.msg )
                        that.setCookie("balancePublic",that.balancePublic)

                    that.ishwowpriod = true ;
                    that.next_pcode = res.data[0].pcode;  // 下期期数

                    var firstpcode = res.data[0].pcode.toString().substr(8, 11) ;
                    let code = res.data[2].winNumber;
                    if(firstpcode =='024' && that.lotteryID == '2'){  // 重庆时时彩 白天第一期
                        if(res.data[1].endTime - sys_time >0){ // 凌晨最后一期未结束
                            if(res.data[1].endTime < sys_time ) { // 如果当期结束时间小于系统时间
                                that.now_time = that.formatTimeUnlix(res.data[0].endTime);  // 当前期数时间
                                that.nowover_time = that.formatTimeUnlix(res.data[0].prizeCloseTime);  // 当前期封盘时间
                                that.now_pcode = res.data[0].pcode;  // 当前期数
                            }else{
                                that.now_time = that.formatTimeUnlix(res.data[1].endTime);  // 当前期数时间
                                that.nowover_time = that.formatTimeUnlix(res.data[1].prizeCloseTime);  // 当前期封盘时间
                                that.now_pcode = res.data[1].pcode;  // 当前期数
                            }
                            that.winNumber = res.data[2].winNumber;
                            that.lastTermStatic = res.data[2].doubleData;    //上期开奖统计
                            that.previous_pcode = res.data[2].pcode;  // 上期期数
                        }else{
                            if( res.data[0].startTime - sys_time >0){  // 未开盘状态
                                that.notopen = true ;
                            }else{
                                that.notopen = false ;
                            }
                            that.now_pcode = res.data[0].pcode;  // 当前期数
                            that.now_time = that.formatTimeUnlix(res.data[0].endTime);   // 当前期数时间
                            that.nowover_time = that.formatTimeUnlix(res.data[0].prizeCloseTime);   // 当前期封盘时间
                            that.winNumber = res.data[1].winNumber;
                            that.lastTermStatic = res.data[1].doubleData;    //上期开奖统计
                            that.previous_pcode = res.data[1].pcode;  // 上期期数
                        }

                    }else if(firstpcode =='001' && that.lotteryID != '2'){ // 天津，新疆 时时彩 白天第一期
                        if(res.data[1].endTime - sys_time >0) { // 凌晨最后一期未结束
                            if(res.data[1].endTime < sys_time ) { // 如果当期结束时间小于系统时间
                                that.now_time = that.formatTimeUnlix(res.data[0].endTime);  // 当前期数时间
                                that.nowover_time = that.formatTimeUnlix(res.data[0].prizeCloseTime);   // 当前期封盘时间
                                that.now_pcode = res.data[0].pcode;  // 当前期数
                            }else{
                                that.now_time = that.formatTimeUnlix(res.data[1].endTime);  // 当前期数时间
                                that.nowover_time = that.formatTimeUnlix(res.data[1].prizeCloseTime);   // 当前期封盘时间
                                that.now_pcode = res.data[1].pcode;  // 当前期数
                            }

                            that.winNumber = res.data[2].winNumber;
                            that.lastTermStatic = res.data[2].doubleData;    //上期开奖统计
                            that.previous_pcode = res.data[2].pcode;  // 上期期数
                        }else{
                            if( res.data[0].startTime - sys_time >0){  // 未开盘状态
                                that.notopen = true ;
                            }else{
                                that.notopen = false ;
                            }
                            that.now_pcode = res.data[0].pcode;  // 当前期数
                            that.now_time = that.formatTimeUnlix(res.data[0].endTime);   // 当前期数时间
                            that.nowover_time = that.formatTimeUnlix(res.data[0].prizeCloseTime);   // 当前期封盘时间
                            that.winNumber = res.data[1].winNumber;
                            that.lastTermStatic = res.data[1].doubleData;    //上期开奖统计
                            that.previous_pcode = res.data[1].pcode;  // 上期期数
                        }

                    }else{
                        if(res.data[1].endTime < sys_time ) { // 如果当期结束时间小于系统时间
                            that.now_time = that.formatTimeUnlix(res.data[0].endTime); // 当前期数时间
                            that.nowover_time = that.formatTimeUnlix(res.data[0].prizeCloseTime);  // 当前期封盘时间
                            that.now_pcode = res.data[0].pcode;  // 当前期数
                        }else{
                            that.now_time = that.formatTimeUnlix(res.data[1].endTime); // 当前期数时间
                            that.nowover_time = that.formatTimeUnlix(res.data[1].prizeCloseTime);  // 当前期封盘时间
                            that.now_pcode = res.data[1].pcode;  // 当前期数
                        }

                        //code 上期开奖号码
                        if (!code) {
                            // code = '-,-,-,-,-';
                            that.winNumber = res.data[3].winNumber;
                            that.lastTermStatic = res.data[3].doubleData;    //上期开奖统计
                            that.previous_pcode = res.data[3].pcode;  // 上期期数
                        }else{
                            that.winNumber = res.data[2].winNumber;
                            that.lastTermStatic = res.data[2].doubleData;    //上期开奖统计
                            that.previous_pcode = res.data[2].pcode;  // 上期期数
                        }
                    }

                    if(res.data[1].status >1){ // 异常情况，如提前开盘 2
                        that.entertainStatus = true;
                    }

                    // 当天日期
                    that.now_day = ( res.data[1].pcode).toString().substr(0, 8);

                    if(needIn =='1'){ // 倒计时结束后
                        that.$refs.countdownTimer && that.$refs.countdownTimer.timerInit(that.sys_time, that.now_time, that.nowover_time);  // 重新倒计时
                    }


                    resolve();
                }).catch(function () {
                     console.log("Promise Rejected in method of timeBegin");
                });
            }); 

        })
        
    },

    timerBegin:function(){
        var that = this;
        that.lotteryDataFetch('1') ;
    /*    this.lotteryDataFetch().then(()=>{
                that.$refs.countdownTimer && that.$refs.countdownTimer.timerInit(that.sys_time, that.now_time, that.nowover_time);  // 重新倒计时
        })*/
        that.entertainStatus = false;
        that.notopen = false;
    },
    resetAction:function(success){
        this.betSelectedList = [];
        $(".so-con-right p").removeClass('active');
        if(success != '1'){
            this.$refs.bet.betAmount = '' ;
        }
        this.getMemberBalance(this.lotteryID) ; // 更新余额
        this.$refs.bet.showList = false ; // 关闭下注弹窗
    },
    //当用户选择球时，保存相应数据
    betSelect:function(e, item, parentItem){
          if (this.entertainStatus || this.notopen){
              return false;
          }
          var $src = $(e.currentTarget);
          if ($src.prop('class').indexOf('active') < 0){
              $src.addClass('active');
              item.parentItem = parentItem;
              this.betSelectedList.push(item);
          }else{
              $src.removeClass('active');
              this.betSelectedList = this.betSelectedList.filter((selected)=>{ return selected.cid != item.cid; });
          }
      },
    //用户选择1-5球时，保存相应数据
    OFSelect:function(e, item, parentItem){
          if (this.entertainStatus || this.notopen){
              return false;
          }
          var $src = $(e.currentTarget);
          if ($src.parent('p').prop('class').indexOf('active') < 0){
              $src.parent('p').addClass('active');
              item.parentItem = parentItem;
              this.betSelectedList.push(item);
          }else{
              $src.parent('p').removeClass('active');
              this.betSelectedList = this.betSelectedList.filter((selected)=>{ return selected.cid != item.cid; });
          }
      },
      // 快选展开收合
      betFilter:function(e){
        var _self = this ;
        const $src = $(e.currentTarget);
        $src.toggleClass('active')
      }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
-->
