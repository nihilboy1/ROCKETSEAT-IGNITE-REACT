import { useSession, signIn } from 'next-auth/react'
import S from './styles.module.scss'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'

interface SubscrbeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscrbeButtonProps) {
  const { data: session } = useSession()

  async function handleSubscrbe() {
    if (!session) {
      signIn('github')
      return
    }

    try {
      const res = await api.post('/subscribe')

      const { sessionId } = res.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({sessionId})
    } catch(error) {
      alert(error.message)
    }
  }
  return (
    <button
      onClick={handleSubscrbe}
      type="button"
      className={S.subscribeButton}
    >
      Subscribe Now
    </button>
  )
}
