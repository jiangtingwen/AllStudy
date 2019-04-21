const googleMap = {
    show(){
        console.log('谷歌地图渲染');
    }
}
const baiDuMap = {
    "map.show":"测试",
    show(){
        console.log('百度地图渲染');
    }
    
}
const sosoMap = {
    "map.show":"测试",
    // show (){
    //     console.log('ceshi')
    // }
    
    
}
const gaoDeMap = {
    show(){
        console.log('高德地图渲染');
    }
}
// const randMap = (type)=>{      
    // googleMap.show();
    // baiDuMap.show();
    // if(type==='google'){
    //     googleMap.show();
    // }else if(type==='baidu'){
    //     baiDuMap.show();

    // }else if(type==='gaode'){
    //     gaoDeMap.show();
    // }

// }
const randMap = (map) => {
    //map 检测
    if(map.show && map.show instanceof Function)
    map.show();
}       
//  randMap(gaoDeMap);
//  randMap(baiDuMap);
randMap(sosoMap);
