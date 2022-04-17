import { useEffect, useState } from "react";
import faker from "faker";

function Suggestions(){
        const [suggestions, setSuggestions] = useState([]);

        useEffect(() => {
                const suggestions = [...Array(5)].map((_, i) => (
                    {
                        ...faker.helpers.contextualCard(),
                        id: i,
                    }
                ));
                setSuggestions(suggestions);
        }, [])

    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
                <button className="text-gray-600 font-semibold">See all</button>
            </div>
            {
                suggestions.map(profile =>(
                    <div key={profile.id} className='flex items-center justify-between mt-3'>
                        <img 
                            src="https://imgs.search.brave.com/BucQ8rVjzFLiqc66YL-GjFHxM9SGt6b8LsAGXJTvLXA/rs:fit:700:525:1/g:ce/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L3JhaWxzLWNhbXAt/dHV0b3JpYWxzL2Js/b2cvcHJvZ3JhbW1p/bmcrbWVtZXMvc3Rh/dGVzLW9mLWEtcHJv/Z3JhbW1lci5wbmc" /*{profile.avatar}*/ alt="Profile pic"
                            className="w-10 h-10 rounded-full border p-[2px]" 
                        />
                        <div className="flex-1 ml-4">
                            <h2 className="font-semibold text-sm">{profile.username}</h2>
                            <h3 className="text-xs text-gray-400">Works at {profile.company.name}</h3>
                        </div>
                        <button className="text-blue-400 text-sm font-semibold">Follow</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Suggestions;