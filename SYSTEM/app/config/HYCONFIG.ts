//本地
// export const urlDomain:string = "/mockData/";
// export const urlDomainModule:string = "/mockData/";

//github
// export const urlDomain:string = "/system/mockData/";
// export const urlDomainModule:string = "/system/mockData/";
// 
// 
// 
export const HYMENUS:any = [
    {
        "title": "个人中心",
        "Submenus": [
            {
                "name": "个人信息",
                "iconFont": "user icon",
                "url": "/hy/personal/index"
            },
            {
                "name": "我的搜藏",
                "iconFont": "folder icon",
                "url": "/hy/personal/collections"
            },
            {
                "name": "上传文件",
                "iconFont": "cloud upload icon",
                "url": "/hy/personal/upload"
            }
        ]
    },{
        "title": "人事中心",
        "Submenus": [
            {
                "name": "人事管理",
                "iconFont": "users icon",
                "url": "/hy/personnel/index"
            }
        ]
    },{
        "title": "资源平台",
        "Submenus": [
            {
                "name": "资源中心",
                "iconFont": "folder open icon",
                "url": "/hy/resource/index"
            },{
                "name": "我的资源",
                "iconFont": "folder open outline icon",
                "url": "/hy/resource/myresource"
            }
        ]
    },{
        "title": "审核平台",
        "Submenus": [
            {
                "name": "资源审核",
                "iconFont": "bullseye icon",
                "url": "/hy/reviewed/index"
            }
        ]
    },{
        "title": "资产管理",
        "Submenus": [
            {
                "name": "资产首页",
                "iconFont": "money icon",
                "url": "/hy/assets/index"
            },
            {
                "name": "供应商管理",
                "iconFont": "archive icon",
                "url": "/hy/assets/supplier"
            }
        ]
    },{
        "title": "排课模块",
        "Submenus": [
            {
                "name": "排课首页",
                "iconFont": "calendar icon",
                "url": "/hy/shedule/index"
            },
            {
                "name": "排课基础数据",
                "iconFont": "calendar icon",
                "url": "/hy/shedule/basedata"
            }
        ]
    }
];


export const HYURLDOMAIN:string = "http://www.marchezvousblue.cn/";