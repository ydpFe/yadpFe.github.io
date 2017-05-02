<template>
	<div class="row">
		<div class="col-lg-12">
			<!--设置面包屑-->
				<el-breadcrumb separator="/" class="ibox">
					<el-breadcrumb-item class="set-color ">档案中心</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/customerFileManage' }" class="set-color">单位客户档案管理</el-breadcrumb-item>
				</el-breadcrumb>
			<!--设置面包屑 end-->
			<!-- ibox-center -->
			<div class="ibox-center">

				<div class="row">
					<div class="col-sm-3 marginTop_10">
						<div class="form-inline">
							<label class="control-label">档案号：</label>
							<input  placeholder="请输入内容" class="form-control"/>
						</div>
					</div>
					<div class="col-sm-3 marginTop_10">
						<div class="form-inline">
							<label class="control-label">单位类型：</label>
							<input  placeholder="请输入内容" class="form-control"/>
						</div>
					</div>
					<div class="col-sm-3 marginTop_10">
						<div class="form-inline">
							<label class="control-label">单位名称：</label>
							<input  placeholder="请输入内容" class="form-control"/>
						</div>
					</div>
					<div class="col-sm-3 marginTop_10">
						<div class="form-inline">
							<label class="control-label">所在区域：</label>
							<input  placeholder="请输入内容" class="form-control"/>
						</div>
					</div>
					<div class="col-sm-3 marginTop_10">
						<div class="form-inline">
							<label class="control-label">业务员：</label>
							<input  placeholder="请输入内容" class="form-control"/>
						</div>
					</div>
					<div class="col-sm-1 marginTop_10">
							<el-button type="primary" icon="search">搜索</el-button>
					</div>
				</div>
				<!--table sortable属性排序-->
				<div class="tabelBox">
					<el-table :data="tableData" stripe  highlight-current-row style="overflow:auto"  border="border">
						<el-table-column  type="selection"></el-table-column>
						<el-table-column prop="id" label="档案号"></el-table-column>
						<el-table-column prop="company" label="单位名称"></el-table-column>
						<el-table-column prop="is" label="是否采购商"></el-table-column>
						<el-table-column prop="address" label="所在地区"></el-table-column>
						<el-table-column prop="people" label="渠道业务员" ></el-table-column>
						<el-table-column prop="buildPeople" label="建档人" ></el-table-column>
						<el-table-column prop="buildTime" label="建档时间"></el-table-column>
						<el-table-column prop="money" label="授信额度" ></el-table-column>
						<el-table-column prop="state" label="审批状态"></el-table-column>
						<el-table-column label="操作" min-width="140">
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
			dialogSize:"",
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
						id: '2016030007',
						company: '杭州快抢车网络科技有限责任公司',
						is: '是',
						address:'杭州区域',
						people:'张信哲',
						buildPeople:'王俊凯',
						buildTime:'2017-04-09',
						money:'3000000',
						state:'等待风控专员审批',
					},
					{
						id: '2016030007',
						company: '杭州快抢车网络科技有限责任公司',
						is: '是',
						address:'杭州区域',
						people:'张信哲',
						buildPeople:'王俊凯',
						buildTime:'2017-04-09',
						money:'3000000',
						state:'等待风控专员审批',
					},
					{
						id: '2016030007',
						company: '杭州快抢车网络科技有限责任公司',
						is: '是',
						address:'杭州区域',
						people:'张信哲',
						buildPeople:'王俊凯',
						buildTime:'2017-04-09',
						money:'3000000',
						state:'等待风控专员审批',
					},
					{
						id: '2016030007',
						company: '杭州快抢车网络科技有限责任公司',
						is: '是',
						address:'杭州区域',
						people:'张信哲',
						buildPeople:'王俊凯',
						buildTime:'2017-04-09',
						money:'3000000',
						state:'等待风控专员审批',
					},
					{
						id: '2016030007',
						company: '杭州快抢车网络科技有限责任公司',
						is: '是',
						address:'杭州区域',
						people:'张信哲',
						buildPeople:'王俊凯',
						buildTime:'2017-04-09',
						money:'3000000',
						state:'等待风控专员审批',
					},
					{
						id: '2016030007',
						company: '杭州快抢车网络科技有限责任公司',
						is: '是',
						address:'杭州区域',
						people:'张信哲',
						buildPeople:'王俊凯',
						buildTime:'2017-04-09',
						money:'3000000',
						state:'等待风控专员审批',
					},
					{
						id: '2016030007',
						company: '杭州快抢车网络科技有限责任公司',
						is: '是',
						address:'杭州区域',
						people:'张信哲',
						buildPeople:'王俊凯',
						buildTime:'2017-04-09',
						money:'3000000',
						state:'等待风控专员审批',
					},
				]
		}
	},
	mounted(){
		//设置弹窗组件 size 大小
		let deviceWidth = document.documentElement.clientWidth;
		 if(Number(deviceWidth)<768){
			this.dialogSize="large";
		 }else{
			this.dialogSize="tiny";
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
