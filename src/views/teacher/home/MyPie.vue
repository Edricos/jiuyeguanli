<template>
        <div id="pie_example">
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
                        let myChart = echarts.init(document.getElementById('pie_example'));
                        let option  = {
                                title: {
                                        text: '访问分布',
                                        //标题位置
                                        // left: 'center',
                                        // top: 'center'
                                },
                                legend: {
                                        top: '0%',
                                        left: '20%'
                                },
                                tooltip : {
                                        trigger: 'item'
                                },
                                series: [
                                        {
                                                name: '访问分布',
                                                //饼状图
                                                type: 'pie',
                                                label: {
                                                        //是否展示标签
                                                        show: false,
                                                },

                                                data: [
                                                        {
                                                                value: 60,
                                                                name: '单位'
                                                        },
                                                        {
                                                                value: 336,
                                                                name: '学生'
                                                        },
                                                        {
                                                                value: 16,
                                                                name: '教师'
                                                        },

                                                ],
                                                // 设置大小
                                                // radius:'70%',
                                                // 环状扇形图：内圆直径、外圆直径
                                                radius:['38%','70%']
                                        }
                                ]
                        };
                        myChart.setOption(option);

                        // //当我们浏览器缩放的时候，图表也等比例缩放
                        window.addEventListener('resize',function() {myChart.resize()});
                },
                methods: {},
                watch: {},
                created() {

                }
        }
</script>

<style scoped>
        #pie_example{
                width: 100%;
                height: 250px;
                /*border: 1px solid red;*/
                margin: 0 auto;
                padding: 0;
        }
</style>
