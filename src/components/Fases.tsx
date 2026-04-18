
type Props = {
    aoClicar : (number: number) => void;
}

export const Fases = ({aoClicar} : Props) => {
    return(

        <div className="Border border-2 border-[#d9d9d8] rounded-[20px] flex mt-2.5 ml-50 w-250 h-15 p-1 gap-1 poppins bg-white" style={{fontWeight: 400}}>

                <button 
                    onClick={() => {aoClicar(1)}}
                    className="flex flex-auto items-center justify-center bg-[#1E2C4B] hover:bg-[#BCE7FD] hover:text-[#1E2C4B] border border-transparent hover:border-[#d9d9d8] 
                        transition-colors duration-200 rounded-[15px] text-white" > 
                    1° Fase
                </button>
             
                <button 
                    onClick={() => {aoClicar(2)}}    
                    className="flex flex-auto items-center justify-center bg-[#1E2C4B] hover:bg-[#BCE7FD] hover:text-[#1E2C4B] border border-transparent hover:border-[#d9d9d8] 
                        transition-colors duration-200 rounded-[15px] text-white" > 
                    2° Fase
                </button>
             
              <button 
                    onClick={() => {aoClicar(3)}}
                    className="flex flex-auto items-center justify-center bg-[#1E2C4B] hover:bg-[#BCE7FD] hover:text-[#1E2C4B] border border-transparent hover:border-[#d9d9d8] 
                        transition-colors duration-200 rounded-[15px] text-white" > 
                    3° Fase
                </button> 

        
        </div>

    )
}