export const exerciseOptions={

        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'f94669d203msh3c56539cd9ab988p15ae58jsndc7275b6e97b',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
}

export const fetchData= async(url,options)=>{
    const response=await fetch(url,options);
    const data= await response.json();
    return data;
}


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};
