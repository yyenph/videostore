import Inventorydisplay from './inventory';

export default function InventoryContainer({video}){
    return(
        <div>
            <p>Inventory</p>
            <div class='container'>
            {video.map(({title,imgUrl,copiesAvailable},index) => <Inventorydisplay  key={index} title={title} imgUrl={imgUrl} copiesAvailable={copiesAvailable} />) }
            </div>
        </div>
    )
}

      
        