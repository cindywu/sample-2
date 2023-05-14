import Hello from '../components/hello'
import { supabase } from '../lib/supabaseClient'

export default function Home({ countries }) {
  return (
    <div className={'bg-green-200'}>
      hello world
      <Hello />
      <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  let { data } = await supabase.from('countries').select()
  return {
    props: {
      countries: data,
    },
  }
}
