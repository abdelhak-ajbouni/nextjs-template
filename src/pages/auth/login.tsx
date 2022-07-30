import { GetServerSideProps } from 'next'
import { getProviders, signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc";

export default function SignIn({ providers }: Props) {

  const getProviderLogo = (id: string) => {
    switch (id) {
      case 'google':
        return <FcGoogle size={32} />

      default:
        return <div>{id}</div>
    }
  }

  return (
    <div className='login'>
        {Object.values(providers).map(({ id, name }: any) => (
          <div key={id} className='flex h-12 py-2 px-8 m-2 rounded border bg-gray-50'>
            {getProviderLogo(id)}
            <button className='mx-4' onClick={() => signIn(id)}>
              Sign in with {name}
            </button>
          </div>
        ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

type Props = {
  providers: any
}
