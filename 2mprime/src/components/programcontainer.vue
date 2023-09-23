<template>
    <div class="programcontainer w-40 ml-8 mt-12 h-86 bg-black px-1 py-2 mr-8 relative ">
        <div class="image_movie w-full h-4/6  rounded-md   ">
            <img class="w-full h-full object-contain object-top  " :src="posterUrl" alt="" />
        </div>
        <div class="movie_information  w-full h-17 mt-5 flex mb-3  ">
            <div class="movie_title  w-full  text-white  ">
                <h2 class="text-xs ">{{ title }}</h2>
            </div>
            <div  class="heart_icon ml-auto">
                <svg @click="togglefavorite" :class=" {'favorite': isfavorito}" xmlns="http://www.w3.org/2000/svg" :fill="'white'" 
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            </div>       
        </div>
        <div class="movie_genre  ">
                <span class=" movie_genre_text w-full text-slate-500 font-light text-xs absolute bottom-0 mb-3 ">{{ genres.join(', ') }}</span>
        </div>  
        <div class="time flex gap-2 mb-6 " >
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-white text-xs mb-2">{{ time }}</span>
        </div>             
    </div>
</template>

<script>
export default {
    props: ['title', 'posterUrl','genres','time','isfavorite'],
    name: "programcontainer",
    methods: {
       togglefavorite() {
        this.isfavorito = !this.isfavorito
        this.$emit('togglefavorite', this.isfavorito)
       }
    },
    data () {
        return {
            isfavorito : false,
        }
    }
    }
</script>

<style>
.favorite {
    fill: red;
}
</style>