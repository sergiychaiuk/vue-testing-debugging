import { render } from '@testing-library/vue'
import HomeView from '@/views/HomeView'

test('Testing components', () => {
  const { getByText } = render(HomeView)
})
