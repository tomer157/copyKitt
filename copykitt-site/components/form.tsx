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

    return <>
           <p>Tell what your brands</p>
           <input type="text" placeholder="coffee" value={props.prompt}  onChange={(e) => updatePromptVaLue(e.currentTarget.value)}/>
           <div>{props.prompt.length}/{props.characterLimit}</div>
           <button onClick={props.onSubmit}   disabled={props.isLoading || !isPromptValid}>Submit</button>
           </>;
}

export default Form;