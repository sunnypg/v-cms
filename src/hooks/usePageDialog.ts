import { ref } from 'vue'
import type pageDialog from '@/components/page-dialog/page-dialog.vue'

type callBackFnType = (data?: any) => void

export default function usePageDialog(newCallback?: callBackFnType, editCallback?: callBackFnType) {
  const dialogRef = ref<InstanceType<typeof pageDialog>>()
  // 新增弹窗
  function addPage() {
    dialogRef.value!.setDialogVisible()
    // 编辑的回显
    if (newCallback) newCallback()
  }

  // 编辑弹窗
  function editPage(itemData: any) {
    dialogRef.value!.setDialogVisible(false, itemData)
    // 编辑的回显
    if (editCallback) editCallback(itemData)
  }

  return {
    dialogRef,
    addPage,
    editPage
  }
}
