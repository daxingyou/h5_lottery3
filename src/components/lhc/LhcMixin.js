let LhcMixin = {
    data() {
        return {

        }
    },
    created() {

    },
    methods:{
        payoffFormat(val) {
            return (Number(val)/10000).toFixed(3);
        },
        isBtnActived(item) {
            if(!this) return ''
            return _.find(this.betSelectedList, {cid: item.cid}) ? 'active' : '';
        },
        betSelect(item) {
            this.$emit('lhcselectbet', item);
        },
        computeShengXiaoNum(baseIndex, maxBallNum = 50) {
            let res = [[], [], [], [], [], [], [], [], [], [], [], []]
            let baseIndexList = [];

            if (baseIndex == 12) {
                baseIndexList[0] = 0;
                for (let i = 11; i >= 1; i--) {
                    baseIndexList[12 - i] = i
                }
            }
            else if (baseIndex == 1) {
                baseIndexList[0] = 1;
                baseIndexList[1] = 0;

                j = 11
                for (let i = 2; i < 12; i++) {
                    baseIndexList[i] = j
                    j--
                }
            }
            else {
                if (baseIndex + 1 <= 12) {
                    let j = 1
                    for (let i = baseIndex - 1; i >= 0; i--) {
                        baseIndexList[i] = j
                        j++
                    }
                    baseIndexList[baseIndex] = 0

                    j = 11
                    for (let i = baseIndex + 1; i < 12; i++) {
                        baseIndexList[i] = j
                        j--
                    }
                }
            }

            for (let i = 1; i < maxBallNum; i++) {
                for (let j = 0; j < baseIndexList.length; j++) {
                    if (i % 12 == baseIndexList[j]) {
                        if (i < 10) {
                            let item = "0" + i
                            res[j].push(item)
                        }
                        else {
                            res[j].push("" + i)
                        }
                    }
                }
            }
            return res;
        },

        getCookie :function(name) {
            var re = '(?:; )?' + encodeURIComponent(name) + '=([^;]*);?';
            re = new RegExp(re);
            if (re.test(document.cookie)) {
                return decodeURIComponent(RegExp.$1);
            }
            return '';
        },

        setScrollHeight(hasTabPanel, currentBarIndex) {

            // console.log(this.getCookie('scrollF'),'inheight'  )
            // var winH = window.innerHeight
            var winH = this.getCookie('scrollF')?this.getCookie('scrollF'):window.innerHeight

            let scrolling_height = winH  - ($('.so-in-top').height() + $('.so-in-main').height() + $('.so-foot').height())
            // let scrolling_height =  763 - ($('.so-in-top').height() + $('.so-in-main').height() + $('.so-foot').height())

            if (hasTabPanel) {
                scrolling_height -= $('.tab_panel').height()
            }

            this.setClickHeight($('#scroller'), scrolling_height)
            this.setClickHeight($('.tab_container'), $('#so-item' + currentBarIndex).height() + 40)

        },
        setClickHeight(elem, height) {
            elem.height(height)
        }
    }
};
export default LhcMixin;
