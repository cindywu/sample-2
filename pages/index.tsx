import Hello from '../components/hello'
import { supabase } from '../lib/supabaseClient'

export default function Home({ cities }) {
  return (
    <div className={'bg-green-200 p-4'}>
      hello world
      <Hello />
      <ul className={'bg-yellow-200'}>
        {cities.map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  let { data } = await supabase.from('cities').select()
  return {
    props: {
      cities: data,
    },
  }
}
