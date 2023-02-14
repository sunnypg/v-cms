import type { IDialogConfig } from '@/components/page-dialog/type'

const dialogConfig: IDialogConfig = {
  pageName: 'menu',
  header: {
    title: '菜单'
  },
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '菜单名称',
      placeholder: '请输入部门名称'
    },
    {
      type: 'input',
      prop: 'leader',
      label: '部门主管',
      placeholder: '请输入部门主管'
    },
    {
      type: 'select',
      prop: 'parentId',
      label: '上级部门',
      placeholder: '请选择上级部门',
      options: []
    }
  ]
}

export default dialogConfig
