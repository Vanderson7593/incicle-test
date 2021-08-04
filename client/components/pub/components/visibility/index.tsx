import { EVisibility } from '@constants'
import { Globe, Lock } from '@components'
import { FC } from 'react'

const Visibility: FC<{ visibility: EVisibility }> = ({ visibility }) => {
  return visibility === EVisibility.All ? (
    <>
      <Globe />
      <p className="body2">Público</p>
    </>
  ) : (
    <>
      <Lock />
      <p className="body2">Somente eu</p>
    </>
  )
}

export default Visibility
