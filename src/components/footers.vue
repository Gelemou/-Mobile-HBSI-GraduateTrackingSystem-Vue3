<template>
  <div class="footerContainer">
    <div class="third">
      <div class="topContent">
        <div class="content">
          <div><img src="../assets/组 22.png" alt="" /></div>

          <div class="codeContainer">
            <div class="code"><img src="" alt="" /><span>官微</span></div>
            <div class="code"><img src="" alt="" /><span>小程序</span></div>
          </div>
        </div>
        <div class="yu">
          <span>域名备案信息:www.hbsi.edu.cn</span>
        </div>
        <div class="corp">
          <span> 版权所有 &copy; 河北软件职业技术学院</span>
        </div>
      </div>
    </div>
    <div class="second">
      <div></div>
    </div>
    <div class="first"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less">
.footerContainer {
  height: 300px;
  margin-top: 100px;
  position: relative;
}
.footerContainer > div {
  position: absolute;
  bottom: 0;
  & > div {
    margin: 0 auto;
  }
}
.first {
  width: 100%;
  height: 60px;
  background: rgba(198, 207, 215, 0.2);
}
.second {
  width: 100%;
  div {
    width: 90%;
    height: 110px;
    background: rgb(148, 174, 202);
  }
}
.third {
  width: 100%;
  z-index: 100;
  & > div {
    width: 85%;
    height: 250px;
    background: rgb(2, 62, 130);
  }
}
.topContent {
  color: #fff;
  .content {
    font-size: 14px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.19);
    span {
      text-align: left;
      line-height: 30px;
    }
  }
  .yu {
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 0 auto;
  }
}
.codeContainer {
  display: flex;
  flex-direction: row;
  .code {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 10px;
  }
  img {
    width: 88px;
    height: 88px;
  }
}
.corp {
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  span {
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
