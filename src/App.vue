<template>
    <div id="warp">
        <!-- header -->
		<div id="header">
			<div class="headerLogo fl">
				<div class="name">采销</div>
				<div class="msg">
					<div class="title">管理系统</div>
					<div class="titleEnglish">OFFICE SYSTEM</div>
				</div>
			</div>
			<div class="headerOptionBox fl">
				<div class="headerMsg">
					<span>产品部设计部</span>
					<span>></span>
					<span>产品经理</span>
					<span>胡庭</span>
				</div>
				<ul class="headerOption">
					<li><i class="icon-pencil"></i><span>代办</span><small>12</small></li>
					<li> <i class="icon-bell-alt"></i><span>提醒</span><small>11</small></li>
					<li> <i class="icon-share-alt"></i><span>邮件</span><small>13</small></li>
					<li> <i class="icon-signout"></i><span>退出</span></li>
				</ul>
			</div>
			<div class="headerMenuBox fr">
				<div class="headerMenu fl " @click="control">
					<i class="icon-align-justify backgroundStyle color_072C4D"></i>
				</div>
			</div>
		</div>
		<div id="center">
			<!-- 左侧导航 -->
			<menu-component :menuData="menuSecondLevel" class="menuStyle" v-show="show==true" v-on:closeMenu="closeShow" id="leftMenu" ref="menuObj"></menu-component>
			<div class="view" ref="view">
				<div class="viewTop"></div>
				<!-- router-view -->
				<transition name="fade"
		            mode="out-in">
					<router-view class="routerViewStyle"></router-view>
				</transition>
				<div class="viewBottom">Copyright&copy;快抢车</div>
			</div>
		</div>
    </div>
