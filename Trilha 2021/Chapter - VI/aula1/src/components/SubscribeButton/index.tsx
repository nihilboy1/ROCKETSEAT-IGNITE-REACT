import { useSession, signIn } from 'next-auth/react'
import S from './styles.module.scss'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import { useRouter } from 'next/router'


export function SubscribeButton() {
  const { data: session } = useSession()
  const router = useRouter()

  async function handleSubscrbe() {
    if (!session) {
      signIn('github')
      return
    }

    if (session.activeSubscription){
      router.push("/posts")
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
