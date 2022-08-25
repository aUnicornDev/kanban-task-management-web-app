<template>
<section class="main__column" v-for="column in getColumns" :key="column.name">
    <h2 class="column__title">{{column.name}} (4)</h2>
    <article class="card" v-for="task in getTasksInColumn(column.name)" :key="task.taskSysId">
      <h2 class="card__title">{{task.title}}</h2>
      <p class="card__content">{{getCompletedSubTasks(task.taskSysId)}} of {{getSubTasks(task.taskSysId)}} subtasks</p>
    </article>   
  </section>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useBoardsStore } from '../stores/boards';
import { useTasksStore } from '../stores/tasks';
export default {
    computed:{
        ...mapState(useBoardsStore, ['getCurrentBoard']),
        ...mapState(useTasksStore, ['getTasks']),
        getColumns(){
            if(this.getCurrentBoard===""){
                return []
            }
            console.log(this.getBoard(this.getCurrentBoard).columns)
            return this.getBoard(this.getCurrentBoard).columns
        },
    },
    methods:{
        ...mapActions(useBoardsStore, ['getBoard']),
        ...mapActions(useTasksStore, ['getFilteredTasks']),
        getTasksInColumn(columnName){
            return this.getTasks.filter(task=>task.status === columnName)
        },
        getSubTasks(taskSysId){

            return this.getTasks.find(task=>task.taskSysId === taskSysId).subtasks.length
        },
        getCompletedSubTasks(taskSysId){
            let subtasks = this.getTasks.find(task=>task.taskSysId === taskSysId).subtasks;
            let completedSubTasks = 0
            subtasks.forEach(subtask => {
                if(subtask.isCompleted){
                    completedSubTasks++;
                }
                
            });
            return completedSubTasks
        }

    },
    mounted(){
        console.log('bruh')
    }


}
</script>