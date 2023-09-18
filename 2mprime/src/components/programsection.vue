<template>
<div class="programshows ">
<div class="program_container">
    <div class="category_container">
      <button class="mylist">My list</button>
      <button class="Drama">Drama</button>
      <button class="Action">Action</button>
      <button class="Documentary">Documentary</button>
   </div>
 </div>
 <div class="grid grid-cols-6   ">
 <programcontainer v-for="movie in movies" :key="movie.id"  :title = "movie.title" :posterUrl = "movie.posterUrl" :genres = "movie.genres" :time ="movie.runtime" />
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
    data () {
        return {
            movies : jsonmovies
        };
    }

}
</script>

<style>
.programshows {
    background-color: #111C30;
    width: 100vw;
    min-height: 90%;
}


.category_container {
    margin-top: 8rem;
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


</style>