</template>
<script>
"use strict";
import menuComponent from './component/menuSecondLevel.vue';//支持两级导航的menu组件 如果需要三级使用
export default{
    components: {
        "menu-component": menuComponent,
    },
    data(){
        return{
			//三级导航模拟数据
            menuData:[
				{
					"id":"0",
					"name":"个人中心",
					"icon":"fa-user",
					"children":""
				},
				{
					"id":"1",
					"name":"档案中心",
					"icon":"fa-file-text",
					"children":[
						{
							"id":"3",
							"name":"单位客户档案管理",
							"children":[
								{
									"id":"4",
									"name":"Form",
									"path":"/"
								}
							]
						},
					]
				}
			],
			//二级导航模拟数据
			menuSecondLevel:[
				// {
				// 	"id":"0",
				// 	"name":"个人中心",
				// 	"icon":"icon-user",
				// 	"children":""
				// },
				{
					"id":"1",
					"name":"个人中心",
					"icon":"icon-user",
					"children":[
						{
							"id":"1-1",
							"name":"站内提醒",
							"path":"/stationReminder"
						},
					]
				},
				{
					"id":"3",
					"name":"销售管理",
					"icon":"icon-sitemap",
					"children":[
						
					]
				},
				{
					"id":"4",
					"name":"财务管理",
					"icon":"icon-money",
					"children":[
						
					]
				},
				{
					"id":"5",
					"name":"物流管理",
					"icon":"icon-truck",
					"children":[
						
					]
				},
				{
					"id":"7",
					"name":"库容管理",
					"icon":"icon-table",
					"children":[
						
					]
				},
				{
					"id":"8",
					"name":"统计中心",
					"icon":"icon-cloud",
					"children":[
						
					]
				},
				{
					"id":"2",
					"name":"档案中心",
					"icon":"icon-folder-open-alt",
					"children":[
						{
							"id":"2-1",
							"name":"单位客户档案管理",
							"path":"/customerFileManage"
						},
						{
							"id":"2-2",
							"name":"基础数据管理",
							"path":"/dataManage"
						},
					]
				},
				{
					"id":"9",
					"name":"系统管理",
					"icon":"icon-cog",
					"children":[
						
					]
				},
			],
			show:true,//控制导航的显示和隐藏
        }
    },
	mounted(){
		 //根据当前窗口设置导航的显示和隐藏
		 let deviceWidth = document.documentElement.clientWidth;
		 if(Number(deviceWidth)<768){
			this.show=false;
		 }
		 //窗口 resize 事件
		 window.onresize = ()=> {
             let deviceWidth = document.documentElement.clientWidth;
			 this.setHeight();
             if(Number(deviceWidth)<768){
				this.show=false;
			 }else{
				this.show=true;
			 }
        };
		this.setHeight()
	},
    methods:{
		control(){
			if(this.show==true){
				this.show=false;
			}else{
				this.show=true;
			}
		},
		closeShow(){
			let deviceWidth = document.documentElement.clientWidth;
			if(deviceWidth<768){
				this.show=false;
			}
		},
		setHeight(){
			let deviceHeight = parseInt(document.documentElement.clientHeight)-parseInt(60);;
			var obj=this.$refs.view;
			obj.setAttribute("style","min-height:"+deviceHeight+"px");
		}
    }
}
</script>
<style lang='sass'>
    @import './styles/index.scss';
    @media screen and (max-width: 768px){
        #header{
			height:119px;
			background-image: linear-gradient(-45deg, #00677D 0%, #0B3852 67%, #072B4D 100%);
			color: #fff;
			.headerLogo{
				display:none;
				width:220px;
				overflow:auto;
				padding-top:35px;
				.name{
					float:left;
					height:50px;
					font-size:36px;
					margin-left:18px;
					padding-right:9px;
					border-right:#E9FBFF 1px solid;
				}
				.msg{
					margin-left:9px;
					float:left;
					width:95px;
					height:50px;
					.title{
						font-size:23px;
					}
					.titleEnglish{
						font-size:11px;
					}
				}
			}
			.headerOptionBox{
				float:right!important;
				margin:33px 0 0 0;
				.headerMsg{
					span{
						margin-right:3px;
					}	
				}
				.headerOption{
					margin-top:15px; 
					li{
						font-size:12px;
						position:relative;
						float:left;
						margin-right:18px;
						cursor: pointer;
						i{
							margin-right:3px;
						}
						small{
							width:17px;
							height:17px;
							border-radius:100%;
							position:absolute;
							background:#F3A23A;
							text-align:center;
							font-size:11px;
							top:0;
							right:0;
							margin-top:-8px;
							margin-right:-17px;
						}
					}
				}
			}
			.headerMenuBox{
				float:left!important;
				cursor:pointer;
				margin-top:43px; 
				margin-right:30px;
				.headerMenu{
					width:40px;
					height:35px;
					margin-left:18px;
					background-image: linear-gradient(45deg, #00677D 100%, #0B3852 107%, #072B4D 100%);
					border:#fff 1px solid;
					opacity:0.7;
					text-align: center;
					line-height: 35px;
					border-radius: 5px;
				}
			}
		}
		.menuStyle{
			position:absolute;
			left:0;
			top:119px;
			min-width:135px;
			background:#324157;
			overflow:auto;
			z-index:20;
		}
    }
	@media screen and (min-width: 768px){
		.menuStyle{
			min-width:220px;
			background:#324157;
			z-index:20;
		}
		#header{
			height:119px;
			background-image: linear-gradient(-45deg, #00677D 0%, #0B3852 67%, #072B4D 100%);
			color: #fff;
			.headerLogo{
				width:220px;
				overflow:auto;
				padding-top:35px;
				.name{
					float:left;
					height:50px;
					font-size:36px;
					margin-left:18px;
					padding-right:9px;
					border-right:#E9FBFF 1px solid;
				}
				.msg{
					margin-left:9px;
					float:left;
					width:95px;
					height:50px;
					.title{
						font-size:23px;
					}
					.titleEnglish{
						font-size:11px;
					}
				}
			}
			.headerOptionBox{
				margin:33px 0 0 30px;
				.headerMsg{
					span{
						margin-right:3px;
					}	
				}
				.headerOption{
					margin-top:15px; 
					li{
						position:relative;
						float:left;
						margin-right:46px;
						cursor: pointer;
						i{
							margin-right:8px;
						}
						small{
							width:17px;
							height:17px;
							border-radius:100%;
							position:absolute;
							background:#F3A23A;
							text-align:center;
							font-size:11px;
							top:0;
							right:0;
							margin-top:-8px;
							margin-right:-19px;
						}
					}
				}
			}
			.headerMenuBox{
				cursor:pointer;
				margin-top:43px; 
				margin-right:30px;
				.headerMenu{
					width:40px;
					height:35px;
					background-image: linear-gradient(45deg, #00677D 100%, #0B3852 107%, #072B4D 100%);
					text-align: center;
					border:#fff 1px solid;
					opacity:0.7;
					line-height: 35px;
					border-radius: 5px;
				}
			}
		}
    }
	#warp{
		margin:0;
		padding:0;
		overflow:auto;
	}
	.color_072C4D{
		color:#00677D!important;
		background:#fff!important;
	}
	.view{
		width:100%;
		background:#f3f3f4;
		overflow-y: scroll;
	}
	.viewTop{
		width:100%;
		background:#fff;
		height:40px;
		border-top: 1px solid #e7eaec !important;
		border-bottom: 1px solid #e7eaec !important;
	}
	.viewBottom{
		width:100%;
		background:#fff;
		height:40px;
		line-height:40px;
		padding-left:20px;
		border-top: 1px solid #e7eaec !important;
		border-bottom: 1px solid #e7eaec !important;
		color:#676a6c;
	}
	.routerViewStyle{
		margin:0 20px;
		padding-top:15px;
		background:#fff;
	}
	#center{
		display:flex;
		overflow:auto;
	}
	.backgroundStyle{
		background:#337ab7;
	}
	.inonStyle{
		background:#888;
	}
</style>