<template>
  <div class="hero_container  ">
    <nav class="nav_section ">
      <img  class="logo_image" src="2mlogo-removebg-preview.png" alt="">
      <ul class="nav_links_container">
        <li>Home</li>
        <li>Movies</li>
        <li>Shows</li>
        <li>Documentary</li>
      </ul>
      <div class="notification">
        <svg width="23" height="33" viewBox="0 0 42 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.0618 46.3466C15.4809 46.3466 9.90012 45.4603 4.60671 43.6879C2.59474 42.9933 1.06181 41.5801 0.391153 39.7358C-0.303457 37.8915 -0.0639362 35.8556 1.03786 34.0352L3.79234 29.4604C4.36719 28.5023 4.89414 26.5861 4.89414 25.4604V18.5383C4.89414 9.62811 12.1516 2.37064 21.0618 2.37064C29.972 2.37064 37.2295 9.62811 37.2295 18.5383V25.4604C37.2295 26.5622 37.7564 28.5023 38.3313 29.4843L41.0618 34.0352C42.0917 35.7598 42.2834 37.8436 41.5888 39.7358C40.8941 41.628 39.3852 43.0651 37.493 43.6879C32.2235 45.4603 26.6427 46.3466 21.0618 46.3466ZM21.0618 5.96344C14.1396 5.96344 8.48695 11.5922 8.48695 18.5383V25.4604C8.48695 27.2089 7.76839 29.7957 6.88216 31.3047L4.12767 35.8795C3.60073 36.7657 3.45702 37.6999 3.76839 38.4903C4.05582 39.3047 4.77438 39.9274 5.75641 40.2627C15.7684 43.616 26.3792 43.616 36.3912 40.2627C37.2534 39.9753 37.9241 39.3286 38.2355 38.4663C38.5468 37.6041 38.475 36.6699 37.9959 35.8795L35.2415 31.3047C34.3313 29.7478 33.6367 27.1849 33.6367 25.4364V18.5383C33.6367 11.5922 28.0079 5.96344 21.0618 5.96344Z" fill="white"/>
        <path d="M25.5161 6.61077C25.3485 6.61077 25.1808 6.58681 25.0132 6.53891C24.3185 6.34729 23.6479 6.20358 23.0012 6.10777C20.9653 5.8443 19.0012 5.98801 17.1569 6.53891C16.4862 6.75448 15.7677 6.53891 15.3126 6.03592C14.8576 5.53292 14.7138 4.81436 14.9773 4.16766C15.9593 1.65269 18.3545 0 21.085 0C23.8156 0 26.2108 1.62874 27.1928 4.16766C27.4323 4.81436 27.3125 5.53292 26.8575 6.03592C26.4982 6.41915 25.9952 6.61077 25.5161 6.61077Z" fill="white"/>
        <path d="M21.0609 51.8081C18.6896 51.8081 16.3902 50.85 14.7136 49.1734C13.037 47.4967 12.0789 45.1973 12.0789 42.8261H15.6717C15.6717 44.2393 16.2465 45.6285 17.2525 46.6345C18.2585 47.6404 19.6477 48.2153 21.0609 48.2153C24.0309 48.2153 26.4501 45.7961 26.4501 42.8261H30.0429C30.0429 47.7842 26.0189 51.8081 21.0609 51.8081Z" fill="white"/>
        </svg>
      </div>
      <div class="circle_profile">
        <img src="avatar.jpg" alt="">
      </div>
    </nav>
    <div class="hero_image ">
      <img  src="interstellarhero.jpeg" alt="">
    </div>
  

  </div>
</template>


<script>
export default {
  name: 'navsection'
}


</script>

<style>
.hero_container {
  width: 100vw;
  height: 60%;

}
.nav_section {
  height: 15%;
  border-bottom:  0.5 px solid whitesmoke;
  display: flex;
  align-items: center;
  padding: 2rem 0 1.25rem 0;
  background-color: #111C30;
  position: relative;
  z-index: 1;
}
.logo_image{
  width: 7rem;
  height: 7rem;
  
}
.nav_links_container {
  display: flex;
  gap:2.25rem;
  margin-left: 24rem ;
}
.nav_links_container li {
color: aliceblue;
cursor: pointer;
padding-left: 1.25rem;
}
.nav_links_container li:hover {
  color: #4EDAFE;
}
.circle_profile {
width: 3rem;
border-radius: 50%;
overflow: hidden;
margin: 0 3rem 0 auto ;
cursor: pointer;
}
.circle-profile img {
  max-width: 100%; 
  max-height: 100%; 
}
.notification{
  margin-left: 23rem;
  cursor: pointer;
}
.hero_image img {
  width: 100vw;
  height: 600px;
  margin-top: -6rem ;
  
}


</style>