<template>
  <div class="TodoList_Wrapper">
    <ul class="TodoList_ListBox">
      <li class="TodoList_List" v-for="(item,index) in todoItems" v-bind:key="item.item">
        <i class="TodoList_CheckBtn fas fa-check" @click="checkItem(item,index)" v-bind:class="{TodoList_CheckBtnCom: item.completed}"></i>
        <span v-bind:class="{TodoList_TextCom: item.completed}">{{item.item}}</span>
        <span class="TodoList_RemoveBtnBox" @click="removeItem(item,index)">
          <i class="TodoList_RemoveBtn fas fa-minus fa-2x"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'TodoList',
  data() {
    return {
      todoItems: []
    }
  },
  created() {
    if(localStorage.length > 0) {
      for (let i=0;i<localStorage.length;i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server')
        // localStorage.getItem(localStorage.ket(i));
        // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
      }
    }
  },
  methods: {
    removeItem(item,index) {
      localStorage.removeItem(item);
      this.todoItems.splice(index,1);
    },
     /* eslint-disable no-unused-vars */
    checkItem(item,index) {
      item.completed = !item.completed;
      localStorage.removeItem(item.item);
      localStorage.setItem(item.item,JSON.stringify(item));
    }
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