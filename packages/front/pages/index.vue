<template>
  <div class="container">
    <div>
      <div style="display: flex; width: 600px; padding: 20px;">
        <el-input v-model="form.contents" />
        <el-button type="primary" @click="addTodo">登録</el-button>
      </div>
      <div style="width: 800px">
        <h1>TODOリスト</h1>
        <div
          v-for="(todo, index) of todos"
          :key="index"
          style="display:flex; align-items: center; width: 100%;padding: 10px;border-bottom: 1px solid lightgray"
        >
          <div style="flex-basis: 80px">
            {{ todo.id }}
          </div>
          <div style="flex-basis: 100%">
            <el-input
              v-if="rowForm.id === todo.id"
              v-model="rowForm.contents"
            />
            <span v-else>
              {{ todo.contents }}
            </span>
          </div>
          <div style="flex-basis: 250px">
            <el-button
              v-if="rowForm.id === todo.id"
              type="primary"
              @click="updateTodo()"
            >
              更新
            </el-button>
            <el-button v-else type="primary" @click="editTodo(todo)">
              編集
            </el-button>
            <el-button type="danger" @click="deleteTodo(todo.id)">
              削除
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      form: {
        contents: null
      },
      rowForm: {
        id: null,
        contents: null
      },
      todos: []
    };
  },
  mounted() {
    this.getTodos();
  },
  methods: {
    async getTodos() {
      const result = await this.$axios.get("http://localhost:3000/api/todos");
      if (result.status === 200) {
        this.todos = result.data;
      }
    },
    async addTodo() {
      await this.$axios.post("http://localhost:3000/api/todos", this.form);
      this.getTodos();
    },
    editTodo(todo: { id: number; contents: string }) {
      Object.assign(this.rowForm, todo);
    },
    async updateTodo() {
      await this.$axios.put(
        "http://localhost:3000/api/todos/" + this.rowForm.id,
        this.rowForm
      );
      this.rowForm.id = null;
      this.rowForm.contents = null;
      this.getTodos();
    },
    async deleteTodo(id: number) {
      await this.$axios.delete("http://localhost:3000/api/todos/" + id);
      this.getTodos();
    }
  }
});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
