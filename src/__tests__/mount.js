import { render, fireEvent } from '@testing-library/vue'
import HomeView from '@/views/HomeView'

test('Testing components', async () => {
  const { getByText } = render(HomeView)

  // getByText('Login to your')
  getByText('Login to your account')

  const loginButton = getByText('Login')

  await fireEvent.click(loginButton)

  getByText('Please enter your email and password')
})
