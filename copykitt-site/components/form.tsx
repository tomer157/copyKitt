interface FormProps {
    prompt: string,
    setPrompt: any,
    onSubmit: any,
    isLoading: boolean,
    characterLimit: number
}

const Form: React.FC<FormProps> = (props) => {
    const characterLimit = 32;
    const isPromptValid = props.prompt.length <= 32;
    const updatePromptVaLue = (text: string) => {
        if (text.length <= props.characterLimit) {
            props.setPrompt(text);
        }
    }

    let statusColor = "text-slate-500";
    let statusText = null;
    
    if(!isPromptValid) {
        statusColor = "text-red-400";
        statusText = `Input must be ${characterLimit} long.`
    }

    return <>
           <div className="mb-6 text-gray-400">
                <p>Tell what your brands</p>
           </div>
           
           <input className="p-2 w-full rounded-md focus:outline-teal-400 focus:outline text-slate-700" type="text" placeholder="coffee" value={props.prompt}  onChange={(e) => updatePromptVaLue(e.currentTarget.value)}/>
           
           <div className=  {statusColor +  " flex justify-between my-2 mg-6 text-slate-500 text-sm"}>
             <div>{statusText}</div>
             <div>
             {props.prompt.length}/{props.characterLimit}
             </div>
             
           </div>
           <button
             className="bg-gradient-to-r from-teal-400 
             to-blue-500 disabled:opacity-50 w-full p-2 rounded-md text-lg"
             onClick={props.onSubmit}
             disabled={props.isLoading || !isPromptValid}
             >Submit </button>
           </>;
}

export default Form;