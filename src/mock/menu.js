import Mock from 'mockjs'

/**
 * 
 * 动态模拟菜单
 * 
 * label菜单的名字
 * path菜单的路径
 * icon菜单的图标（系统采用的阿里巴巴图表库）
 * compnent组件的地址
 * children子类菜单数组
 * group配置其他路由激活菜单高亮
 */

/*
 在根据菜单生成路由表时，相比菜单内的对象有些变化(千万不要把菜单直接当成路由表！)，比如下面的第一个对象，在变成路由表内的数据时为(原因见avue-router.js的formatRoutes)：
 {
     path:'/guide',
     component(resolve){    //路由懒加载
           require(['../page/index'], resolve)                    //该组件是主页框架(@/page/index)
     },
      name: '引导页',
       icon: 'icon-canshu',
       meta: {},
       redirect:'/guide/index',
       children:{
            component(resolve) {
            require([`../views/guide/index.vue`], resolve)
            },
            icon: 'icon-canshu',
            name: '引导页',
            meta: {},
            path: 'index'
       }
  }
  若是含有子菜单的菜单如：CRUD表单，生成的路由表为:
  {
        path:'/forms',
        component(resolve){                                         //路由懒加载
           require(['../page/index'], resolve)                    //该组件是主页框架(@/page/index)
        },
        name:'CRUD表单',
        icon:'icon-biaodan',
        meta:{
            keepAlive:true
        },
        redirect:'',
        children:[
        {
            path:'index',
            component(resolve){                                         //路由懒加载
                require(['..views/forms/index'], resolve)                    //该组件是主页框架(@/page/index)
            },
            name:'表单CRUD',
            icon:'icon-biaodan',
            meta:{
                keepAlive:true
            },
           redirect:'',
           children:[]
        },
        {
            path:'tabs',
            component(resolve){                                         //路由懒加载
                require(['..views/forms/tabs'], resolve)                    //该组件是主页框架(@/page/index)
            },
            name:'表单TABS',
            icon:'icon-biaodan',
            meta:{},
            redirect:'',
           children:[]
        },
        ....等等
        ]
  }

 */
