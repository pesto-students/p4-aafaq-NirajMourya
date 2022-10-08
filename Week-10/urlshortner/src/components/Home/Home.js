import {useState} from "react";
import toast from "react-hot-toast"; 

function Home()
{
    const apiUrl = "https://api.shrtco.de/v2/shorten?url";
    const [inputURL, setInputURL] = useState("");
    const [originalLink, setOriginalLink] = useState("");
    const [shortenLink, setShortenLink] = useState("");
    const [urls, setUrls] = useState([]);
   
    async function ShortURLFun()
    {
        try
        {
        const res = await fetch(`${apiUrl}=${inputURL}`);
        
        const data = await res.json();
        if (data?.ok) {
             debugger;
             setInputURL("");
             setOriginalLink(data?.result?.original_link);
             setShortenLink(data?.result?.short_link);
             setUrls([
                ...urls,
                {
                  originalLink: data?.result?.original_link,
                  shortenLink: data?.result?.short_link,
                },
            ]);
        }
        }
        catch(err)
        {
              alert("Some error occured, Please try again.");
        }
    }
    function isUrlValid(userInput) {
        var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        if(res == null)
            return false;
        else
            return true;
    }

    async function copyURL()
    {
        typeof window !== "undefined" &&
        (await window.navigator.clipboard.writeText(shortenLink));
        toast.success("Url Copied !!!");  
    }
    return (
        <div>
        <div>
            <input type="url" placeholder="Please enter URL" value={inputURL} onChange ={ (e) => setInputURL(e.target.value)}/>
            <button onClick={ShortURLFun} disabled={!isUrlValid(inputURL)}>
              Shorten it!
            </button>
        </div>
        {
            shortenLink !== "" ?
            (
                <div>
                <a href={originalLink}>
                   {originalLink}
                </a>
                <a href={shortenLink}>
                    {shortenLink}
                </a>
                <button onClick={copyURL}>Copy</button>
                </div>
            )
            :""
        }
        <div className="shortenMainDiv">
        <table>
          <thead>
            {urls?.length > 0 ? (
              <tr>
                <th>Original URL</th>
                <th>Shortened URL</th>
              </tr>
            ) : (
              ""
            )}
          </thead>
          <tbody>
            {urls?.map((url, i) => (
                <tr key={i}>
                <td>
                  <a
                    href={url?.originalLink}
                    target="_blank"
                  >
                    {url?.originalLink}
                  </a>
                </td>
                <td>
                  <a
                    href={url?.shortenLink}
                    target="_blank"
                  >
                    {url?.shortenLink}
                  </a>
                </td>
              </tr> 
            ))}
          </tbody>
        </table>
        </div>
        </div>

    )
}

export default Home