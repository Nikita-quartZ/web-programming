<script setup lang="ts">
import { ref, watch } from 'vue'
import { v4 as uuidv4 } from 'uuid';

interface Item {
  name: string
  count: number
  id: string
}

const timer = ref()

const items = ref<Item[]>([])

const currentItem = ref()

const form = ref<Item>({
  name: '',
  count: '',
  id: ''
})

const currentId = ref<number>(0)

// Methods
const createItem = () => {
  if (!form.value.name || !form.value.count) return
  items.value.push({
    ...form.value,
    id: uuidv4()
  })
  form.value = {
    name: '',
    count: '',
    id: ''
  }
}

const startTimer = () => {
  currentItem.value = items.value[currentId.value]
  timer.value = setTimeout(() => {
    currentId.value += 1
    if (currentId.value === items.value.length) currentId.value = 0
    startTimer()
  }, currentItem.value.count);
}

watch(() => items.value.length, () => {
  if (items.value.length === 1) currentItem.value = items.value[0]
  else if (items.value.length) {
    clearTimeout(timer.value)
    startTimer()
  }
})
</script>

<template>
  <div class="control">
    <div class="form-block">
      <form @submit.prevent="createItem" class="form">
        <input placeholder="Ссылка" type="text" v-model="form.name" class="form__input">
        <input placeholder="Время (в ms)" type="number" v-model="form.count" class="form__input">
        <button class="form__btn">
          Сохранить
        </button>
        <span>
          Количество элементов: {{ items.length }}
        </span>
      </form>

      <div class="url" v-if="currentItem">
        <a :href="currentItem.name">
          {{ currentItem.name }}
        </a>
        {{ currentItem.count }} ms
      </div>
      <iframe v-if="currentItem" :src="currentItem.name" frameborder="0"></iframe>
    </div>
  </div>
</template>

<style scoped>
.control {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin-bottom: 20px;
}

.form-block {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
}

.form__input {
  margin-bottom: 8px;
  height: 24px;
}

.form__btn {
  height: 30px;
}

.url {
  display: flex;
  justify-content: space-between;
}
</style>
