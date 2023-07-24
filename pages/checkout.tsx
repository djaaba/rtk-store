import { NextPage } from 'next'
import Link from 'next/link'

const Checkout: NextPage = () => {
	return (
		<>
			<h1>Thanks for order!</h1>
			<Link href='/'>
				<a>Back to catalog</a>
			</Link>
		</>
	)
}

export default Checkout
