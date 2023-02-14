import { ref } from 'vue'
import type pageDialog from '@/components/page-dialog/page-dialog.vue'

export default function usePageDialog() {
  const dialogRef = ref<InstanceType<typeof pageDialog>>()
  // 新增弹窗
  function addPage() {
    dialogRef.value!.setDialogVisible()
  }

  // 编辑弹窗
  function editPage(itemData: any) {
    dialogRef.value!.setDialogVisible(false, itemData)
  }

  return {
    dialogRef,
    addPage,
    editPage
  }
}
