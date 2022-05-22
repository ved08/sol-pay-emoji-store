import useIPFS from "../hooks/useIPFS";

const IpfsDownload = ({hash, filename}) => {
    const file = useIPFS(hash, filename)
    return(
        <div>
            {
                file?
                <div>
                    <a className="download-button" href={title} download={filename}>Download</a>
                </div>:
                <p>Downlading file...</p>
            }
        </div>
    )
}
export default IpfsDownload