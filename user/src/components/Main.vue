<!--  -->
<template>
  <div>
    <div>
      <p id="position">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        您当前的位置：{{position}}
      </p>
      <div id="userMassage">
        <div id="userLogo" style="padding-left:20px;">
          <img src="../assets/userimg.jpg" style="width:70px;height:70px;border-radius:70px;"/>
        </div>
        <div id="msgContent">
          <p>您好，{{username}}</p>
          <div id="welcome">
            {{jurisdiction}}
            <span style="width:1px;height:20px;background-color: #f0f3f5;"></span>
            <a href="" target="_self">我的账户</a>
          </div>
          <div id="date">
            <img src="../assets/date.png" style="width:60px;height:60px;"/>
            <div>
              <span style="font-size:24px;height:30px;">
              {{date}}/19
            </span>
            <p>
              当前教学周
            </p>
            </div>
          </div>
          <div id="visit">
            <img src="../assets/computer.png" style="width:60px;height:60px;"/>
            <div>
              <span style="font-size:24px;height:30px;">
              {{visitNum}}次
            </span>
            <p style="width:90px;">
              系统访问次数
            </p>
            </div>
          </div>
        </div>
      </div>
      <div id="main-content">
        <div id="left-nav">
          <div id="lesson">
            <div id="lesson-title">
              <i class="fa fa-list" aria-hidden="true"></i>
              <p>今日课程({{lessonNum}})</p>
            </div>
            <div id="lesson-content"></div>
          </div>
          <div id="loginmsg">
            <div id="loginmsg-title">
              <i class="fa fa-user" aria-hidden="true"></i>
              <p>登陆信息</p>
            </div>
            <div id="loginmsg-content">
            </div>
          </div>
        </div>
      <div id="content">
        <div id="quickenter">
          <div id="quickenter-title">
            <i class="fa fa-paper-plane" aria-hidden="true"></i>
            <p>快捷入口</p>
          </div>
          <div  id="quickenter-content"></div>
        </div>
        <div id="filedownload">
          <div id="filedownload-title">
            <i class="fa fa-download" aria-hidden="true"></i>
            <p>文件下载</p>
          </div>
          <div id="filedownload-content"></div>
        </div>
      </div>
      <div id="right-nav">
        <div id="notice">
          <div id="notice-title">
            <i class="fa fa-user" aria-hidden="true"></i>
            <p>通知公告</p>
          </div>
          <div id="notice-content"></div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Main',
  data() {
    return {
      position:"首页",
      username:"xxx",
      jurisdiction:"学生",
      date:"15",
      visitNum:"0",
      lessonNum:"0",
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style>
/* @import url(); 引入css类 */
@import url(../css/main.css);
</style>