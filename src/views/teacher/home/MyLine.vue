<style scoped>
    #line_example{
        width: 100%;
        height: 250px;
        /*border: 1px solid red;*/
        margin: 0 auto;
    }
</style>
<template>
        <div id="line_example">


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
            let myChart = echarts.init(document.getElementById('line_example'));
            let option = {
                    title: {
                            text: '博客周增长'
                    },
                    tooltip: {
                            trigger: 'axis'
                    },
                    legend: {
                            // data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
                    },
                    grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                    },
                    //保存图片
                    toolbox: {
                            feature: {
                                    saveAsImage: {}
                            }
                    },
                    xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                            type: 'value'
                    },
                    series: [
                            {
                                    name: 'Java',
                                    type: 'line',
                                    stack: 'Total',
                                    data: [45,59,79,99,110,130,150]
                            },
                            {
                                    name: '数据结构与算法',
                                    type: 'line',
                                    stack: 'Total',
                                    data: [220, 182, 191, 234, 290, 330, 310]
                            },
                            {
                                    name: '数据库',
                                    type: 'line',
                                    stack: 'Total',
                                    data: [150, 232, 201, 154, 190, 330, 410]
                            },
                            {
                                    name: '计算机网络',
                                    type: 'line',
                                    stack: 'Total',
                                    data: [320, 332, 301, 334, 390, 330, 320]
                            },
                            {
                                    name: '操作系统',
                                    type: 'line',
                                    stack: 'Total',
                                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                            }
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
