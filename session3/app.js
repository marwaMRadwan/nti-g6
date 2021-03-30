const dataWrap = document.querySelector('#data')

const createMyTable = (images) => {

}
const getApiData = async(cb) =>{
    try{
        let data = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
        let images = await data.json()
        //createMyTable(images)
        cb(images, false)
    }
    catch(e){
        cb(false, 'error loading data')
    }
}

getApiData((data, error)=>{
    if(error){}
    else {createMyTable(data)}
})




