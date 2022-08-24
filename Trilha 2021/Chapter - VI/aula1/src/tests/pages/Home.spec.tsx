import { render, screen } from '@testing-library/react'
import {stripe} from "../../services/stripe"
import Home from '../../pages'

jest.mock('next/router')
jest.mock('next-auth/react', () => {
  return {
    useSession: () => [null, false]
  }
})

jest.mock("../../services/stripe")

describe('Home page', () => {
  it('should be able to render correctly', () => {
    render(<Home product={{ priceId: 'fake-price-id', amount: 'R$10,00' }} />)

    expect(screen.getByText('for R$10,00 month')).toBeInTheDocument()
  })

  it("should be able to load the initial data", () => {
    const retrieveStripePricesMocked = jest.mocked(stripe.prices.retrieve)

    retrieveStripePricesMocked
  })
})
