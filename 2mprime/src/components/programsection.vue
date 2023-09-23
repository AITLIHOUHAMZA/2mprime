<template>
<div class="programshows ">
<div class="program_container">
    <div class="category_container">
      <button @click="showFavoritesOnly = false; activeGenre =  null" :class="{active: isactive}" >All</button>
      <button @click="showFavoritesOnly = !showFavoritesOnly" :class="{ active: showFavoritesOnly }">My list</button>
      <button @click="setActiveGenre('Maroccaine')" class="maroccaine" :class="{ active: activeGenre === 'Maroccaine' }" >Maroccaine</button>
      <button @click="setActiveGenre('Drama')" class="Drama" :class="{ active: activeGenre === 'Drama' }">Drama</button>
      <button @click="setActiveGenre('Action')"  class="Action" :class="{ active: activeGenre === 'Action' }">Action</button>
      <button @click="setActiveGenre('Thriller')"  class="Thriller" :class="{ active: activeGenre === 'Thriller' }">Thriller</button>
      <button @click="setActiveGenre('Romance')"  class="Romance" :class="{ active: activeGenre === 'Romance' }">Romance</button>
      <button @click="setActiveGenre('Animation')"  class="Animation" :class="{ active: activeGenre === 'Animation' }">Animation</button>
   </div>
 </div>
 <div class="grid grid-cols-6 pb-9  ">
 <programcontainer v-for="movie in filteredMovies" :key="movie.id"  
 :title = "movie.title" :posterUrl = "movie.posterUrl" 
 :genres = "movie.genres" :time ="movie.runtime" :isfavorite="movie.isfavorite" 
 @togglefavorite = "receiveemit(movie)"/>
 </div>
</div>
 
</template>

<script>
import programcontainer from './programcontainer.vue';
import jsonmovies from '../movies.json';
export default {
    name: 'programsection',
    components: {
        programcontainer
    },
    methods: {
        receiveemit(movie) {
           movie.isfavorite = !movie.isfavorite
        },  
        setActiveGenre(genre) {
        this.activeGenre = genre;
        },
    },
    data () {
        return {
            movies : jsonmovies,
            showFavoritesOnly: false,
            activeGenre: '', 
        };
    },
    computed: {
    filteredMovies() {
    if (this.showFavoritesOnly) {
      // Show only favorite movies
      return this.movies.filter(movie => movie.isfavorite && (this.activeGenre ? movie.genres.includes(this.activeGenre) : true))
    } else if (this.activeGenre) {
      // Show all movies of the selected genre
      return this.movies.filter(movie => movie.genres.includes(this.activeGenre));
    } else {
      // Show all movies when no genre is selected
      return this.movies;
    }
  }
}
}


</script>

<style>
.programshows {
    background-color: #111C30;
    width: 100vw;
    min-height: 70%;
}


.category_container {
    margin-top: 8.75rem;
    display: flex;
    gap: 2rem;
}
.category_container button {
    min-width: 7rem ;
    height: 2rem;
    color: white;
    font-size: smaller;
    margin-left: 2rem;
    border-radius: 2rem ;
    border: 1px solid #fff;
}
.category_container button:hover {
    background-color: #52D8FA;
}
.mylist_text {
    color: #fff;
}
.category_container button.active{
    background-color: #52D8FA;
}


</style>