<template>
  <div class="header-wrap">
    <div class="heder-container">
      <div class="header-left">
        <img :src="url" alt="" />
      </div>
      <div class="heder-center">
        <div
          class="center-item"
          v-for="(item, index) in tabArr"
          :key="`tab_${index}`"
        >
          {{ item }}
        </div>
      </div>
      <div class="header-right">
        <div class="register-btn">
          <a-button>
            注册
          </a-button>
        </div>
        <div>
          <a-button type="primary">
            登录
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button } from "ant-design-vue";
export default {
  name: "Header",
  props: {
    tabArr: {
      type: Array,
      default: () => []
    }
  },
  components: {
    AButton: Button
  },
  mounted() {
    console.log(this.tabArr);
  },
  data() {
    return {
      url:
        "http://www.ssccs.net/static/modules/cms/front/themes/zly/images/logo.png"
    };
  }
};
</script>
<style lang="less" scoped>
.header-wrap {
  background: #fff;
  .heder-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 66px;
    box-shadow:0px 2px 12px 0px rgba(0,0,0,0.1);
    .header-left {
      width: 70px;
      height: 26px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .heder-center {
      display: flex;
      margin-left: 20px;
      font-size: 16px;
      .center-item {
        padding: 0 10px;
        &:hover {
          cursor: pointer;
          color: #1f5bf0;
        }
      }
    }
    .header-right {
        display: flex;
      margin-left: 100px;
      .register-btn {
          margin-right: 10px;
      }
    }
  }
}
</style>
