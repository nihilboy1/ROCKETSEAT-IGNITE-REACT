import { useSession, signIn } from 'next-auth/react'
import S from './styles.module.scss'

interface SubscrbeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscrbeButtonProps) {
  const { data: session } = useSession()



  function handleSubscrbe(){
    if (!session){
      signIn("github")
      return
    }

    
  }
  return (
    <button onClick={handleSubscrbe} type="button" className={S.subscribeButton}>
      Subscribe Now
    </button>
  )
}
