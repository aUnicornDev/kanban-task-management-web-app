<script setup>
import BoardList from './components/BoardList.vue';
import Sidebar from './components/Sidebar.vue';
import ColumnList from './components/ColumnList.vue';

</script>

<template>
  
    <!-- <BoardList/> -->
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

<img src="./assets/logo-dark.svg" alt="" class="navbar__logo">
<header class="header">
  <h1>Platform Launch</h1>
  <button class="btn header__new-task">+ Add New Task</button>
  <span class="header__options"><svg width="5" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><circle cx="2.308" cy="2.308" r="2.308"/><circle cx="2.308" cy="10" r="2.308"/><circle cx="2.308" cy="17.692" r="2.308"/></g></svg></span>
</header>
<Sidebar/>
<main class="main">
  <ColumnList/>
  <section class="main__column">
    <article class="main__column--blank">
      + New Column
    </article>
  </section>
</main>
</template>
// <script>
// export default {
//    data(){
//         return{
//             boards:[]
//         }
//     },
//     created(){
//         fetch('http://localhost:8000/v2/boards',{
//             method:'GET',
//             mode:'cors'
//         })
//         .then(data=>{
//             return data.json()
//         })
//         .then(
//             response=>{
//                 this.boards = response
//                 console.log(this.boards)
//             }
//         )
//     }
// }
// </script>

