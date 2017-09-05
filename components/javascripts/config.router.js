var app=angular.module('mainRouter',['ui.router','lazyloadConfig']);


app.config(function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider,Modules_Config) {
    $ocLazyLoadProvider.config({
        debug:true,
        events:false,
        modules:Modules_Config
    });
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        .state("knowledgeList",{
            url:"/knowledgeRepo/knowledgeList.html",
            templateUrl:"knowledgeRepo/knowledgeList.html",
            resolve:{
                deps:function ($ocLazyLoad) {
                    return $ocLazyLoad.load("jqGrid");
                }
            }
        })
        .state("userList",{
            url:"/user/userList.html",
            templateUrl:"user/userList.html",
            resolve:{
                deps:function ($ocLazyLoad) {
                    return $ocLazyLoad.load(["jqGrid"]);
                }
            }
        })
        .state("search",{
            url:"/search.html",
            templateUrl:"search.html",
            resolve:{
                deps:function ($ocLazyLoad) {
                    return $ocLazyLoad.load(["toastr","res_search"]);
                }
            }
        })
        .state("knowledgeDetail",{
            url:"/knowledgeDetail.html",
            templateUrl:"knowledgeDetail.html",
            resolve:{
                deps:function ($ocLazyLoad) {
                    return $ocLazyLoad.load(["toastr","res_knowledgeDetail"])
                }
            }
        })
        .state("userAdd",{
            url:"/user/userAdd.html",
            templateUrl:"user/userAdd.html",
            resolve:{
                }
            }

        )

});