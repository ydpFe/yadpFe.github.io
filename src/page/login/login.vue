<template>
	<div class="row loginBox">
		<div>
			<div class="logo flObj">
				<img src="../../assets/logo.png">
				<div class="logoText">采销管理系统</div>
			</div>
			<!-- login -->
			<div class="login frObj">
				<div class="o-f">
					<div class="title" @click="accountLogin">账号登录</div>
					<div class="title" @click="scanCodeEntry">扫码登录</div>
				</div>
				<template v-if="activeBar==1">
					<div class="loginName">
						<div class="loginIcon"><img src="../../assets/icon-loginImg.png" class="loginImg"></div>
						<input type="text" class="loginInput">
					</div>
					<div class="loginName">
						<div class="loginIcon"><img src="../../assets/icon-mima.png" class="loginImg"></div>
						<input type="text" class="loginInput">
					</div>
					<div class="selectObj o-f">
						<span><input type="checkbox" value="checkList" name="selectBox"/><label for="selectBox">记住密码</label></span>
						<span class="fr r-t">忘记密码</span>
					</div>
					<div class="submitBtn" @click="jump">确认登录</div>
				</template>
				<template v-if="activeBar==2">
					<div class="d-password">
						<div class="code">
							<qriously :value="val" class="canvasObj" :size="150"/>
						</div>
						<div class="text"><span>请用钉钉扫描二维码登录</span><i class="icon-refresh icon-spin iconStyle"></i><span class="iconStyle">刷新</span></div>
					</div>
				</template>
			</div>
			<!-- login end-->
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			checkList:[],
			activeBar:1,//1为帐号登录 2为扫码登录
			val:"https://www.baidu.com" 
		}
	},
	mounted(){
		//设置弹窗组件 size 大小
		let deviceWidth = document.documentElement.clientWidth;
		console.log(deviceWidth);
		 if(parseInt(deviceWidth) < parseInt(768)){
			this.dialogSize="large";
			this.addDialogSize="large";
		 }else{
			this.dialogSize="tiny";
			this.addDialogSize="small";
		 }
	},
	methods:{
		 accountLogin(){
			 this.activeBar=1;
		 },
		 scanCodeEntry(){
			 this.activeBar=2;
		 },
		 jump(){
			 this.$router.push("/index");
		 }
	}
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
	
	@media screen and (max-width: 768px){
		.frObj{

		}
		.flObj{

		}
		.canvasObj{
			padding-top:10px;
		}
		.loginBox{
			position:fixed;
			width:100%;
			height:100vh;
			top:0;
			left:0;
			z-index:1000;
			margin:0;
			padding:0;
			background:url(../../assets/bg.png);
			background-repeat:no-repeat;
			background-size:cover;
		}
		.login{
			width:300px;
			height:280px;
			background: rgba(255,255,255,0.20);
			border: 1px solid rgba(255,255,255,0.22);
			box-shadow: 0 3px 6px 0 rgba(255,108,64,0.26);
			border-radius: 5px;
			margin:0 auto;
			margin-top:100px;
			.d-password{
				width:190px;
				height:188px;
				background:#fff;
				margin:0 auto;
				.code{
					text-align:center;
				}
				.text{
					font-size:12px;
					text-align:center;
					padding-top:4px;
				}
			}
			.title{
				height:72px;
				line-height:72px;
				font-size:16px;
				color:#fff;
				width:149px;
				text-align:center;
				float:left;
				cursor: pointer;
			}
			.loginName{
				width:280px;
				height:44px;
				margin:0 10px;
				background: rgba(255,255,255,0.20);
				margin-bottom:1px;
				.loginInput{
					width:230px;
					height:44px;
					background:rgba(255,255,255,0.40);
					text-indent:20px;
					color:#fff;
					border:none;
					outline:0;
				}
				.loginIcon{
					width:50px;
					height:44px;
					background: rgba(255,255,255,0.60);
					padding-top:10px;
					text-align:center;
					float:left;
					.loginImg{
						width:24px;
						height:24px;
					}
				}
			}
			.selectObj{
				margin:8px 12px 0 12px;;
				input{
					width:14px;
					height:14px;
				}
				label{
					font-size:14px;
					margin-left:7px;
					color: #FF6C40;
				}
				.r-t{
					color: #FF6C40;
				}
			}
			.submitBtn{
				background: #FF7206;
				border-radius: 50px;
				width:240px;
				height:36px;
				margin:0 auto;
				text-align:center;
				color:#fff;
				line-height:36px;
				margin-top:26px;
				cursor:pointer;
			}
		}
		.iconStyle{
			cursor:pointer;
			margin-left:5px;
			color:#3484F5;
		}
		.logo{
			display:none;
			margin-top:110px;
			margin-left:300px;
		}
		.logoText{
			font-size: 42px;
			color: #FFFFFF;
			text-shadow: 0 2px 4px rgba(74,73,74,0.30);
		}
	}
	@media screen and (min-width: 768px){
		.frObj{
			float:right;
		}
		.flObj{
			float:left;
		}
		.canvasObj{
			padding-top:10px;
		}
		.loginBox{
			position:fixed;
			width:100%;
			height:100vh;
			top:0;
			left:0;
			z-index:1000;
			margin:0;
			padding:0;
			background:url(../../assets/bg.png);
			background-repeat:no-repeat;
			background-size:cover;
		}
		.login{
			width:300px;
			height:280px;
			background: rgba(255,255,255,0.20);
			border: 1px solid rgba(255,255,255,0.22);
			box-shadow: 0 3px 6px 0 rgba(255,108,64,0.26);
			border-radius: 5px;
			margin-right:300px;
			margin-top:160px;
			.d-password{
				width:190px;
				height:188px;
				background:#fff;
				margin:0 auto;
				.code{
					text-align:center;
				}
				.text{
					font-size:12px;
					text-align:center;
					padding-top:4px;
				}
			}
			.title{
				height:72px;
				line-height:72px;
				font-size:16px;
				color:#fff;
				width:149px;
				text-align:center;
				float:left;
				cursor: pointer;
			}
			.loginName{
				width:280px;
				height:44px;
				margin:0 10px;
				background: rgba(255,255,255,0.20);
				margin-bottom:1px;
				.loginInput{
					width:230px;
					height:44px;
					background:rgba(255,255,255,0.40);
					text-indent:20px;
					color:#fff;
					border:none;
					outline:0;
				}
				.loginIcon{
					width:50px;
					height:44px;
					background: rgba(255,255,255,0.60);
					padding-top:10px;
					text-align:center;
					float:left;
					.loginImg{
						width:24px;
						height:24px;
					}
				}
			}
			.selectObj{
				margin:8px 12px 0 12px;;
				input{
					width:14px;
					height:14px;
				}
				label{
					font-size:14px;
					margin-left:7px;
					color: #FF6C40;
				}
				.r-t{
					color: #FF6C40;
				}
			}
			.submitBtn{
				background: #FF7206;
				border-radius: 50px;
				width:240px;
				height:36px;
				margin:0 auto;
				text-align:center;
				color:#fff;
				line-height:36px;
				margin-top:26px;
				cursor:pointer;
			}
		}
		.iconStyle{
			cursor:pointer;
			margin-left:5px;
			color:#3484F5;
		}
		.logo{
			margin-top:110px;
			margin-left:300px;
		}
		.logoText{
			font-size: 42px;
			color: #FFFFFF;
			text-shadow: 0 2px 4px rgba(74,73,74,0.30);
		}
	}
</style>
