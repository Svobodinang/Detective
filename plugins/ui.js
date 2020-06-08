import DButton from '@/components/ui/DButton.vue'
import Vue from 'vue'

const components = { DButton }
Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
