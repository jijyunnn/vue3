<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { useApi } from '@/stores/useApi'
import { useStore } from '@/stores/useStore'

const storeTest = ref(0)
const watchValue = ref(useCounterStore().count)

const onClick = () => {
  useCounterStore().increment()
  storeTest.value = useCounterStore().doubleCount

  objTest.value.c.a = '값 변경'
}

const objTest = ref({
  a: 'a',
  b: 'b',
  c: {
    a: 'a',
    b: 'b'
  }
})

watch(
  () => useCounterStore().count,
  (value) => {
    watchValue.value = value
    // console.log('watchValue의 값이 변했습니다')
  }
)

watch(
  () => objTest.value,
  (v) => {
    console.log('>>>>>>>', v)
  },
  { deep: true }
)

const computeTest = computed(() => {
  //deep 처리가 안되서 콘솔 안찍힘
  console.log('--------', objTest.value)
  return objTest.value
})

const test = objTest.value

const data = ref(null)
const { fetchData } = useApi()

const handleFetchData = async () => {
  await fetchData()
  data.value = useStore().data
}
onMounted(() => {
  handleFetchData()
})
</script>
<template>
  <div>
    <h2>↓↓↓↓클릭하면 값이 변함↓↓↓↓</h2>
    <h2 @click="onClick">storeTest값: {{ storeTest }}</h2>
    <h2>watchValue입니다: {{ watchValue }}</h2>
    <h2>objTest입니다: {{ test }}</h2>
    <h2>computeTest입니다: {{ computeTest }}</h2>

    <hr />
    <div>
      <ul v-if="data">
        <li v-for="item in data" :key="item.id">
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>
