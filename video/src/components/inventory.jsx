
export default function Inventorydisplay({ title, imgUrl, copiesAvailable }) {
    const checkoutTitle = (event)=>{
        alert(`You check out ${title} and now there is ${copiesAvailable-1} available`)
    }

    return (
        
        <div class='video-display'>
            <div id='title'>{title}</div>
            <img id='img' src={imgUrl}/>
            <p id='available'>{copiesAvailable.current} available</p>
            <button 
            disabled={copiesAvailable===0} 
            id='checkoutbtn'
            onClick={checkoutTitle}
            >Checkout</button>

        </div>
       
    )

}