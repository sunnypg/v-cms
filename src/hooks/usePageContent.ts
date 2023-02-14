import { ref } from 'vue'
import type pageContent from '@/components/page-content/page-content.vue'

export default function usePageContent() {
  const contentRef = ref<InstanceType<typeof pageContent>>()

  // 搜索
  function searchClick(searchForm: any) {
    contentRef.value?.getPageList(searchForm)
  }
  // 重置
  function resetClick() {
    contentRef.value?.getPageList()
  }

  return {
    contentRef,
    searchClick,
    resetClick
  }
}
