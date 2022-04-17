function Story({ img, username }) {
    return (
        <div>
            <img 
                className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out" 
                src="https://imgs.search.brave.com/BucQ8rVjzFLiqc66YL-GjFHxM9SGt6b8LsAGXJTvLXA/rs:fit:700:525:1/g:ce/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L3JhaWxzLWNhbXAt/dHV0b3JpYWxzL2Js/b2cvcHJvZ3JhbW1p/bmcrbWVtZXMvc3Rh/dGVzLW9mLWEtcHJv/Z3JhbW1lci5wbmc" /*{img}*/ 
                alt="Profile pic" 
            />
            <p className="text-xs w-14 truncate text-center">{username}</p>
        </div>
    )
}
export default Story;