import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

//Browser...
function signIn({ providers }) {
    return (
        <>
            <Header/>
            <div className="flex flex-col items-center px-14 justify-center min-h-screen py-2 -mt-56  text-center">
                <img className="w-80"src="https://links.papareact.com/ocw" alt="instagram logo" />
                <p className="px-14">
                    This is a REAL app, though is not the real Instagram app, it's also not phishing so chill out bro, this is an app developed by <a className="underline" href="https://gabo.rocks" >Gabriel</a> just for fun. Visit my <a className="underline" href="https://gabo.rocks" >website</a> to learn more. or just look me up on <a className="underline" href="https://www.linkedin.com/in/gabowebdeveloper">LinkedIn</a>.
                </p>
                <div className="mt-40">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                        <button
                            className="p-3 bg-blue-500 rounded-lg text-white" 
                            onClick={() => 
                            SignIntoProvider(provider.id, { callbackUrl: '/' })}>
                            Sign in with {provider.name}
                        </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
//Server...
export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props:{
            providers
        },
    };
}

export default signIn;