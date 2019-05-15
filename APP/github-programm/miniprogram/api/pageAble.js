const wrap=()=>{
    //get().then();
    return new Promise((resolve,reject)=>{
        promise.then(({headers,data})=>{
            const links = parseLinks(headers.Link);
            const nextUrl=links['rel'="next"];
            if(nextUrl){
                return resolve({
                    data,
                    next:()=>wrap(new Promise((resolve,reject)=>{
                        //发请求
                        wx.request({
                            url: 'https://api.github.com/events',
                            success: res => {
                              resolve({
                                
                                data: res.data,
                                headers:res.headers,
                       
                              });
                            },
                            fail: err => {
                              reject(err);
                            }
                          })
                    }))

                    
                })
            }
            return resolve({
                data,
                next:null
            })
        })
    })
}
module.exports={
    wrap
}