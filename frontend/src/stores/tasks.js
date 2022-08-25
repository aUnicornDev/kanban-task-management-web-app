import { defineStore } from 'pinia'
// Import axios to make HTTP requests
export const useTasksStore = defineStore("tasks", {
    state: () => ({
        tasks: [],
    }),
    getters: {
      getTasks(state){
          return state.tasks
        }
      },
      actions: {
      fetchTasks(boardSysId) {
        try {
          fetch('http://localhost:8000/v2/tasks?boardSysId='+boardSysId,{
            method:'GET',
            mode:'cors'
          })
          .then(data=>{
            return data.json()
          })
          .then(
            response=>{
              this.tasks = response
              // console.log(this.tasks)
            }
            )
            
          }
          catch (error) {
            alert(error)
            console.log(error)
          }
        }
     },
})