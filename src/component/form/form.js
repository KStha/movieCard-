import React, {useState} from 'react'

const Form = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const [allEntry, setallEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = {email : email, password: password};

        setallEntry([...allEntry, newEntry]);
        console.log(allEntry);
    }

    return (
        <>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text " name="email" id="email" value={email} 
                    onChange={(e) => setemail(e.target.value)}
                     ></input>
                </div>

                <div>
                    <label htmlFor="password">password</label>
                    <input type="text " name="password" id="password" value={password}
                    onChange={(e) => setpassword(e.target.value)}></input>
                </div>

                <button type="submit"> submit</button>
            </form>

            <div>
                {
                    allEntry.map((curlElem) => {
                      return (
                          <div>
                              <p> {curlElem.email}</p>
                              <p> {curlElem.password} </p>
                          </div>
                      )  
                    })
                }
            </div>
        </>
    )
}
 export default Form;