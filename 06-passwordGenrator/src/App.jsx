import { useState, useCallback ,useEffect , useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);

  const [characterAllowed, setCharacterAllowed] = useState(false);

  const [Password, setPassword] = useState("");

  const passwordGenrator = 
    useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTVWQYZabcdefghijklmnopqrstopqrestvwxyz";

      if (numberAllowed) str += "0123456789";
      if (characterAllowed) str += "!@#$%^&*()_+";

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }

      setPassword(pass);
    }, [length, numberAllowed, characterAllowed]);

  

  const copyPasswordToClipboard = useCallback(() => {

    passwordRef.current?.select();

    window.navigator.clipboard.writeText(Password)

  } , [ Password])

    useEffect(() => {
      passwordGenrator()
    },[length , numberAllowed , characterAllowed , passwordGenrator])


    // use ref  

    const passwordRef = useRef(null)


  


  return (
    <>
      {/* <h1 className='pt-5  text-center text-4xl text-white'>Password Genrator</h1>    */}

      <div className=" w-full max-w-md mx-auto shadow-md  rounded-lg px-4 my-8 text-yellow-700 bg-gray-800">
        <div className="flex flex-shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3 "
            placeholder="Password"
            readOnly
            ref={ passwordRef }
            
          />
          <button onClick={copyPasswordToClipboard} className="outline-none rounded-sm bg-gray-600 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={15}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>length : {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label> Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={(prev) => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label> Characters </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
