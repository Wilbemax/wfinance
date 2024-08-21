import { useAppSelector } from '../../../6_shared/model/hooks'

export const useSession = () => useAppSelector((state) => state.session)
