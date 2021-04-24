<template>
  <div
    class="bg-white shadow rounded px-3 pt-3 pb-5 border-2"
    :class="'border-' + task.color.toLowerCase() + '-400'"
  >
    <div class="flex justify-between">
      <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">
        {{ task.title }}
      </p>
    </div>
    <div class="flex mt-4 justify-between items-center">
      <p>Due-date:</p>
      <span class="text-sm text-gray-600">
        {{
        moment(task.date).format("DD.MM.YYYY")
      }}</span>
      <badge v-if="task.priority" :color="badgeColor"
        ><span class="capitalize">{{
          task.priority.toLowerCase()
        }}</span></badge
      >
    </div>
    <div class="col text-right">
        <button class="bg-red-400 mx-2 px-4 mt-4 mr-1 py-1 rounded" @click="deleteTask($_id)">
         Aarghh, whatever, delete it!
        </button>
      </div>
  </div>
</template>
<script>
import Badge from "./Badge.vue";
import moment from "moment";
import axios from "axios";

export default {
  components: {
    Badge,
  },
  props: {
    task: {
      priority: Object,
      default: () => ({}),
    },
  },
  computed: {
    badgeColor() {
      const mappings = {
        HIGH: "red",
        MEDIUM: "yellow",
        LOW: "green",
        default: "teal",
      };
      return mappings[this.task.priority] || mappings.default;
    },
  },
  methods: {
    moment,
    async deleteTask($_id) {
      await axios({
        url: "https://greatsuccess-todo.herokuapp.com/api/deleteTask/${_id}",
        method: "DELETE",
        // data: this.form,
      });
      this.$emit("task-deleted");
    },
  },
};
</script>
