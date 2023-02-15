import useLoginStore from '@/store/login/login'

export default function usePermissions(pageName: string) {
  const logginStore = useLoginStore()
  const { permissions } = logginStore
  const isCreate = permissions.find((item: any) => item.includes(`${pageName}:create`))
  const isDelete = permissions.find((item: any) => item.includes(`${pageName}:delete`))
  const isUpdate = permissions.find((item: any) => item.includes(`${pageName}:update`))
  const isSearch = permissions.find((item: any) => item.includes(`${pageName}:query`))

  return { isCreate, isDelete, isUpdate, isSearch }
}
