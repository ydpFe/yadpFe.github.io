<template>
	<div class="row">
		<div class="col-lg-12">
			<!--设置面包屑-->
				<el-breadcrumb separator="/" class="ibox">
					<el-breadcrumb-item class="set-color ">个人中心</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/customerFileManage' }" class="set-color">站内提醒</el-breadcrumb-item>
				</el-breadcrumb>
			<!--设置面包屑 end-->
			<!-- ibox-center -->
			<div class="ibox-center">
				<div class="row">
					<div class="col-sm-4 marginTop_10">
						<div class="form-inline">
							<label class="control-label">分类：</label>
							<el-button>审批流</el-button>
							<el-button type="primary">提醒</el-button>
						</div>
					</div>
				</div>
			</div>
			<!-- ibox-center end -->
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			input:"",
			currentPage4: 4,
			dialogVisible:false,
			addDialog:false,
			dialogSize:"",
			addDialogSize:"",
			value3:"",
			value2:""
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
		 handleEdit(index, row) {
        	console.log(index, row);
		},
		handleDelete(index, row) {
			console.log(index, row);
			this.dialogVisible = true;
		},
		handleSizeChange(val) {
        	console.log(`每页 ${val} 条`);
      	},
      	handleCurrentChange(val) {
			this.currentPage = val;
			console.log(`当前页: ${val}`);
      	},
		addData(){
			this.addDialog=true;
		}
	}
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
    .fontSize_40{
        font-size:20px;
        color:#1ab394;
    }
	.marginTop_10{
		margin-top:10px;
	}
	.marginRight_20{
		margin-right:20px;
	}
	.time{
		font-size: 14px;
		color: #888!important;
	}
	@media screen and (max-width: 768px){
		.flObj{
		}
		.frObj{
		}
		.indexBox{
			height:240px;
			border:1px #EDEDED solid;
			margin:0 1.3%;
			margin-top:16px;
			.title{
				width:100%;
				height:47px;
				border-bottom:1px #EDEDED solid;
				position:absolute;
				top:0;
				left:0;
				.name{
					float:left;
					margin-left:12px;
					color:#5f5f5f;
					font-size:16px;
					height:47px;
					line-height:47px;
				}
				.moreBtn{
					cursor:pointer;
					width:54px;
					height:20px;
					text-align:center;
					line-height:20px;
					background:#48C6C9;
					color:#fff;
					font-size:12px;
					border-radius: 4px;
					margin-top:13px;
					float:right;
					margin-right:12px;
					span{
						margin-right:3px;
					}
				}
			}
		}
		.marginTop_16{
		}
	}
	@media screen and (min-width: 768px){
		.indexBox{
			height:240px;
			border:1px #EDEDED solid;
			margin:0 1.3%;
			.title{
				width:100%;
				height:47px;
				border-bottom:1px #EDEDED solid;
				position:absolute;
				top:0;
				left:0;
				.name{
					float:left;
					margin-left:12px;
					color:#5f5f5f;
					font-size:16px;
					height:47px;
					line-height:47px;
				}
				.moreBtn{
					cursor:pointer;
					width:54px;
					height:20px;
					text-align:center;
					line-height:20px;
					background:#48C6C9;
					color:#fff;
					font-size:12px;
					border-radius: 4px;
					margin-top:13px;
					float:right;
					margin-right:12px;
					span{
						margin-right:3px;
					}
				}
			}
		}
		.marginTop_16{
			margin-top:16px;
		}
		.flObj{
			float:left;
		}
		.frObj{
			float:right;
		}
	}
</style>
