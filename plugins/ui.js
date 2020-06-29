import dButton from '@/components/ui/dButton.vue'
import Vue from 'vue'

const components = { dButton }
Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