const first = [{
    id: 33,
    label: "引导页",
    path: '/guide',
    component: 'views/guide/index',
    icon: 'icon-canshu',
    children: [],
}, {
    id: 13,
    label: "权限测试页",
    path: '/role',
    icon: 'icon-quanxian',
    component: 'views/role',
    children: [],
}, {
    id: 14,
    label: "数据展示",
    path: '/exhibition',
    icon: 'icon-shujuzhanshi2',
    component: 'views/exhibition/index',
    children: [],
}, {
    id: 7,
    label: "阿里图标",
    path: '/iconfont',
    icon: 'icon-changyonglogo27',
    component: 'views/iconfont/index',
    meta: {},
    children: []
}, {
    id: 2,
    label: "第三方网站",
    path: '/url',
    icon: 'icon-iframe',
    meta: {},
    children: [{
        id: 3,
        label: "avue官网",
        path: 'https://avue.top',
        icon: 'el-icon-document',
        children: [],
    }, {
        id: 3,
        label: "百度",
        path: 'https://www.baidu.com',
        icon: 'icon-baidu1',
        children: [],
    }, {
        id: 4,
        label: "搜狐",
        path: 'http://www.shouhu.com',
        icon: 'icon-souhu',
        children: [],
    }, {
        id: 5,
        label: "360",
        path: 'http://www.360.com',
        icon: 'icon-msnui-360',
        children: [],

    }]
}, {
    id: 22,
    label: "CRUD表单",
    path: '/forms',
    icon: 'icon-biaodan',
    meta: {
        keepAlive: true
    },
    children: [{
        id: 9,
        label: "表单CRUD",
        path: 'index',
        component: 'views/forms/index',
        query: {
            a: 1
        },
        icon: 'icon-biaodan',
        meta: {
            keepAlive: true
        },
        children: []
    }, {
        id: 19,
        label: "表单TABS",
        path: 'tabs',
        component: 'views/forms/tabs',
        icon: 'icon-biaodan',
        meta: {},
        children: []
    }, {
        id: 10,
        label: "表单SELECT联动",
        path: 'select',
        component: 'views/forms/select',
        icon: 'icon-biaodan',
        meta: {},
        children: []
    }, {
        id: 10,
        label: "表单DATE",
        path: 'date',
        component: 'views/forms/date',
        icon: 'icon-biaodan',
        meta: {},
        children: []
    }, {
        id: 10,
        label: "表单TREE",
        path: 'tree',
        component: 'views/forms/tree',
        icon: 'icon-biaodan',
        meta: {},
        children: []
    }, {
        id: 10,
        label: "表单STEPS",
        path: 'steps',
        component: 'views/forms/steps',
        icon: 'icon-biaodan',
        meta: {},
        children: []
    }, {
        id: 10,
        label: "表单RATE",
        path: 'rate',
        component: 'views/forms/rate',
        icon: 'icon-biaodan',
        meta: {},
        children: []
    }, {
        id: 10,
        label: "表单UPLOAD",
        path: 'upload',
        component: 'views/forms/upload',
        icon: 'icon-biaodan',
        meta: {},
        children: []
    }, {
        id: 10,
        label: "表单DETAIL",
        path: 'detail',
        component: 'views/forms/detail',
        icon: 'icon-biaodan',
        meta: {},
        children: []
    }, {
        id: 10,
        label: "表单SILDER",
        path: 'silder',
        component: 'views/forms/silder',
        icon: 'icon-biaodan',
        meta: {},
        children: []
    }, {
        id: 10,
        label: "表单自定义组件",
        path: 'transfer',
        component: 'views/forms/transfer',
        icon: 'icon-biaodan',
        meta: {},
        children: []
    }]
}, {
    id: 6,
    label: "CRUD表格",
    path: '/table',
    icon: 'icon-biaoge',
    meta: {},
    children: [{
        id: 16,
        label: "CRUD表格",
        path: 'index',
        component: 'views/table/index',
        query: {
            a: 1
        },
        icon: 'icon-biaoge',
        meta: {},
        children: []
    }, {
        id: 161,
        label: "表格TREE",
        path: 'tree',
        component: 'views/table/table-tree/index',
        query: {
            a: 1
        },
        icon: 'icon-biaoge',
        meta: {},
        children: []
    }, {
        id: 161,
        label: "表格EDIT",
        path: 'edit',
        component: 'views/table/edit',
        query: {
            a: 1
        },
        icon: 'icon-biaoge',
        meta: {},
        children: []
    }, {
        id: 16,
        label: "表格TREE自定义",
        path: 'alltree',
        component: 'views/table/table-tree/all',
        query: {
            a: 1
        },
        icon: 'icon-biaoge',
        meta: {},
        children: []
    }]
}, {
    id: 11,
    label: "树型",
    path: '/tree',
    component: 'views/tree/index',
    icon: 'icon-biaodan',
    meta: {},
    children: []
}]
const second = [{
    id: 15,
    label: "高级路由",
    path: '/advanced-router',
    icon: 'icon-iconset0265',
    meta: {},
    children: [{
        id: 16,
        label: "动态路由",
        path: 'mutative-router',
        component: 'views/advanced-router/mutative-router',
        icon: 'icon-dongtai',
        //配置某些路由激活菜单高亮
        group: [
            '/advanced-router/mutative-detail'
        ],
        children: []
    }, {
        id: 17,
        label: "参数路由",
        path: 'argument-page',
        component: 'views/advanced-router/argument-page',
        icon: 'icon-canshu',
        group: ['/advanced-router/argument-detail'],
        children: []
    }, ]
}, {
    id: 8,
    label: "综合错误",
    path: '/logs',
    icon: 'icon-cuowu',
    meta: {},
    children: [{
        id: 15,
        label: "错误页面",
        path: 'page',
        component: 'page/logs/page',
        icon: 'icon-cuowutishitubiao',
        children: []
    }, {
        id: 15,
        label: "错误日志",
        path: 'error',
        component: 'page/logs/error',
        icon: 'icon-cuowutishitubiao',
        children: []
    }]
}, {
    id: 23,
    label: "环境变量",
    icon: 'icon-dongtai',
    path: '/dev',
    component: 'views/dev/index',
    meta: {

    },
    children: []
}, {
    id: 25,
    label: "json树形",
    icon: 'icon-dongtai',
    path: '/json-tree',
    component: 'views/json-tree/index',
    meta: {},
    children: []
}, {
    id: 24,
    label: "数据持久化",
    path: `/store`,
    component: 'views/store/index',
    icon: 'icon-huanyingye',
    meta: {},
    children: []
}, {
    id: 25,
    label: "剪切板",
    path: `/clipboard`,
    component: 'views/clipboard/index',
    icon: 'icon-canshu',
    meta: {},
    children: []
}, {
    id: 25,
    label: "标签页操作",
    path: `/tags`,
    component: 'views/tags/index',
    icon: 'icon-canshu',
    meta: {},
    children: []
}, {
    id: 26,
    label: "灰度模式",
    path: `/gray`,
    component: 'views/gray/index',
    icon: 'icon-shujuzhanshi2',
    meta: {},
    children: []
}, {
    id: 9,
    label: "系统管理",
    path: '/admin',
        icon: 'icon-liuliangyunpingtaitubiao08',
    children: [{
            id: 20,
            label: "用户管理",
            path: 'user',
            component: 'views/admin/user/index',
            icon: 'icon-yonghuguanli',
            children: []
        }, {
            id: 21,
            label: "角色管理",
            path: 'role',
            component: 'views/admin/role/index',
            icon: 'icon-jiaoseguanli',
            children: []
        },
        {
            id: 22,
            label: "菜单管理",
            path: 'menu',
            component: 'views/admin/menu/index',
            icon: 'icon-caidanguanli',
            children: []
        }
    ]
}]
export default ({ mock }) => {                                  //不理解{mock}见次目录下的index.js
    if (!mock) return;
    let menu = [...first, ...second];
    Mock.mock('/user/getMenu', 'get', (res) => {                 //res（options）是指向本次请求的 Ajax 选项集，含有 url、type 和 body 三个属性，参见 XMLHttpRequest 规范。
        let body = JSON.parse(res.body);
        return {
            data: menu//menu[body.type]
        }
    })
}