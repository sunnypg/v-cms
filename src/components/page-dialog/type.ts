export interface IDialogConfig {
  pageName: string
  header: {
    title: string
  }
  labelWidth?: string
  formItems: any[]
}

export interface IDialogProps {
  dialogConfig: IDialogConfig
}
