import Icon from '../assets/calculadora.svg';


export const AgraAten = () => {
    return(

        <div   className=" h-60 w-250 ml-50 pl-3.5 pr-3.5 mt-5 border-2 border-[#d9d9d8] rounded-[15px]  bg-white">

            <h3 
                className="flex pt-3 gap-3 text-[24px] poppins" style={{fontWeight: 500}} >
                <img src={Icon} />    
                Agravantes e Atenuantes
            </h3>

            
            <h4
                className="pt-1 poppins poppins" style={{fontWeight: 300}}>
               Arts. 61 a 66 do Código Penal.
            </h4>

            <div className='flex pt-2 items-center'>
                <h5 className='pr-1 poppins' style={{fontWeight: 400}} >Valor de cada Agravante e Atenuante:</h5> 
                <input className='Border border-2 rounded-[10px] w-16.25 border-[#d9d9d8] text-center' type="number" />     
                <h5 className='text-[20px] pl-1 pr-1'> / </h5>
                <input className='Border border-2 rounded-[10px] w-16.25 border-[#d9d9d8] text-center' type="number"/>     
           </div>



            <div className="flex  pt-4">    
                <div>    
                    <h3 
                        className=" text-[18px] poppins " style={{fontWeight: 700}}>
                        Agravantes
                    </h3>


                    <div className='flex'>

                        <div className='pr-10'>
                            <div className="border rounded-[10px] w-[205px] h-[30px] flex items-center justify-center text-[20px]" >
                                <button> - </button>
                            </div>
                        </div>

                        <div className='pr-17.5'>
                            <div className="border rounded-[10px] w-[205px] h-[30px] flex items-center justify-center text-[20px]" >
                                <button> + </button>
                            </div>
                        </div>
                    </div>
                </div>    


                <div>
                    <h3 
                        className=" text-[18px] poppins" style={{fontWeight: 700}}>
                        Atenuantes
                    </h3>

                   <div className='flex'>

                        <div>
                            <div className="border rounded-[10px] w-[205px] h-[30px] flex items-center justify-center text-[20px]" >
                                <button> - </button>
                            </div>
                        </div>

                        <div className='pl-10'>
                            <div className="border rounded-[10px] w-[205px] h-[30px] flex items-center justify-center text-[20px]" >
                                <button> + </button>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>

        </div>

    )
}