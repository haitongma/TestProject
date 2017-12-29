<template>
  <div>
    <!--顶部标题栏 开始-->
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title" id="title_label">填写商品信息</h1>
    </header>
    <!--顶部标题栏 结束-->

    <!--中间内容区 开始-->
    <div class="mui-content">
      <form class="mui-input-group">
        <!--不可输入项添加遮罩 class名为mui-disabled_layer-->
        <ul class="mui-table-view mui-disabled_layer">
          <li class="mui-table-view-cell mui-disabled">
            <div class="mui-navigate-right">
              一级品类
              <select class="demandGoods_select" name="" id="commodity_type_one" ng-model="typeOne"
                      ng-change="getCommodityTypeTwo(typeOne.id)"
                      ng-options="values.name for (key, values) in commodityTypeOne"
                      ng-init="typeOne.id='0'" ng-hide="isHide">
                <option class="mui-pull-right">请选择一级品类</option>
                <!--<span class="mui-pull-right" id="levelPicker1">请选择</span>-->
              </select>
              <select class="demandGoods_select" name="" id="commodity_type_one2" ng-hide="isShow" ng-focus="change()">
                <option value="-1" id="typeOneId">{{demand.typeOneName}}</option>
              </select>
            </div>
          </li>
          <li class="mui-table-view-cell mui-disabled">
            <div class="mui-navigate-right">
              二级品类
              <select class="demandGoods_select" name="" id="commodity_type_two" ng-model="typeTwo"
                      ng-change="getCommoditySpeAndSuf(typeTwo.id)"
                      ng-options="values.name for (key, values) in commodityTypeTwo" ng-init="typeTwo.id='0'"
                      ng-hide="isHide">
                <option class="mui-pull-right">请选择二级分类</option>
                <!--<span class="mui-pull-right" id="levelPicker1">请选择</span>-->
              </select>
              <select class="demandGoods_select" name="" id="commodity_type_two2" ng-hide="isShow">
                <option value="-1" ng-model="typeTwo" id="typeTwoId">{{demand.typeTwoName}}</option>
              </select>
            </div>
          </li>

          <li class="mui-table-view-cell mui-disabled">
            <div class="mui-navigate-right">
              规格
              <select class="demandGoods_select" name="" ng-model="spec"
                      ng-options="values.specification for (key, values) in commoditySpecification" ng-hide="isHide">
                <option class="mui-pull-right">请选择规格</option>
                <!--<span class="mui-pull-right" id="levelPicker1">请选择</span>-->
              </select>

              <select class="demandGoods_select" name="" ng-hide="isShow">
                <option value="-1" ng-model="spec" id="specId">{{demand.specificationName}}</option>
              </select>
            </div>
          </li>

          <li class="mui-table-view-cell mui-disabled">
            <div>
              商品名称
              <input type="text" class="mui-input mui-input-clear mui-text-right w65" id="goods_name"
                     placeholder="请输入商品名称">
            </div>
          </li>
          <li class="mui-table-view-cell mui-disabled">
            <div>
              <label>订单负责人</label>
              <input type="text" class="mui-input mui-input-clear mui-text-right w65" id="itemOrderName"
                     placeholder="请输入订单负责人姓名">
            </div>
          </li>
          <li class="mui-table-view-cell mui-disabled">
            <div>
              <label>货源负责人</label>
              <input type="text" class="mui-input mui-input-clear mui-text-right w65" id="itemStuffName"
                     placeholder="请输入货源负责人姓名">
            </div>
          </li>
          <li class="mui-table-view-cell mui-disabled">
            <div>
              <label>发货人</label>
              <input type="text" class="mui-input mui-input-clear mui-text-right w65" id="itemPassName"
                     placeholder="请输入发货人姓名">
            </div>
          </li>
          <li class="mui-table-view-cell mui-disabled">
            <div class="">
              <label>单价</label>
              <input type="number" step="0.01" class="mui-input mui-input-clear mui-text-right w50" id="itemPrice"
                     placeholder="0.00" style="width: 40%;">
              <span class="mui-pull-right">元/吨</span>
            </div>
          </li>
          <li class="mui-table-view-cell mui-disabled">
            <div class="">
              <label>吨数</label>
              <input type="number" class="mui-input mui-input-clear mui-text-right w50" id="itemRemain"
                     placeholder="0.00" style="width: 40%;">
              <span class="mui-pull-right">吨</span>
            </div>
          </li>
        </ul>
      </form>
      <!--错误提示以及下一步按钮-->
      <div class="mui-content-padded login-tips" id="error_tip" style="display: none;">
        <span class="mui-icon mui-icon-close"></span><span id="error_msg">请输入正确信息</span>
      </div>
      <div class="footer_btn mui-text-center">
        <a class="mui-btn mui-btn-primary mui-btn-block" id="next_btn" href="javascript:;"
           style="display: inline-block; width: 65%">下一步</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        demand: {}
      }
    },
    components: {
    }
  }
</script>
<style scoped>
  @import "../assets/css/mui.min.css";
  body {
    background-color: #ff0000;
  }
</style>
