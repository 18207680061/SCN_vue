import vueRouter from 'vue-router';
import footnav from '../../components/index/foot-nav.vue';
import devide from '../../components/index/devide.vue';
import brand from '../../components/brand.vue';
import home from '../../components/home.vue';

//品牌栏组件
import recommend from '../../components/brand/recommend.vue';
import male from '../../components/brand/male.vue';
import parts from '../../components/brand/parts.vue';
import outside from '../../components/brand/outside.vue';
import children from '../../components/brand/children.vue';
import allBrand from '../../components/brand/allBrand.vue';

// 购物车组件
import shopcart from '../../components/shopcart/shopcart.vue';

//我的组件
import login from '../../components/my/login.vue';
import register from '../../components/my/register.vue';
import member from '../../components/my/member.vue'

//商品
import prosList from '../../components/pros/prosList.vue';
import prosDetails from '../../components/pros/details.vue';

export default new vueRouter({
    routes:[
      {
        path:'/devide',
        component:brand,
        children:[
          {
            path:'/devide',
            component:recommend
          }
        ]
      },
      {
        path:'/brand',
        component:brand,
        children:[
          {
            path:'/brand',
            component:allBrand
          }
        ]
      },
      {
        path:'/brand/:name',
        component:brand,
        children:[
          {
            path:'/brand/为你推荐',
            component:recommend
          },{
            path:'/brand/男子',
            component:male
          },{
            path:'/brand/女子',
            component:male
          },{
            path:'/brand/配件',
            component:parts
          },{
            path:'/brand/户外',
            component:outside
          },{
            path:'/brand/童鞋童装',
            component:children
          },{
            path:'/brand/全部品牌',
            component:allBrand
          }
        ]
      },
      {
        path:'/home',
        component:home
      },{
        path:'/login',
        component:login
      },
      {
        path:'/register',
        component:register
      }, {
        path:'/shopcart',
        component:shopcart
      },
      {
        path:'/member',
        component:member
      },{
        path:'/prosList',
        component:prosList
      },{
        path:'/prosDetails',
        component:prosDetails
      },
      {
        path:'/',
        component:home
      }
    ]
})
