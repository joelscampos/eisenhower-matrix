<template>
  <div>
    <div class="card-group">
      <div class="card border-success">
        <div class="card-body">
          <h2 class="card-title text-success">Do First</h2>
          <form class="form-inline">
            <input type="text" class="form-control mr-2 text-success" placeholder="What do you need to do?"><br>
            <button class="btn btn-outline-success">Add</button>
          </form>
          <div class="card-group pt-2">
            <div class="card">
              <div class="card-body">
                <div class="d-flex bg-light">
                  <form class="form-inline  w-100">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="customCheck1">
                      <label for="customCheck1" class="custom-control-label">teste</label>
                    </div>
                  </form>
                  <button type="button" class="btn btn-secondary btn-sm ml-2 float-right">Delete</button>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck2">
                  <label for="customCheck2" class="custom-control-label">teste</label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck3">
                  <label for="customCheck3" class="custom-control-label">teste</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card border-info">
        <div class="card-body text-info">
          <h2 class="card-title">Schedule</h2>
          <form class="form-inline">
            <input type="text" class="form-control mr-2 text-info" placeholder="What do you need to do?"><br>
            <button class="btn btn-outline-info">Add</button>
          </form>
        </div>
      </div>
    </div>
    <div class="card-group">
      <div class="card border-secondary text-secondary">
        <div class="card-body">
          <h2 class="card-title">Delegate</h2>
          <form class="form-inline">
            <input type="text" class="form-control mr-2 text-secondary" placeholder="What do you need to do?"><br>
            <button class="btn btn-outline-secondary">Add</button>
          </form>
        </div>
      </div>
      <div class="card border-danger">
        <div class="card-body">
          <h2 class="card-title text-danger">Don't Do</h2>
          <form class="form-inline">
            <input type="text" class="form-control mr-2 text-danger" placeholder="What do you need to do?" v-model="newTask"><br>
            <button class="btn btn-outline-danger" @click="addNewTask('DontDo')">Add</button>
          </form>
          <div class="card-group pt-2">
            <div class="card">
              <div class="card-body">
                <div
                  is="task-item"
                  v-for="(task) in tasks"
                  v-bind:key="task.id"
                  v-bind:title="task.title"
                  v-bind:quadrant="task.quadrant"
                  @remove="removeTask(task.id)"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Task from '@/components/Task.vue';
export default {
  components: {
    'task-item': Task,
  },
  data(){
    return {
      newTask: '',
      lastTaskId: 2,
      tasks: [
        {id: 1,
        title: "Task 1",
        quadrant: "DoFirst",
        },
        {id: 2,
        title: "Task 2",
        quadrant: "DontDo",
        },
      ],
    };
  },
  methods: {
    addNewTask(quadrant) {
      this.tasks.push({
        id: ++this.lastTaskId,
        title: this.newTask,
        quadrant: quadrant,
      });
      this.newTask = '';
    },
    removeTask(id) {
      let idTask = this.tasks.findIndex(element => element.id === id);
      this.tasks.splice(idTask, 1);
    },
  },
}
</script>

<style>

</style>
