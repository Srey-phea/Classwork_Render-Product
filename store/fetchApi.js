const base_url = "https://fakestoreapi.com/"
export async function getData(endpoint){
  try{
    const data = await fetch(`${base_url}${endpoint}`);
    const res = await data.json();
    return res;
  }catch(error){
    console.log("error", error)
  }
}