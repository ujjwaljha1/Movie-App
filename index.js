

const URL = "https://movies-app.prakashsakari.repl.co/api/movies";
const getMovies = async(URL)=>{
    try{
        const data=await axios.get(url)
        console.log(data)
    }catch(err){
        
    }
}