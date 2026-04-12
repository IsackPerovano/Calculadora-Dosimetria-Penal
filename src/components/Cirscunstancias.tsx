import Icon from '../assets/justica.svg'

export const Circunstancias = () => {
    return(
        <div className="h-125 w-270 border-2 rounded-[15px] pl-3.5 border-[#d9d9d8] bg-white ml-50 mt-5">

            <h3 
               className="flex pt-3 gap-3 text-[24px] poppins" style={{fontWeight: 500}} >
                <img src={Icon} className='w-8 h-8'/>
                Circunstâncias Judiciais (Art. 59 CP)
            </h3>                            

            <h4
                className="pt-1 poppins  poppins" style={{fontWeight: 300}}>
                Selecione as circunstâncias que devem ser valoradas.
            </h4>

           <div className='flex pt-2'>
               <h5 className='pr-1 poppins' style={{fontWeight: 400}} >Valor de cada Circunstancia:</h5> 
               <input className='Border border-2 rounded-[10px] w-16.25 border-[#d9d9d8] text-center' type="number"/>     
                <h5 className='text-[20px] pl-1 pr-1'> / </h5>
                <input className='Border border-2 rounded-[10px] w-16.25 border-[#d9d9d8] text-center' type="number"/>     
           </div>

           <div className='pt-5 grid grid-cols-2'>

                <label className="cursor-pointer">
                    <input type="checkbox" className="peer hidden" />
                    <div className="flex gap-4 items-center pl-3 border-2 rounded-[10px] py-3 w-130
                                    bg-[#1E2C4B] text-white
                                    peer-checked:bg-[#D3DBEC] peer-checked:text-[#1E2C4B] peer-checked:border-[#D3DBEC] transition-colors duration-200">
                        <div className="flex flex-col">
                        <h4 className="poppins font-bold">
                            Culpabilidade
                        </h4>
                        <h5 className="poppins font-light">
                            Grau de reprovabilidade da conduta.
                        </h5>
                        </div>
                    </div>
                </label>



                <label className='cursor-pointer'>
                    <input type="checkbox" className='peer hidden'/>
                    <div className='flex gap-4 items-center pl-3 border-2 rounded-[10px] py-3 w-130
                                    bg-[#1E2C4B] text-white
                                    peer-checked:bg-[#D3DBEC] peer-checked:text-[#1E2C4B] peer-checked:border-[#D3DBEC] transition-colors duration-200'>
                        <h4 className=' poppins' style={{fontWeight:700}}> Conduta Social </h4>
                        <h5 className='poppins' style={{fontWeight:300}}> Relacionamento no meio familiar, trabalho e comunidade. </h5>
                    </div>
                    </label>

               <div className='bg-[#1E2C4B] text-white border-2 rounded-[10px] h-18.75 w-130 flex items-center'>
                    <label className='flex gap-4 items-start pl-3'>
                        <input type="checkbox" className='mt-2'/>
                        <div className='flex flex-col'>
                            <h4 className=' poppins' style={{fontWeight:700}}> Motivos </h4>
                            <h5 className='poppins' style={{fontWeight:300}}> Razões que levaram à prática do crime. </h5>
                        </div>
                    </label>
                </div> 
               <div className='bg-[#1E2C4B] text-white border-2 rounded-[10px] h-18.75 w-130 flex items-center'>
                    <label className='flex gap-4 items-start pl-3'>
                        <input type="checkbox" className='mt-2'/>
                        <div className='flex flex-col'>
                            <h4 className=' poppins' style={{fontWeight:700}}> Consequências </h4>
                            <h5 className='poppins' style={{fontWeight:300}}> Danos causados pelo crime. </h5>
                        </div>
                    </label>
                </div> 
               <div className='bg-[#1E2C4B] text-white border-2 rounded-[10px] h-18.75 w-130 flex items-center'>
                    <label className='flex gap-4 items-start pl-3'>
                        <input type="checkbox" className='mt-2'/>
                        <div className='flex flex-col'>
                            <h4 className=' poppins' style={{fontWeight:700}}> Antecedentes </h4>
                            <h5 className='poppins' style={{fontWeight:300}}> Vida pregressa do agente (condenações anteriores). </h5>
                        </div>
                    </label>
                </div> 
               <div className='bg-[#1E2C4B] text-white border-2 rounded-[10px] h-18.75 w-130 flex items-center'>
                    <label className='flex gap-4 items-start pl-3'>
                        <input type="checkbox" className='mt-2'/>
                        <div className='flex flex-col'>
                            <h4 className=' poppins' style={{fontWeight:700}}> Personalidade </h4>
                            <h5 className='poppins' style={{fontWeight:300}}> Índole e caráter do agente. </h5>
                        </div>
                    </label>
                </div> 
               <div className='bg-[#1E2C4B] text-white border-2 rounded-[10px] h-18.75 w-130 flex items-center'>
                    <label className='flex gap-4 items-start pl-3'>
                        <input type="checkbox" className='mt-2'/>
                        <div className='flex flex-col'>
                            <h4 className=' poppins' style={{fontWeight:700}}> Circunstâncias </h4>
                            <h5 className='poppins' style={{fontWeight:300}}> Grau de reprovabilidade da conduta. </h5>
                        </div>
                    </label>
                </div> 
               <div className='bg-[#1E2C4B] text-white border-2 rounded-[10px] h-18.75 w-130 flex items-center'>
                    <label className='flex gap-4 items-start pl-3'>
                        <input type="checkbox" className='mt-2'/>
                        <div className='flex flex-col'>
                            <h4 className=' poppins' style={{fontWeight:700}}> Comportamento da Vítima </h4>
                            <h5 className='poppins' style={{fontWeight:300}}> Se a vítima contribuiu para o crime. </h5>
                        </div>
                    </label>
                </div> 


           </div>


        </div>
    )
}