<template>
  <div class="TodoList_Wrapper">
    <ul class="TodoList_ListBox">
      <li class="TodoList_List" v-for="(item,index) in todoItems" v-bind:key="item.item">
        <i class="TodoList_CheckBtn fas fa-check" @click="checkItem({item:item.item,index:index})" v-bind:class="{TodoList_CheckBtnCom: item.completed}"></i>
        <span v-bind:class="{TodoList_TextCom: item.completed}">{{item.title}}</span>
        <span class="TodoList_RemoveBtnBox" @click="removeItem(item,index)">
          <i class="TodoList_RemoveBtn fas fa-minus fa-2x"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import Constant from '../../../constant'
import {fetchTodoList} from '../../../api/index'
export default {
  name:'TodoList',
  data() {
    return {
      todoItems:[]
    }
  },
  // computed: {
  //   todoItems () {
  //     return this.$store.state.todoItems;
  //   }
  // },
  methods: {
    checked (item) {
      return item ? { TodoList_CheckBtnCom: true } : { TodoList_CheckBtnCom: false };
    },
    removeItem(item) {
      this.$store.commit(Constant.REMOVE_TODO, {
        item: item.todo,
        index: item.index 
      });
    },
    checkItem(item) {
        this.$store.commit(Constant.CHECK_TODO, {
        item: item.todo,
        index: item.index 
      });
    }
  },
  created () {
    // this.$store.commit(Constant.SHOW_TODOITEMS);
   fetchTodoList()
    .then(res => { 
      console.log(res)
      this.todoItems = res.data;
    })
    /* eslint-disable no-undef */
    .catch(e=> {
      console.log(e)
   });

  }
}
</script>

<style>
.TodoList_Wrapper {
  margin: 30px 45px;
}

.TodoList_ListBox {
  list-style: none;
  text-align: left;
  padding: 0px;
}

.TodoList_List {
  display: flex;
  height: 50px;
  line-height: 50px;
  margin: 0.7rem 0;
  padding: 10px;
  /* padding: 0 0.9rem; */
  background: white;
  border-radius: 10px;
}

.TodoList_CheckBtn {
  /* line-height: 45px; */
  color:turquoise;
  margin-right: 10px;
  margin-top: 20px;
}

.TodoList_CheckBtnCom {
  color:lightslategray;
}

.TodoList_TextCom {
  color: #b2bec3;
  text-decoration: line-through;
}

.TodoList_RemoveBtnBox {
  margin-left: auto;
}

.TodoList_RemoveBtn {
  color: #6a89cc;
  margin-top: 10px;
}
</style>