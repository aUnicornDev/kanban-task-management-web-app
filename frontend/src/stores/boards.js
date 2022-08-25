import { defineStore } from 'pinia'
// Import axios to make HTTP requests
export const useBoardsStore = defineStore("boards", {
    state: () => ({
        boards: [],
        currentBoardSysId:""
    }),
    getters: {
      getBoards(state){
        // console.log(state.boards)
          return state.boards
        },
        getCurrentBoard(state){
            return state.currentBoardSysId
        }
    },
    actions: {
      fetchBoards() {
        try {
            fetch('http://localhost:8000/v2/boards',{
            method:'GET',
            mode:'cors'
        })
        .then(data=>{
            return data.json()
        })
        .then(
            response=>{
                this.boards = response
                // console.log(this.boards)
            }
        )
          
        }
          catch (error) {
            alert(error)
            console.log(error)
        }
      },
      setBoardSysId(boardSysId){
        this.currentBoardSysId = boardSysId
      },
      getBoard(boardSysId){
        return this.boards.find(board=>board.boardSysId === boardSysId)
      }
    }
})