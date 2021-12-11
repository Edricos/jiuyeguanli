<style scoped>
    #bar_example{
        width: 100%;
        height: 250px;
        /*border: 1px solid red;*/
        margin: 0 auto;
    }
</style>
<template>
        <div id="bar_example">

        </div>
</template>

<script>
    // 按需引入
    import * as echarts from 'echarts';
    export default {
        data() {
            return {}
        },
        mounted() {
            // let this_ = this;
            let myChart = echarts.init(document.getElementById('bar_example'));
            let option = {
                //    标题
                title:{
                        text:'用户月增长'
                },
                color: ['red','blue'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {
                        type : 'shadow'
                    }
                },
                //
                // legend: {
                //     data:['月增长']
                // },
                // toolbox: {
                //         feature: {
                //                 //下载为图片
                //                 saveAsImage: {}
                //         }
                // },
                xAxis : [
                    {
                        type : 'category',
                        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'月增长',
                        type:'bar',
                        barWidth: '60%',
                        data:[995,666,444,858,654,236,645,546,846,225,547,356]
                    },

                ]
            };
            myChart.setOption(option);

            //当我们浏览器缩放的时候，图表也等比例缩放
            window.addEventListener('resize',function() {myChart.resize()});
        },
        methods: {},
        watch: {},
        created() {

        }
    }
</script>
