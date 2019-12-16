<!--  -->
<template>
  <div id="header-main">
    <header id="header">
      <div id="logo">
        <img
          src="../assets/logo.jpg"
          style="width:200px;height:60px;padding-left:30px;padding-top:10px;"
        />
      </div>
      <div id="title">教学管理系统</div>
      <div id="usermessage">
        <div id="jurisdiction">
          <h4 style="line-height:40px;color:white;">{{jurisdiction}}</h4>
        </div>
        <div id="user">
          <div id="userImg">
            <img src="../assets/userimg.jpg" style="width:40px;height:40px;border-radius:40px;" />
          </div>
          <p style="line-height:55px;color:white;padding-left:20px;">{{userid}}</p>
        </div>
        <div id="logOut">
          <i
            class="fa fa-power-off"
            aria-hidden="true"
            style="color:white;width:40px;height:40px;text-align:center;line-height:90px"
          ></i>
          <h4 style="line-height:40px;color:white;padding-left:20px;">退出</h4>
        </div>
      </div>
    </header>
    <nav id="headernav">
      <div id="index" @click="indexClick">首页</div>
      <div id="my">
        我的
        <ul id="myList">
          <li @click="bukaobaomingClick">补考报名</li>
          <li @click="jidianjisuanClick">放弃绩点计算课程申请</li>
          <li @click="xuejixinxiClick">学籍信息</li>
          <li>毕业论文</li>
          <li>培养计划</li>
          <li>计划完成情况</li>
          <li @click="myLessonClick">我的课表</li>
          <li>选课</li>
          <li>我的考试</li>
          <li>我的成绩</li>
          <li>教材订购</li>
          <li>重修申请</li>
          <li>信息核准及补录</li>
        </ul>
      </div>
      <div id="evaluate">
        量化评教
        <ul id="evaluateList">
          <li>量化评教</li>
        </ul>
      </div>
      <div id="publicService">
        公共服务
        <ul id="publicServiceList">
          <li>全校开课查询</li>
          <li>站内消息</li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      jurisdiction: "学生",
      userid: "201600000000"
    };
  },
  methods: {
    indexClick() {
      this.$router.push({ path: "/user" }).catch(e => {});
    },
    myLessonClick() {
      this.$router.push({ path: "/mylesson" }).catch(e => {});
    },
    bukaobaomingClick() {
      this.$router.push({ path: "/bukaobaoming" }).catch(e => {});
    },
    jidianjisuanClick() {
      this.$router.push({ path: "/jidianjisuan" }).catch(e => {});
    },
    xuejixinxiClick() {
      this.$router.push({ path: "/xuejixinxi" }).catch(e => {});
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style>
@import url(../css/header.css);
</style>