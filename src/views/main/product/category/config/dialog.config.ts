import type { IDialogConfig } from '@/components/page-dialog/type'

const dialogConfig: IDialogConfig = {
  pageName: 'category',
  header: {
    title: '分类'
  },
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '分类名称',
      placeholder: '请输入分类名称'
    }
  ]
}

export default dialogConfig
