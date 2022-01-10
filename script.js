



function loader(){
  let fafilm = document.querySelector('.loader-container')



  //api

function getmovies(){
  let API = 'api_key=fb1f301ce530a9bb513825b9f44b9df1';
  let url = 'https://api.themoviedb.org/3';
  let api_url = url + '/discover/movie?sort_by=popularity.desc&' + API;
  let img_url = 'https://image.tmdb.org/t/p/w500';

  
  fetch(api_url,{
      method : 'GET'
  })
  
  .then(function(response){
    if(response.status !== 200){
      throw response.status;
    }
      
    return response.json()
  })
  
  .then(function(responseData){
  
      let parent_containter = document.getElementById('parent-container')
      
      responseData.results.forEach(item => {
          let movie_container = document.createElement('div');
  
  
          let overview_container = document.createElement('div');
          overview_container.setAttribute('class','overview-container');
          movie_container.appendChild(overview_container);
          overview_container.setAttribute('id','overview-container-id');
  
          movie_container.setAttribute('class','movie-container');
          movie_container.setAttribute('id','movie-cont-id')
          parent_containter.appendChild(movie_container);
  
  
          let overview_paragraph = document.createElement('p');
          overview_paragraph.setAttribute('class','overview-text');
          overview_paragraph.innerText = item['overview']
          overview_container.appendChild(overview_paragraph);
  
          let movie_img = document.createElement('img');
          movie_container.appendChild(movie_img);
          movie_img.src = img_url + item['backdrop_path']
          movie_img.setAttribute('class','img')
          
          let info_container = document.createElement('div');
          info_container.setAttribute('class','info-container')
          movie_container.appendChild(info_container);
  
          let title_paragraph = document.createElement('p');
          title_paragraph.innerText = item['original_title']
          info_container.appendChild(title_paragraph);
  
  
          let rating_paragraph = document.createElement('p');
          rating_paragraph.innerText = item['vote_average'] + ' ' +'IMDB'
          rating_paragraph.setAttribute('class','title')
          info_container.appendChild(rating_paragraph);
      })
  
  })
  
  .catch(function(error){
      if(error == 404){
        document.querySelector('.page-not-found').style.display = 'block'
      }else{
        document.querySelector('.page-not-found').innerHTML = 'Server Error'
      }
  });
  }
  
  
  
  getmovies();


  window.addEventListener('load', () => {
    fafilm.style.display = 'none'
  })

}
loader()