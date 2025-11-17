export function HeadComponents(){
    return(
        <>
        <div className="bg-green-500/90 w-[100%] h-[70px] pl-2 rounded-2xl flex gap-5">
            <div className="w-[33%]">
                <img className="w-[40%] h-[90px]" src="src/assets/rick-and-morty.png" alt="RICK_AND_MORTY" />
            </div>
            <div className=" w-[33%]">
                <a href=""><button>INICIO</button></a>
                <button className="m-10">HISTÓRIA</button>
                <button>PERSONAGENS</button>
            </div>
            <div className="w-[33%] flex itens-center justify-end pt-4">
                <a href=""><img className="w-[90%] h-[40px]" src="src/assets/github.png" alt="" /></a>
            </div>
        </div>
        </>
    )
}