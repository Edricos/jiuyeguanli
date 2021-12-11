<template>
	<div class="category">
		<h3 class="title">
			{{title}}
			<a :href=link>more</a>
		</h3>

		<slot :games="games" msg="hello">我是默认的一些内容</slot>
	</div>
</template>

<script>
	export default {
		name:'Category',
		props:['title','link'],
		data() {
			return {
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
			}
		},
	}
</script>

<style scoped>
	a{
		color: #abb3bb;
	}
	.category{
		background-color: rgba(238, 238, 238, 0.99);
		width: 300px;
		height: 300px;
	}
	.title{
		color:white;
	}
	h3{
		text-align: center;
		background-color: #425a75;
	}
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>