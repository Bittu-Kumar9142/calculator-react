import React,{useState} from 'react'

const Calculator = () => {
    const[result,setResult] = useState("")
   const handleClick = (e)=>{
        setResult(prev => prev.concat(e.target.id))
    }
    const clearAll = ()=> setResult("");
    const deleteOne = ()=> setResult(result.slice(0,-1))
    const calculate = ()=>{
        try {
         setResult(eval(result).toString())
        } catch (error) {
            console.log(error)
        }
    } 
  return (
    <>
    <div className='min-h-screen w-screen flex flex-col items-center gap-10 px-3 py-10'>
        <h1 className='text-3xl text-pink-400 font-bold'>Calculator</h1>
        
        <div className='bg-rose-400 p-4 max-w-96 rounded-md border-4 border-pink-400 shadow-2xl'>
            <input className='bg-slate-500 rounded-md p-4 w-full text-2xl font-semibold text-white text-right border-2 border-pink-300 shadow-inner tracking-wider' type="text" value={result} disabled/>
            <p className='bg-slate-400 inline-block rounded-full px-3 py-2 my-3 text-white font-semibold'>Brand Calculator</p>
            <div className='grid grid-cols-4 gap-2'>
                <button onClick={clearAll} type='Button' className='operator'>Ac</button>
                <button onClick={deleteOne} type='Button' className='operator'>DEL</button>
                <button onClick={handleClick} type='Button' className='operator' id='.'>.</button>
                <button onClick={handleClick} type='Button' className='operator' id='/'>/</button>
                <button onClick={handleClick} type='Button' className='number' id='7'>7</button>
                <button onClick={handleClick} type='Button' className='number' id='8'>8</button>
                <button onClick={handleClick} type='Button' className='number' id='9'>9</button>
                <button onClick={handleClick} type='Button' className='operator' id='*'>*</button>
                <button onClick={handleClick} type='Button' className='number' id='4'>4</button>
                <button onClick={handleClick} type='Button' className='number' id='5'>5</button>
                <button onClick={handleClick} type='Button' className='number' id='6'>6</button>
                <button onClick={handleClick} type='Button' className='operator' id='-'>-</button>
                <button onClick={handleClick} type='Button' className='number' id='1'>1</button>
                <button onClick={handleClick} type='Button' className='number' id='2'>2</button>
                <button onClick={handleClick} type='Button' className='number' id='3'>3</button>
                <button onClick={handleClick} type='Button' className='operator' id='+'>+</button>
                <button onClick={handleClick} type='Button' className='number' id='00'>00</button>
                <button onClick={handleClick} type='Button' className='number' id='0'>0</button>
                <button onClick={calculate } type='Button' className='operator col-span-2' id='='>=</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Calculator