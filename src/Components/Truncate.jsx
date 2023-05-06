"use client"
export default function TruncateButton() {
    function handleTruncate() {
        fetch("http://localhost:8080/reset", {
            method: "POST",
            body: "",
            headers: {
                "content-type": "application/json",
            },
        }).catch((e) => console.log(e));
    }
    return (<div><button href="https://github.com/virat2010" role="button" onClick={handleTruncate} className="btn btn-primary">RESET DATA</button></div>
    )
}