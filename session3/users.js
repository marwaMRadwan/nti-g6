const userWrapper = document.querySelector('#userData')
const getUsersData = async(cb) =>{
    try{        
        let data = await(await fetch('https://jsonplaceholder.typicode.com/users')).json()
        cb(false, data)
    }
    catch(e){
        cb(e, false)
    }
}
const createMyElement = (parent, ele,classes ='', txt = '') =>{
    element = document.createElement(ele)
    parent.appendChild(element)
    if(classes!='') element.classList = classes
    if(txt!='') element.innerText = txt
    return element
}

const createTable = () =>{
    getUsersData((err, users)=>{
        if(err){
            createMyElement(userWrapper, 'div', 'alert alert-danger', err)
        }
        else{
            theads = ['id', 'name','username','email', 'address','phone','website','company' ]
            addressHeads = ['street', 'suite', 'city', 'zipcode']
            companyHeads = ['name', 'catchPhrase', 'bs']

            theads1 = ['id', 'name','username','email', 
            {address:['street', 'suite', 'city', 'zipcode']},'phone','website',{company:['name', 'catchPhrase', 'bs']} ]
            heads = {
                'id':[],
                'name':[],
                'username':[],
                'email':[], 
                'address':['street', 'suite', 'city', 'zipcode'],
                'phone':[],
                'website':[],
                'company' :['name', 'catchPhrase', 'bs']
            }
            keys = Object.keys(heads)
            users.forEach(user => {
                tr= createMyElement(userWrapper, 'tr','','')
                theads1.forEach(h=>{
                    if(typeof h=='string') createMyElement(tr,'td', '',user[h])
                    else{
                    p = Object.keys(h)
                    z= Object.values(h)
                       z[0].forEach(x=>{
                           createMyElement(tr, 'td', '', user[p[0]][x])
                       }) 
                    }
                })
                // keys.forEach(k=>{
                //     if(heads[k].length==0) createMyElement(tr, 'td', '', user[k])
                //     else{
                //         heads[k].forEach(x=>{
                //             createMyElement(tr,'td','',user[k][x])
                //         })
                //     }
                // })
                // createMyElement(tr, 'td','',user.id)
                // createMyElement(tr, 'td','',user.name)
                // createMyElement(tr, 'td','',user.username)
                // createMyElement(tr, 'td','',user.email)
                // createMyElement(tr, 'td','',user.address.street)
                // createMyElement(tr, 'td','',user.address.suite)
                // createMyElement(tr, 'td','',user.address.city)
                // createMyElement(tr, 'td','',user.address.zipcode)
                // createMyElement(tr, 'td','',user.phone)
                // createMyElement(tr, 'td','',user.website)
                // createMyElement(tr, 'td','',user.company.name)
                // createMyElement(tr, 'td','',user.company.catchPhrase)
                // createMyElement(tr, 'td','',user.company.bs)                
                // theads.forEach(h=>{
                //     if(h=='address'){
                //         addressHeads.forEach(a=>{
                //             createMyElement(tr,'td','', user.address[a])
                //         })
                //     }
                //     else if(h=='company'){
                //         companyHeads.forEach(a=>{
                //             createMyElement(tr,'td','', user.company[a])
                //         })
                //     }
                //     else createMyElement(tr, 'td','',user[h])
                // })
            });
        }
    })
}

createTable()