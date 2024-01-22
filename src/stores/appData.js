import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useAppDataStore = defineStore('appData', () => {
  // Variable and Function for toggling CollapseDiv component
  const showInfo = ref(false)
  const toggleShowInfo = () => {
    showInfo.value = !showInfo.value
  }
  // Variable and Function for toggling Header component
  const showHeader = ref(false)
  const toggleShowHeader = () => {
    showHeader.value = !showHeader.value
  }

  return { showInfo, toggleShowInfo, showHeader, toggleShowHeader}
})