<template>
	<div class="row">
		<div class="col-lg-12">
			<!--设置面包屑-->
				<el-breadcrumb separator="/" class="ibox">
					<el-breadcrumb-item class="set-color ">档案中心</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/customerFileManage' }" class="set-color">基础数据管理</el-breadcrumb-item>
				</el-breadcrumb>
			<!--设置面包屑 end-->
			<!-- ibox-center -->
			<div class="ibox-center">

				<div class="row">
					<div class="col-sm-3 marginTop_10">
						<div class="form-inline">
							<label class="control-label">数据管理：</label>
							<input  placeholder="请输入内容" class="form-control"/>
						</div>
					</div>
					<div class="col-sm-3 marginTop_10">
						<div class="form-inline">
							<label class="control-label">数据代码：</label>
							<input  placeholder="请输入内容" class="form-control"/>
						</div>
					</div>
					<div class="col-sm-3 marginTop_10">
						<div class="form-inline">
							<label class="control-label">数据名称：</label>
							<input  placeholder="请输入内容" class="form-control"/>
						</div>
					</div>
					<div class="col-sm-1 marginTop_10">
							<el-button type="primary" icon="search">搜索</el-button>
					</div>
					<div class="col-sm-1 marginTop_10">
							<el-button type="primary" icon="search" @click="addData">新增</el-button>
					</div>
				</div>
				<!--table sortable属性排序-->
				<div class="tabelBox">
					<el-table :data="tableData" stripe  highlight-current-row   border="border">
						<el-table-column  type="selection"></el-table-column>
						<el-table-column prop="type" label="数据类型"></el-table-column>
						<el-table-column prop="dataCode" label="数据代码"></el-table-column>
						<el-table-column prop="dataName" label="数据名称"></el-table-column>
						<el-table-column prop="buildPeople" label="创建人"></el-table-column>
						<el-table-column prop="buildTime" label="创建时间" ></el-table-column>
						<el-table-column prop="updatePeople" label="更新人" ></el-table-column>
						<el-table-column prop="updateTime" label="更新时间"></el-table-column>
						<el-table-column label="操作" width="140">
							<template scope="scope">
								<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
								<el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
							</template>
						</el-table-column>
					</el-table>
				 </div>
				 <el-button type="primary" class="marginTop_10 flObj">批量删除</el-button> 
				 <!--分页-->
				 <div style="overflow:auto" class="marginTop_10 frObj">
						 <el-pagination
							@size-change="handleSizeChange"
							@current-change="handleCurrentChange"
							:current-page="currentPage4"
							layout="total, prev, pager, next, jumper"
							:total="400"
							>
						</el-pagination>
				 </div>
				 <!--提示弹窗-->
				 <div class="col-sm-12 form-group col-xs-12">
					<el-dialog title="提示" v-model="dialogVisible" :size="dialogSize" class="col-xs-12">
					<span>确定删除吗？</span>
					<span slot="footer" class="dialog-footer">
						<el-button @click="dialogVisible = false">取 消</el-button>
						<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
					</span>
					</el-dialog>
				</div>
				<!--新增弹窗-->
				 <div class="col-sm-12 form-group col-xs-12">
					<el-dialog title="新增" v-model="addDialog"  class="col-xs-12" :size="addDialogSize">
					<span>
						<form class="form-horizontal">
							<div class="form-group g-r-center">
								<label class="col-sm-2 control-label">数据类型：</label>
								<div class="col-sm-6">
									<el-input v-model="input" placeholder="请输入数据类型"></el-input>
								</div>
							</div>
							<div class="form-group g-r-center">
								<label class="col-sm-2 control-label">数据代码：</label>
								<div class="col-sm-6">
									<el-input v-model="input" placeholder="请输入数据代码"></el-input>
								</div>
							</div>
							<div class="form-group g-r-center">
								<label class="col-sm-2 control-label">数据名称：</label>
								<div class="col-sm-6">
									<el-input v-model="input" placeholder="请输入数据名称"></el-input>
								</div>
							</div>
							<div class="form-group g-r-center">
								<label class="col-sm-2 control-label">创建人：</label>
								<div class="col-sm-6">
									<el-input v-model="input" placeholder="请输入创建人名称"></el-input>
								</div>
							</div>
							<div class="form-group g-r-center">
								<label class="col-sm-2 control-label">创建时间：</label>
								<div class="col-sm-6">
									<el-date-picker
										v-model="value2"
										type="datetime"
										placeholder="选择日期时间">
									</el-date-picker>
								</div>
							</div>
							<div class="form-group g-r-center">
								<label class="col-sm-2 control-label">更新人：</label>
								<div class="col-sm-6">
									<el-input v-model="input" placeholder="请输入更新人名称"></el-input>
								</div>
							</div>
							<div class="form-group g-r-center">
								<label class="col-sm-2 control-label">更新时间：</label>
								<div class="col-sm-6">
									<el-date-picker
										v-model="value3"
										type="datetime"
										placeholder="选择日期时间">
										style:"width:0;"
									</el-date-picker>
								</div>
							</div>
                	</form>
					</span>
					<span slot="footer" class="dialog-footer">
						<el-button @click="addDialog = false">取 消</el-button>
						<el-button type="primary" @click="addDialog = false">保 存</el-button>
					</span>
					</el-dialog>
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
			value2:"",
			options:[{
				value: "选项1",
				label: "黄金糕"
			}, {
				value: '选项2',
				label: '双皮奶'
			}, {
				value: '选项3',
				label: '蚵仔煎'
			}, {
				value: '选项4',
				label: '龙须面'
			}, {
				value: '选项5',
				label: '北京烤鸭'
			}],
			border:true,//是否显示边框
			tableData: [
					{
						type: '婚姻状况',
						dataCode: '98',
						dataName: '已婚',
						buildPeople:'斯林娜',
						buildTime:'2017-04-09 10:23:43',
						updatePeople:'王俊凯',
						updateTime:'2017-04-23 13:23:43',
					},
					{
						type: '婚姻状况',
						dataCode: '98',
						dataName: '已婚',
						buildPeople:'斯林娜',
						buildTime:'2017-04-09 10:23:43',
						updatePeople:'王俊凯',
						updateTime:'2017-04-23 13:23:43',
					},
					{
						type: '婚姻状况',
						dataCode: '98',
						dataName: '已婚',
						buildPeople:'斯林娜',
						buildTime:'2017-04-09 10:23:43',
						updatePeople:'王俊凯',
						updateTime:'2017-04-23 13:23:43',
					},
					{
						type: '婚姻状况',
						dataCode: '98',
						dataName: '已婚',
						buildPeople:'斯林娜',
						buildTime:'2017-04-09 10:23:43',
						updatePeople:'王俊凯',
						updateTime:'2017-04-23 13:23:43',
					},
					{
						type: '婚姻状况',
						dataCode: '98',
						dataName: '已婚',
						buildPeople:'斯林娜',
						buildTime:'2017-04-09 10:23:43',
						updatePeople:'王俊凯',
						updateTime:'2017-04-23 13:23:43',
					},
					{
						type: '婚姻状况',
						dataCode: '98',
						dataName: '已婚',
						buildPeople:'斯林娜',
						buildTime:'2017-04-09 10:23:43',
						updatePeople:'王俊凯',
						updateTime:'2017-04-23 13:23:43',
					},
					{
						type: '婚姻状况',
						dataCode: '98',
						dataName: '已婚',
						buildPeople:'斯林娜',
						buildTime:'2017-04-09 10:23:43',
						updatePeople:'王俊凯',
						updateTime:'2017-04-23 13:23:43',
					},
					{
						type: '婚姻状况',
						dataCode: '98',
						dataName: '已婚',
						buildPeople:'斯林娜',
						buildTime:'2017-04-09 10:23:43',
						updatePeople:'王俊凯',
						updateTime:'2017-04-23 13:23:43',
					},
					{
						type: '婚姻状况',
						dataCode: '98',
						dataName: '已婚',
						buildPeople:'斯林娜',
						buildTime:'2017-04-09 10:23:43',
						updatePeople:'王俊凯',
						updateTime:'2017-04-23 13:23:43',
					},
				]
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
	@media screen and (max-width: 768px){
		.flObj{
		}
		.frObj{
		}
	}
	@media screen and (min-width: 768px){
		.flObj{
			float:left;
		}
		.frObj{
			float:right;
		}
	}
</style>
