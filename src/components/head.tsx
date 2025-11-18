export function HeadComponents(){
    return(
        <>
        <div className=" w-full h-[70px] flex justify-center items-center">
            <div className="bg-gradient-to-br from-green-300 to-green-500  w-[90%] h-[70px] pl-2 rounded-2xl flex shadow-xl gap-5">
            <div className="w-[33%]">
                <img className="w-[40%] h-[70px]" src="src/assets/rick-and-morty.png" alt="RICK_AND_MORTY" />
            </div>
            <div className=" w-[33%] pt-6 flex itens-center justify-center text-lg font-semibold">
                <a href="">Rick Sanchez</a>
            </div>
            <div className="w-[33%] flex itens-center justify-end pt-4">
                <a href="https://github.com/EmanuelfrJunior" target="blank"><img className="w-[90%] h-[40px]" src="src/assets/github.png" alt="" /></a>
            </div>
        </div>
        </div>
        </>
    )
}