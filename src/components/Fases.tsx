
export const Fases = () => {
    return(

        <div className="Border border-2 border-[#d9d9d8] rounded-[20px] flex mt-2.5 ml-50 w-250 h-15 p-1 gap-1 poppins bg-white" style={{fontWeight: 400}}>

                <input 
                    className="flex flex-auto bg-[#1E2C4B] hover:bg-[#D3DBEC] hover:text-[#1E2C4B] border border-transparent hover:border-[#d9d9d8] 
                        transition-colors duration-200 rounded-[15px] text-white" 
                    type="button" 
                    value="1° Fase" 
                />

                <input 
                    className="flex flex-auto bg-[#1E2C4B] hover:bg-[#D3DBEC] hover:text-[#1E2C4B] border border-transparent hover:border-[#d9d9d8] 
                        transition-colors duration-200 rounded-[15px] text-white" 
                    type="button" 
                    value="2° Fase" 
                />

                <input 
                    className="flex flex-auto bg-[#1E2C4B] hover:bg-[#D3DBEC] hover:text-[#1E2C4B] border border-transparent hover:border-[#d9d9d8] 
                        transition-colors duration-200 rounded-[15px] text-white" 
                    type="button" 
                    value="3° Fase" 
                  />

        </div>

    )
}