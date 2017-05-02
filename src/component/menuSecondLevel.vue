<template>
    <div>
        <div id="menu">
            <el-menu :default-active="active" class="el-menu-vertical-demo borderNone" theme="dark" mode="vertical" :unique-opened="open" :router="router" :default-openeds="opends">
                <template v-for="data in menuData">
                    <!--使用elementjs menu组件 渲染一级标题-->
                    <el-submenu :index="data.id" class="parentMenu" :key="data.id">
                        <template slot="title"><i class="marginRight_10" :class="data.icon"></i>{{data.name}}</template>
                        <!--渲染二级标题-->
                        <template v-for="child in data.children" v-if=" data.children.length!=0 ">
                                <el-menu-item :index="child.id" :id="child.path"  @click="jump" :urlname="child.path" class="childMenu">{{child.name}}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
            </el-menu>
        </div>
    </div>
</template>
<script>

export default{
    data(){
        return{
            menuIndex:"0",//默认
            router:true,
            open:true,
            active:"",
            opends:[""] //默认展开 对应 key
        }
    },
    props:['menuData'],
    created(){

    },
    methods:{
        jump(event){
            this.active=event.$el.id;
            let id=event.$el.id;
            this.$router.push({ path: id});
            this.$emit("closeMenu");
        }
    }
}
</script>
<style lang='sass' rel="stylesheet/scss" scoped>
    .borderNone{
        border-radius:0!important;
    }
    .marginRight_10{
        margin-right:10px;
    }
    .el-menu--dark {
        background-color: #324157;
    }
    .el-menu-item{
        background-color: #1F2D3D;
    }
    .el-menu-item:hover{
        background-color:#48576A!important
    }
    .el-submenu__title:hover{
        background-color:#48576A!important
    }
</style>